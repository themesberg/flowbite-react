import { Children, cloneElement, ComponentProps, FC, PropsWithChildren, ReactElement, useMemo } from 'react';
import { AccordionPanel, AccordionPanelProps } from './AccordionPanel';
import { AccordionTitle } from './AccordionTitle';
import { AccordionContent } from './AccordionContent';
import classNames from 'classnames';
import { useTheme } from '../Flowbite/ThemeContext';
import { excludeClassName } from '../../helpers/exclude';

export interface AccordionProps extends PropsWithChildren<ComponentProps<'div'>> {
  flush?: boolean;
}

const AccordionComponent: FC<AccordionProps> = ({ children, flush, ...props }): JSX.Element => {
  const theirProps = excludeClassName(props);

  const theme = useTheme().theme.accordion;

  const panels = useMemo(
    () => Children.map(children as ReactElement<AccordionPanelProps>[], (child) => cloneElement(child, { flush })),
    [children, flush],
  );

  return (
    <div
      className={classNames(theme.base, theme.flush[flush ? 'on' : 'off'])}
      data-testid="flowbite-accordion"
      {...theirProps}
    >
      {panels}
    </div>
  );
};

AccordionComponent.displayName = 'Accordion';
AccordionPanel.displayName = 'Accordion.Panel';
AccordionTitle.displayName = 'Accordion.Title';
AccordionContent.displayName = 'Accordion.Content';

export const Accordion = Object.assign(AccordionComponent, {
  Panel: AccordionPanel,
  Title: AccordionTitle,
  Content: AccordionContent,
});
