"use client";

import type { ComponentProps, FC, ReactElement, ReactNode } from "react";
import { Children, cloneElement, useCallback, useEffect, useMemo, useRef, useState } from "react";
import ScrollContainer from "../../helpers/drag-scroll";
import { get } from "../../helpers/get";
import { isClient } from "../../helpers/is-client";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { ChevronLeftIcon, ChevronRightIcon } from "../../icons";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite/FlowbiteTheme";
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

export const Carousel: FC<CarouselProps> = ({
  children,
  indicators = true,
  leftControl,
  rightControl,
  slide = true,
  draggable = true,
  slideInterval,
  className,
  onSlideChange = null,
  pauseOnHover = false,
  theme: customTheme,
  resetTheme,
  applyTheme,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme(
    [carouselTheme, provider.theme?.carousel, customTheme],
    [get(provider.resetTheme, "carousel"), resetTheme],
    [get(provider.applyTheme, "carousel"), applyTheme],
  );

  const isDeviceMobile = isClient() && navigator.userAgent.indexOf("IEMobile") !== -1;
  const carouselContainer = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

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

  const navigateTo = useCallback(
    (item: number) => () => {
      if (!items) return;
      item = (item + items.length) % items.length;
      if (carouselContainer.current) {
        carouselContainer.current.scrollLeft = carouselContainer.current.clientWidth * item;
      }
      setActiveItem(item);
    },
    [items],
  );

  useEffect(() => {
    if (carouselContainer.current && !isDragging && carouselContainer.current.scrollLeft !== 0) {
      setActiveItem(Math.round(carouselContainer.current.scrollLeft / carouselContainer.current.clientWidth));
    }
  }, [isDragging]);

  useEffect(() => {
    if (slide && !(pauseOnHover && isHovering)) {
      const intervalId = setInterval(() => !isDragging && navigateTo(activeItem + 1)(), slideInterval ?? 3000);

      return () => clearInterval(intervalId);
    }
  }, [activeItem, isDragging, navigateTo, slide, slideInterval, pauseOnHover, isHovering]);

  useEffect(() => {
    if (didMountRef.current) {
      onSlideChange && onSlideChange(activeItem);
    } else {
      didMountRef.current = true;
    }
  }, [onSlideChange, activeItem]);

  const handleDragging = (dragging: boolean) => () => setIsDragging(dragging);

  const setHoveringTrue = useCallback(() => setIsHovering(true), [setIsHovering]);
  const setHoveringFalse = useCallback(() => setIsHovering(false), [setIsHovering]);

  return (
    <div
      className={twMerge(theme.root.base, className)}
      data-testid="carousel"
      onMouseEnter={setHoveringTrue}
      onMouseLeave={setHoveringFalse}
      onTouchStart={setHoveringTrue}
      onTouchEnd={setHoveringFalse}
      {...props}
    >
      <ScrollContainer
        className={twMerge(theme.scrollContainer.base, (isDeviceMobile || !isDragging) && theme.scrollContainer.snap)}
        draggingClassName="cursor-grab"
        innerRef={carouselContainer}
        onEndScroll={handleDragging(false)}
        onStartScroll={handleDragging(draggable)}
        vertical={false}
        horizontal={draggable}
      >
        {items?.map((item, index) => (
          <div
            key={index}
            className={theme.item.wrapper[draggable ? "on" : "off"]}
            data-active={activeItem === index}
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
              {leftControl ? leftControl : <DefaultLeftControl theme={customTheme} />}
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
              {rightControl ? rightControl : <DefaultRightControl theme={customTheme} />}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const DefaultLeftControl: FC<DefaultLeftRightControlProps> = ({ theme: customTheme, resetTheme, applyTheme }) => {
  const provider = useThemeProvider();
  const theme = resolveTheme(
    [carouselTheme, provider.theme?.carousel, customTheme],
    [get(provider.resetTheme, "carousel"), resetTheme],
    [get(provider.applyTheme, "carousel"), applyTheme],
  );

  return (
    <span className={theme.control.base}>
      <ChevronLeftIcon className={theme.control.icon} />
    </span>
  );
};

const DefaultRightControl: FC<DefaultLeftRightControlProps> = ({ theme: customTheme, resetTheme, applyTheme }) => {
  const provider = useThemeProvider();
  const theme = resolveTheme(
    [carouselTheme, provider.theme?.carousel, customTheme],
    [get(provider.resetTheme, "carousel"), resetTheme],
    [get(provider.applyTheme, "carousel"), applyTheme],
  );

  return (
    <span className={theme.control.base}>
      <ChevronRightIcon className={theme.control.icon} />
    </span>
  );
};

Carousel.displayName = "Carousel";
