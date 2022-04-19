import {
  Children,
  cloneElement,
  ComponentProps,
  FC,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import ScrollContainer from 'react-indiana-drag-scroll';

export type CarouselProps = PropsWithChildren<{
  slide?: boolean;
  slideInterval?: number;
  indicators?: boolean;
  leftControl?: ReactNode;
  rightControl?: ReactNode;
}>;

export const Carousel: FC<CarouselProps> = ({
  children,
  slide = true,
  slideInterval,
  indicators = true,
  leftControl,
  rightControl,
}) => {
  const [activeItem, setActiveItem] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const carouselContainer = useRef<HTMLDivElement>(null);
  const isDeviceMobile = typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1;

  const items = useMemo(
    () =>
      Children.map(children as ReactElement<ComponentProps<'img'>>[], (child: ReactElement<ComponentProps<'img'>>) =>
        cloneElement(child, {
          className: classNames(
            child.props.className,
            'absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2',
          ),
        }),
      ),
    [children],
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
    <div className="relative">
      <ScrollContainer
        className={classNames(
          'flex h-56 snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg sm:h-64 xl:h-80 2xl:h-96',
          { 'snap-x': isDeviceMobile || !isDragging },
        )}
        draggingClassName="cursor-grab"
        onStartScroll={handleDragging(true)}
        onEndScroll={handleDragging(false)}
        innerRef={carouselContainer}
        vertical={false}
      >
        {items?.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0 transform snap-center">
            {item}
          </div>
        ))}
      </ScrollContainer>

      {indicators && (
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3">
          {items.map((_, index) => (
            <button
              key={index}
              className={classNames('h-3 w-3 rounded-full', {
                'bg-white dark:bg-gray-800': index === activeItem,
                'bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800': index !== activeItem,
              })}
              onClick={navigateTo(index)}
            />
          ))}
        </div>
      )}

      <button
        className="group absolute top-0 left-0 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        onClick={navigateTo(activeItem - 1)}
        type="button"
      >
        {leftControl ? leftControl : <DefaultLeftControl />}
      </button>
      <button
        className="group absolute top-0 right-0 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        onClick={navigateTo(activeItem + 1)}
        type="button"
      >
        {rightControl ? rightControl : <DefaultRightControl />}
      </button>
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
