import { ComponentProps, FC, Fragment, ReactNode, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import classNames from 'classnames';

export type AccordionItem = {
  title: ReactNode;
  body: ReactNode;
  open?: boolean;
};

export type AccordionProps = {
  items: AccordionItem[];
  flush?: boolean;
  arrowIcon?: FC<ComponentProps<'svg'>>;
};

export const Accordion: FC<AccordionProps> = ({ items, flush, arrowIcon: ArrowIcon = HiChevronDown }) => {
  const [openItems, setOpenItems] = useState<(boolean | undefined)[]>(items.map((item) => item.open));

  return (
    <div>
      {items.map((item, index) => (
        <Fragment key={index}>
          <h2>
            <button
              type="button"
              className={classNames(
                'flex w-full items-center justify-between border-gray-200 py-5 text-left font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400',
                {
                  'border px-5 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800':
                    !flush,
                  'border-b': flush,
                  'border-t-0': index > 0,
                  'rounded-t-xl': !flush && index === 0,
                  'rounded-b-xl': !flush && index === items.length - 1 && !openItems[index],
                  'text-gray-900 dark:text-white': !!openItems[index],
                  'bg-gray-100 dark:bg-gray-800': !!openItems[index] && !flush,
                },
              )}
              onClick={() => setOpenItems({ ...openItems, [index]: !openItems[index] })}
            >
              <span>{item.title}</span>
              <ArrowIcon
                className={classNames('h-6 w-6 shrink-0', {
                  'rotate-180': openItems[index],
                })}
              />
            </button>
          </h2>
          <div className={classNames({ hidden: !openItems[index] })}>
            <div
              className={classNames('border-b border-t-0 border-gray-200 py-5 dark:border-gray-700 dark:bg-gray-900', {
                'border px-5': !flush,
                'rounded-b-xl': !flush && index === items.length - 1 && openItems[index],
              })}
            >
              {item.body}
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};
