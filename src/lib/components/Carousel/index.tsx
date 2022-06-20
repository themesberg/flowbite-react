import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren, ReactElement, ReactNode } from 'react';
import { Children, cloneElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import ScrollContainer from 'react-indiana-drag-scroll';
import { excludeClassName } from '../../helpers/exclude';
import windowExists from '../../helpers/window-exists';
import { useTheme } from '../Flowbite/ThemeContext';

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
  ...props
}): JSX.Element => {
  const isDeviceMobile = windowExists() && navigator.userAgent.indexOf('IEMobile') !== -1;
  const theirProps = excludeClassName(props);

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
      item = (item + items.length) % items.length;
      if (carouselContainer.current) {
        carouselContainer.current.scrollLeft = carouselContainer.current.clientWidth * item;
      }
      setActiveItem(item);
    },
    [items.length],
  );

  useEffect(() => {
    if (carouselContainer.current && !isDragging) {
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
    <div className={theme.base} data-testid="carousel" {...theirProps}>
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
          {items.map(
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
    </div>
  );
};

const DefaultLeftControl: FC = () => (
  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
    <HiOutlineChevronLeft className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6" />
  </span>
);

const DefaultRightControl: FC = () => (
  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
    <HiOutlineChevronRight className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6" />
  </span>
);
