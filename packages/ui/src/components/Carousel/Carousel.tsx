"use client";

import type { ComponentProps, ReactElement, ReactNode } from "react";
import { Children, cloneElement, forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";
import ScrollContainer from "../../helpers/drag-scroll";
import { get } from "../../helpers/get";
import { isClient } from "../../helpers/is-client";
import { resolveProps } from "../../helpers/resolve-props";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { ChevronLeftIcon } from "../../icons/chevron-left-icon";
import { ChevronRightIcon } from "../../icons/chevron-right-icon";
import { useThemeProvider } from "../../theme/provider";
import type { FlowbiteBoolean, ThemingProps } from "../../types";
import { carouselTheme } from "./theme";

export interface CarouselTheme {
  root: CarouselRootTheme;
  indicators: CarouselIndicatorsTheme;
  item: CarouselItemTheme;
  control: CarouselControlTheme;
  scrollContainer: CarouselScrollContainer;
}

export interface CarouselRootTheme {
  base: string;
  leftControl: string;
  rightControl: string;
}

export interface CarouselIndicatorsTheme {
  active: FlowbiteBoolean;
  base: string;
  wrapper: string;
}

export interface CarouselItemTheme {
  base: string;
  wrapper: FlowbiteBoolean;
}

export interface CarouselControlTheme {
  base: string;
  icon: string;
}

export interface CarouselScrollContainer {
  base: string;
  snap: string;
}

export interface CarouselProps extends ComponentProps<"div">, ThemingProps<CarouselTheme> {
  indicators?: boolean;
  leftControl?: ReactNode;
  rightControl?: ReactNode;
  draggable?: boolean;
  slide?: boolean;
  slideInterval?: number;
  onSlideChange?: (slide: number) => void;
  pauseOnHover?: boolean;
}

export interface DefaultLeftRightControlProps extends ComponentProps<"div">, ThemingProps<CarouselTheme> {}

export const Carousel = forwardRef<HTMLDivElement, CarouselProps>((props, ref) => {
  const provider = useThemeProvider();
  const theme = useResolveTheme(
    [carouselTheme, provider.theme?.carousel, props.theme],
    [get(provider.clearTheme, "carousel"), props.clearTheme],
    [get(provider.applyTheme, "carousel"), props.applyTheme],
  );

  const {
    children,
    indicators = true,
    leftControl,
    rightControl,
    slide = true,
    draggable = true,
    slideInterval,
    className,
    onSlideChange,
    pauseOnHover = false,
    ...restProps
  } = resolveProps(props, provider.props?.carousel);

  const isDeviceMobile = isClient() && navigator.userAgent.indexOf("IEMobile") !== -1;
  const carouselContainer = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const didMountRef = useRef(false);

  const items = useMemo(
    () =>
      Children.map(children as ReactElement[], (child: ReactElement) =>
        cloneElement(child, {
          className: twMerge(theme.item.base, child.props.className),
        }),
      ),
    [children, theme.item.base],
  );

  const itemCount = items?.length ?? 0;

  const navigateTo = useCallback(
    (item: number) => () => {
      if (!items || isAnimating) return;

      const container = carouselContainer.current;
      if (!container) return;

      const totalItems = items.length;
      const targetItem = ((item % totalItems) + totalItems) % totalItems;

      const isWrappingForward = activeItem === totalItems - 1 && item >= totalItems;
      const isWrappingBackward = activeItem === 0 && item < 0;

      if (isWrappingForward || isWrappingBackward) {
        setIsAnimating(true);

        // Scroll to the clone (last element for backward, first-after-last for forward)
        if (isWrappingForward) {
          // Clone of first slide is at the end (index = totalItems + 1 in the extended list)
          // But we use scrollLeft directly
          container.scrollTo({
            left: container.clientWidth * (totalItems + 1),
            behavior: "smooth",
          });
        } else {
          // Clone of last slide is at position 0
          container.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        }

        // After the smooth scroll animation, jump instantly to the real slide
        const onTransitionDone = () => {
          container.style.scrollBehavior = "auto";
          if (isWrappingForward) {
            container.scrollLeft = container.clientWidth * 1; // real first slide at index 1
          } else {
            container.scrollLeft = container.clientWidth * totalItems; // real last slide
          }
          container.style.scrollBehavior = "";
          setIsAnimating(false);
        };

        setTimeout(onTransitionDone, 500);
        setActiveItem(targetItem);
      } else {
        // Normal navigation - account for the prepended clone
        container.scrollTo({
          left: container.clientWidth * (targetItem + 1),
          behavior: "smooth",
        });
        setActiveItem(targetItem);
      }
    },
    [items, activeItem, isAnimating],
  );

  // Initialize scroll position to first real slide (past the prepended clone)
  useEffect(() => {
    const container = carouselContainer.current;
    if (container && items && items.length > 0) {
      container.style.scrollBehavior = "auto";
      container.scrollLeft = container.clientWidth * 1;
      container.style.scrollBehavior = "";
    }
  }, [items]);

  useEffect(() => {
    if (carouselContainer.current && !isDragging && !isAnimating) {
      const container = carouselContainer.current;
      const rawIndex = Math.round(container.scrollLeft / container.clientWidth);
      // Account for the prepended clone: real items start at index 1
      const totalItems = items?.length ?? 0;
      if (totalItems > 0) {
        const realIndex = ((rawIndex - 1) % totalItems + totalItems) % totalItems;
        setActiveItem(realIndex);
      }
    }
  }, [isDragging, isAnimating, items]);

  useEffect(() => {
    if (slide && !(pauseOnHover && isHovering)) {
      const intervalId = setInterval(() => !isDragging && !isAnimating && navigateTo(activeItem + 1)(), slideInterval ?? 3000);

      return () => clearInterval(intervalId);
    }
  }, [activeItem, isDragging, isAnimating, navigateTo, slide, slideInterval, pauseOnHover, isHovering]);

  useEffect(() => {
    if (didMountRef.current) {
      onSlideChange?.(activeItem);
    } else {
      didMountRef.current = true;
    }
  }, [onSlideChange, activeItem]);

  const handleDragging = (dragging: boolean) => () => setIsDragging(dragging);

  // Handle drag end: snap to nearest real slide and fix wrap-around
  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
    const container = carouselContainer.current;
    if (!container || !items) return;

    const totalItems = items.length;
    const rawIndex = Math.round(container.scrollLeft / container.clientWidth);

    // If scrolled to the prepended clone (index 0), jump to real last slide
    if (rawIndex <= 0) {
      container.style.scrollBehavior = "auto";
      container.scrollLeft = container.clientWidth * totalItems;
      container.style.scrollBehavior = "";
      setActiveItem(totalItems - 1);
    }
    // If scrolled to the appended clone (index totalItems + 1), jump to real first slide
    else if (rawIndex >= totalItems + 1) {
      container.style.scrollBehavior = "auto";
      container.scrollLeft = container.clientWidth * 1;
      container.style.scrollBehavior = "";
      setActiveItem(0);
    } else {
      setActiveItem(rawIndex - 1);
    }
  }, [items]);

  const setHoveringTrue = useCallback(() => setIsHovering(true), []);
  const setHoveringFalse = useCallback(() => setIsHovering(false), []);

  // Build the extended items array: [cloneLast, ...items, cloneFirst]
  const extendedItems = useMemo(() => {
    if (!items || items.length === 0) return items;
    const lastClone = cloneElement(items[items.length - 1], { key: "clone-last" });
    const firstClone = cloneElement(items[0], { key: "clone-first" });
    return [lastClone, ...items, firstClone];
  }, [items]);

  return (
    <div
      ref={ref}
      className={twMerge(theme.root.base, className)}
      data-testid="carousel"
      onMouseEnter={setHoveringTrue}
      onMouseLeave={setHoveringFalse}
      onTouchStart={setHoveringTrue}
      onTouchEnd={setHoveringFalse}
      {...restProps}
    >
      <ScrollContainer
        className={twMerge(theme.scrollContainer.base, (isDeviceMobile || !isDragging) && theme.scrollContainer.snap)}
        draggingClassName="cursor-grab"
        innerRef={carouselContainer}
        onEndScroll={handleDragEnd}
        onStartScroll={handleDragging(draggable)}
        vertical={false}
        horizontal={draggable}
      >
        {extendedItems?.map((item, index) => (
          <div
            key={index}
            className={theme.item.wrapper[draggable ? "on" : "off"]}
            data-active={activeItem === ((index - 1 + itemCount) % itemCount)}
            data-testid="carousel-item"
          >
            {item}
          </div>
        ))}
      </ScrollContainer>
      {indicators && (
        <div className={theme.indicators.wrapper}>
          {items?.map((_, index) => (
            <button
              key={index}
              className={twMerge(theme.indicators.base, theme.indicators.active[index === activeItem ? "on" : "off"])}
              onClick={navigateTo(index)}
              data-testid="carousel-indicator"
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {items && (
        <>
          <div className={theme.root.leftControl}>
            <button
              className="group"
              data-testid="carousel-left-control"
              onClick={navigateTo(activeItem - 1)}
              type="button"
              aria-label="Previous slide"
            >
              {leftControl ? leftControl : <DefaultLeftControl theme={theme.control} />}
            </button>
          </div>
          <div className={theme.root.rightControl}>
            <button
              className="group"
              data-testid="carousel-right-control"
              onClick={navigateTo(activeItem + 1)}
              type="button"
              aria-label="Next slide"
            >
              {rightControl ? rightControl : <DefaultRightControl theme={theme.control} />}
            </button>
          </div>
        </>
      )}
    </div>
  );
});

Carousel.displayName = "Carousel";

function DefaultLeftControl({ theme }: { theme: CarouselControlTheme }) {
  return (
    <span className={theme.base}>
      <ChevronLeftIcon className={theme.icon} />
    </span>
  );
}

function DefaultRightControl({ theme }: { theme: CarouselControlTheme }) {
  return (
    <span className={theme.base}>
      <ChevronRightIcon className={theme.icon} />
    </span>
  );
}
