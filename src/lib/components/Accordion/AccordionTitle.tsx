import { ComponentProps, FC } from 'react';
import classNames from 'classnames';
import { useAccordionContext } from './AccordionPanelContext';
import { useTheme } from '../Flowbite/ThemeContext';
import { excludeClassName } from '../../helpers/exclude';
import { HeadingLevel } from '../Flowbite/FlowbiteTheme';

export interface AccordionTitleProps extends ComponentProps<'button'> {
  as?: HeadingLevel;
}

export const AccordionTitle: FC<AccordionTitleProps> = ({ as: Heading = 'h2', children, ...props }): JSX.Element => {
  const theirProps = excludeClassName(props);

  const { arrowIcon: ArrowIcon, flush, open, setOpen } = useAccordionContext();
  const theme = useTheme().theme.accordion.title;

  const onClick = () => typeof setOpen !== 'undefined' && setOpen();

  return (
    <button
      className={classNames(theme.base, theme.flush[flush ? 'on' : 'off'], theme.open[open ? 'on' : 'off'])}
      onClick={onClick}
      type="button"
      {...theirProps}
    >
      <Heading data-testid="flowbite-accordion-heading">{children}</Heading>
      {ArrowIcon && (
        <ArrowIcon
          aria-hidden
          className={classNames(theme.arrow.base, theme.arrow.open[open ? 'on' : 'off'])}
          data-testid="flowbite-accordion-arrow"
        />
      )}
    </button>
  );
};
