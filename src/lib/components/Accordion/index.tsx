import { Children, cloneElement, ComponentProps, FC, PropsWithChildren, ReactElement, useMemo, useState } from 'react';
import { AccordionPanel, AccordionPanelProps } from './AccordionPanel';
import { AccordionTitle } from './AccordionTitle';
import { AccordionContent } from './AccordionContent';
import classNames from 'classnames';
import { useTheme } from '../Flowbite/ThemeContext';
import { excludeClassName } from '../../helpers/exclude';
import { HiChevronDown } from 'react-icons/hi';

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
