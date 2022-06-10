import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren, ReactElement } from 'react';
import { Children, cloneElement, useMemo, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import { AccordionContent } from './AccordionContent';
import type { AccordionPanelProps } from './AccordionPanel';
import { AccordionPanel } from './AccordionPanel';
import { AccordionTitle } from './AccordionTitle';

export interface AccordionProps extends PropsWithChildren<ComponentProps<'div'>> {
  alwaysOpen?: boolean;
  arrowIcon?: FC<ComponentProps<'svg'>>;
  children: ReactElement<AccordionPanelProps> | ReactElement<AccordionPanelProps>[];
  flush?: boolean;
}

const AccordionComponent: FC<AccordionProps> = ({
  alwaysOpen = false,
  arrowIcon = HiChevronDown,
  children,
  flush = false,
  ...props
}): JSX.Element => {
  const theirProps = excludeClassName(props);

  const [isOpen, setOpen] = useState(0);
  const panels = useMemo(
    () =>
      Children.map(children, (child, i) =>
        cloneElement(child, { alwaysOpen, arrowIcon, flush, isOpen: isOpen === i, setOpen: () => setOpen(i) }),
      ),
    [alwaysOpen, arrowIcon, children, flush, isOpen],
  );
  const theme = useTheme().theme.accordion;

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
