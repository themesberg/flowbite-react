import { ComponentProps, FC, Fragment, ReactNode, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
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

export const Accordion: FC<AccordionProps> = ({
  items,
  flush,
  arrowIcon: ArrowIcon = ChevronDownIcon,
}) => {
  const [openItems, setOpenItems] = useState<boolean[]>(
    items.map((item) => item.open),
  );

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      {items.map((item, index) => (
        <Fragment key={index}>
          <h2>
            <button
              type="button"
              className={classNames(
                'flex justify-between items-center py-5 w-full font-medium text-left border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400',
                {
                  'px-5 border focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800':
                    !flush,
                  'border-b': flush,
                  'border-t-0': index > 0,
                  'rounded-t-xl': !flush && index === 0,
                  'rounded-b-xl':
                    !flush && index === items.length - 1 && !openItems[index],
                  'text-gray-900 dark:text-white': !!openItems[index],
                  'bg-gray-100 dark:bg-gray-800': !!openItems[index] && !flush,
                },
              )}
              onClick={() =>
                setOpenItems({ ...openItems, [index]: !openItems[index] })
              }
            >
              <span>{item.title}</span>
              <ArrowIcon
                className={classNames('w-6 h-6 shrink-0', {
                  'rotate-180': openItems[index],
                })}
              />
            </button>
          </h2>
          <div className={classNames({ hidden: !openItems[index] })}>
            <div
              className={classNames(
                'py-5 border-b border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900',
                {
                  'px-5 border': !flush,
                  'rounded-b-xl':
                    !flush && index === items.length - 1 && openItems[index],
                },
              )}
            >
              {item.body}
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};
