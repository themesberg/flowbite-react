import cn from 'classnames';
import { ComponentProps, FC } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

import { useAccordionContext } from './AccordionPanelContext';

export const AccordionContent: FC<ComponentProps<'div'>> = ({ children, ...props }) => {
  const {
    theme: {
      accordion: { content },
    },
  } = useTheme();
  const { isOpen } = useAccordionContext();

  const baseStyle = cn('first:rounded-t-lg', content.base);

  return isOpen ? (
    <div {...props} className={baseStyle}>
      {children}
    </div>
  ) : null;
};
