import { ComponentProps, FC } from 'react';
import classNames from 'classnames';

import { useAccordionContext } from './AccordionPanelContext';

export const AccordionContent: FC<ComponentProps<'div'>> = ({ children, className, ...props }) => {
  const { isOpen } = useAccordionContext();

  return isOpen ? (
    <div {...props} className={classNames('py-5 dark:bg-gray-900', className)}>
      {children}
    </div>
  ) : null;
};

AccordionContent.displayName = 'Accordion.Content';
