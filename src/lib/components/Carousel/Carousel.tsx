import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren, ReactElement, ReactNode } from 'react';
import { Children, cloneElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import ScrollContainer from 'react-indiana-drag-scroll';
import windowExists from '../../helpers/window-exists';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbiteCarouselTheme {
  base: string;
  indicators: {
    active: {
      off: string;
      on: string;
    };
    base: string;
    wrapper: string;
  };
  item: {
    base: string;
    wrapper: string;
  };
  control: {
    base: string;
    icon: string;
  };
  leftControl: string;
  rightControl: string;
  scrollContainer: {
    base: string;
    snap: string;
  };
}

export interface CarouselProps extends PropsWithChildren<ComponentProps<'div'>> {
  indicators?: boolean;
  leftControl?: ReactNode;
  rightControl?: ReactNode;
  slide?: boolean;
  slideInterval?: number;
}

export const Carousel: FC<CarouselProps> = ({
  children,
  indicators = true,
  leftControl,
  rightControl,
  slide = true,
  slideInterval,
  className,
  ...props
}): JSX.Element => {
  const isDeviceMobile = windowExists() && navigator.userAgent.indexOf('IEMobile') !== -1;

  const carouselContainer = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const theme = useTheme().theme.carousel;

  const items = useMemo(
    () =>
      Children.map(children as ReactElement[], (child: ReactElement) =>
        cloneElement(child, {
          className: classNames(theme.item.base, child.props.className),
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
    if (slide) {
      const intervalId = setInterval(() => !isDragging && navigateTo(activeItem + 1)(), slideInterval ?? 3000);

      return () => clearInterval(intervalId);
    }
  }, [activeItem, isDragging, navigateTo, slide, slideInterval]);

  const handleDragging = (dragging: boolean) => () => setIsDragging(dragging);

  return (
    <div className={classNames(theme.base, className)} data-testid="carousel" {...props}>
      <ScrollContainer
        className={classNames(
          theme.scrollContainer.base,
          (isDeviceMobile || !isDragging) && theme.scrollContainer.snap,
        )}
        draggingClassName="cursor-grab"
        innerRef={carouselContainer}
        onEndScroll={handleDragging(false)}
        onStartScroll={handleDragging(true)}
        vertical={false}
      >
        {items?.map(
          (item, index): JSX.Element => (
            <div
              key={index}
              className={theme.item.wrapper}
              data-active={activeItem === index}
              data-testid="carousel-item"
            >
              {item}
            </div>
          ),
        )}
      </ScrollContainer>
      {indicators && (
        <div className={theme.indicators.wrapper}>
          {items?.map(
            (_, index): JSX.Element => (
              <button
                key={index}
                className={classNames(
                  theme.indicators.base,
                  theme.indicators.active[index === activeItem ? 'on' : 'off'],
                )}
                onClick={navigateTo(index)}
                data-testid="carousel-indicator"
              />
            ),
          )}
        </div>
      )}

      {items && (
        <>
          <div className={theme.leftControl}>
            <button
              className="group"
              data-testid="carousel-left-control"
              onClick={navigateTo(activeItem - 1)}
              type="button"
            >
              {leftControl ? leftControl : <DefaultLeftControl />}
            </button>
          </div>
          <div className={theme.rightControl}>
            <button
              className="group"
              data-testid="carousel-right-control"
              onClick={navigateTo(activeItem + 1)}
              type="button"
            >
              {rightControl ? rightControl : <DefaultRightControl />}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const DefaultLeftControl: FC = () => {
  const theme = useTheme().theme.carousel;
  return (
    <span className={theme.control.base}>
      <HiOutlineChevronLeft className={theme.control.icon} />
    </span>
  );
};

const DefaultRightControl: FC = () => {
  const theme = useTheme().theme.carousel;
  return (
    <span className={theme.control.base}>
      <HiOutlineChevronRight className={theme.control.icon} />
    </span>
  );
};
