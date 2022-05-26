import { ComponentProps, FC } from 'react';
import classNames from 'classnames';
import { HiChevronDown } from 'react-icons/hi';
import { useAccordionContext } from './AccordionPanelContext';
import { useTheme } from '../Flowbite/ThemeContext';
import { excludeClassName } from '../../helpers/exclude';

export interface AccordionTitleProps extends ComponentProps<'button'> {
  arrowIcon?: FC<ComponentProps<'svg'>>;
}

export const AccordionTitle: FC<AccordionTitleProps> = ({
  arrowIcon: ArrowIcon = HiChevronDown,
  children,
  ...props
}): JSX.Element => {
  const theirProps = excludeClassName(props);

  const { flush, isOpen, setIsOpen } = useAccordionContext();
  const theme = useTheme().theme.accordion.title;

  const onClick = () => setIsOpen(!isOpen);

  return (
    <button
      className={classNames(theme.base, theme.flush[flush ? 'on' : 'off'], theme.open[isOpen ? 'on' : 'off'])}
      onClick={onClick}
      type="button"
      {...theirProps}
    >
      <h2>{children}</h2>
      <ArrowIcon className={classNames(theme.arrow.base, isOpen && theme.arrow.open)} />
    </button>
  );
};
