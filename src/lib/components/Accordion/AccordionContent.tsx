import { ComponentProps, FC } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';

import { useAccordionContext } from './AccordionPanelContext';

export const AccordionContent: FC<ComponentProps<'div'>> = ({ children, ...props }): JSX.Element | null => {
  const theirProps = excludeClassName(props);

  const { isOpen } = useAccordionContext();
  const theme = useTheme().theme.accordion.content;

  return isOpen ? (
    <div className={theme.base} {...theirProps}>
      {children}
    </div>
  ) : null;
};
