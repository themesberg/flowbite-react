import type { ComponentProps, FC } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import { useAccordionContext } from './AccordionPanelContext';

export const AccordionContent: FC<ComponentProps<'div'>> = ({ children, ...props }): JSX.Element => {
  const theirProps = excludeClassName(props);

  const { isOpen } = useAccordionContext();
  const theme = useTheme().theme.accordion.content;

  return (
    <div className={theme.base} data-testid="flowbite-accordion-content" hidden={!isOpen} {...theirProps}>
      {children}
    </div>
  );
};
