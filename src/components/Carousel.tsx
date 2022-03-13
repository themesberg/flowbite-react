import {
  Children,
  cloneElement,
  ComponentProps,
  FC,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import classNames from 'classnames';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

export type CarouselProps = {
  slide?: boolean;
  slideInterval?: number;
  indicators?: boolean;
  leftControl?: ReactNode;
  rightControl?: ReactNode;
};

export const Carousel: FC<CarouselProps> = ({
  children,
  slide = true,
  slideInterval,
  indicators = true,
  leftControl,
  rightControl,
}) => {
  const [activeItem, setActiveItem] = useState(0);

  const items = useMemo(
    () =>
      Children.map(children as ReactElement<ComponentProps<'img'>>[], (child: ReactElement<ComponentProps<'img'>>) =>
        cloneElement(child, {
          className: classNames(
            child.props.className,
            'block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2',
          ),
        }),
      ),
    [children],
  );

  const navigateTo = useCallback(
    (item: number) => () => {
      item = (item + items.length) % items.length;
      setActiveItem(item);
    },
    [items.length],
  );

  const isAfterActiveItem = (item: number) =>
    item !== activeItem && (activeItem === items.length - 1 ? item === 0 : item - 1 === activeItem);
  const isBeforeActiveItem = (item: number) =>
    item !== activeItem && (activeItem === 0 ? item === items.length - 1 : item + 1 === activeItem);

  useEffect(() => {
    if (slide) {
      const intervalId = setInterval(() => navigateTo(activeItem + 1)(), slideInterval ?? 3000);

      return () => clearInterval(intervalId);
    }
  }, [activeItem, navigateTo, slide, slideInterval]);

  return (
    <div className="relative">
      {/* Carousel wrapper */}
      <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
        {items?.map((item, index) => (
          <div
            key={index}
            className={classNames('absolute inset-0 transition-all transform duration-700 ease-in-out', {
              hidden: index !== activeItem && !isBeforeActiveItem(index) && !isAfterActiveItem(index),
              '-translate-x-full': isBeforeActiveItem(index),
              'translate-x-full': isAfterActiveItem(index),
            })}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      {indicators && (
        <div className="flex absolute bottom-5 left-1/2 space-x-3 -translate-x-1/2">
          {items.map((_, index) => (
            <button
              key={index}
              className={classNames('w-3 h-3  rounded-full', {
                'bg-white dark:bg-gray-800': index === activeItem,
                'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800': index !== activeItem,
              })}
              onClick={navigateTo(index)}
            />
          ))}
        </div>
      )}

      {/* Slider controls */}
      <button
        className="flex absolute top-0 left-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        onClick={navigateTo(activeItem - 1)}
        type="button"
      >
        {leftControl ? leftControl : <DefaultLeftControl />}
      </button>
      <button
        className="flex absolute top-0 right-0 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        onClick={navigateTo(activeItem + 1)}
        type="button"
      >
        {rightControl ? rightControl : <DefaultRightControl />}
      </button>
    </div>
  );
};

const DefaultLeftControl: FC = () => (
  <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    <HiOutlineChevronLeft className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" />
  </span>
);

const DefaultRightControl: FC = () => (
  <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
    <HiOutlineChevronRight className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" />
  </span>
);
