import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite/ThemeContext';
import { useAccordionContext } from './AccordionPanelContext';

export interface FlowbiteAccordionComponentTheme {
  base: string;
}

export interface AccordionContentProps extends PropsWithChildren<ComponentProps<'div'>> {
  theme?: DeepPartial<FlowbiteAccordionComponentTheme>;
}

export const AccordionContent: FC<AccordionContentProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}): JSX.Element => {
  const { isOpen } = useAccordionContext();

  const theme = mergeDeep(useTheme().theme.accordion.content, customTheme);

  return (
    <div
      className={classNames(theme.base, className)}
      data-testid="flowbite-accordion-content"
      hidden={!isOpen}
      {...props}
    >
      {children}
    </div>
  );
};
