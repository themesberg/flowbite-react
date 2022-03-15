import { ComponentProps, FC } from 'react';
import classNames from 'classnames';
import { HiChevronDown } from 'react-icons/hi';

import { useAccordionContext } from './AccordionPanelContext';

export type AccordionTitleProps = ComponentProps<'button'> & {
  arrowIcon?: FC<ComponentProps<'svg'>>;
};

export const AccordionTitle: FC<AccordionTitleProps> = ({
  children,
  className,
  arrowIcon: ArrowIcon = HiChevronDown,
  ...props
}) => {
  const { flush, isOpen, setIsOpen } = useAccordionContext();

  const onClick = () => setIsOpen(!isOpen);

  return (
    <button
      {...props}
      type="button"
      className={classNames(
        'flex w-full items-center justify-between py-5 text-left font-medium text-gray-500 dark:text-gray-400',
        {
          'hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800': !flush,
          'text-gray-900 dark:text-white': isOpen,
          'bg-gray-100 dark:bg-gray-800': isOpen && !flush,
        },
        className,
      )}
      onClick={onClick}
    >
      <h2>{children}</h2>
      <ArrowIcon className={classNames('h-6 w-6 shrink-0', { 'rotate-180': isOpen })} />
    </button>
  );
};
