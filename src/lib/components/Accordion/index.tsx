import { Children, cloneElement, FC, PropsWithChildren, ReactElement, useContext, useMemo } from 'react';
import { AccordionPanel, AccordionPanelProps } from './AccordionPanel';
import { AccordionTitle } from './AccordionTitle';
import { AccordionContent } from './AccordionContent';
import cn from 'classnames';
import { ThemeContext } from '../../contexts/ThemeContext';

export type AccordionProps = PropsWithChildren<{
  flush?: boolean;
}>;

const AccordionComponent: FC<AccordionProps> = ({ children, flush }) => {
  const {
    theme: { accordion },
  } = useContext(ThemeContext);

  const baseStyle = accordion.base;
  const flushStyle = {
    'rounded-lg border': !flush,
    'border-b': flush,
  };

  const panels = useMemo(
    () => Children.map(children as ReactElement<AccordionPanelProps>[], (child) => cloneElement(child, { flush })),
    [children, flush],
  );

  return (
    <div data-testid="accordion-element" className={cn(baseStyle, flushStyle)}>
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
