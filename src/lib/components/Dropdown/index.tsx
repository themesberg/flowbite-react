import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react';
import { useMemo } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineChevronUp } from 'react-icons/hi';
import { excludeClassName } from '../../helpers/exclude';
import type { ButtonProps } from '../Button';
import { Button } from '../Button';
import type { TooltipProps } from '../Tooltip';
import { Tooltip } from '../Tooltip';
import { DropdownDivider } from './DropdownDivider';
import { DropdownHeader } from './DropdownHeader';
import { DropdownItem } from './DropdownItem';

export type DropdownProps = ButtonProps &
  Omit<TooltipProps, 'content' | 'style' | 'animation' | 'arrow'> & {
    className?: string;
    label: ReactNode;
    inline?: boolean;
    tooltipArrow?: boolean;
    arrowIcon?: boolean;
  };

const icons: Record<string, FC<ComponentProps<'svg'>>> = {
  top: HiOutlineChevronUp,
  right: HiOutlineChevronRight,
  bottom: HiOutlineChevronDown,
  left: HiOutlineChevronLeft,
};

const DropdownComponent: FC<DropdownProps> = (props) => {
  const theirProps = excludeClassName(props) as DropdownProps;
  const { children, label, inline, tooltipArrow = false, arrowIcon = true, ...restProps } = theirProps;
  const { placement = inline ? 'bottom-start' : 'bottom', trigger = 'click', ...buttonProps } = restProps;

  const Icon = useMemo(() => {
    const [p] = placement.split('-');

    return icons[p] ?? HiOutlineChevronDown;
  }, [placement]);
  const content = useMemo(() => <ul className="py-1">{children}</ul>, [children]);

  const TriggerWrapper: FC<PropsWithChildren<ComponentProps<'button'>>> = ({ children }): JSX.Element =>
    inline ? <button className="flex items-center">{children}</button> : <Button {...buttonProps}>{children}</Button>;

  return (
    <Tooltip
      content={content}
      style="auto"
      animation="duration-100"
      placement={placement}
      arrow={tooltipArrow}
      trigger={trigger}
    >
      <TriggerWrapper>
        {label}
        {arrowIcon && <Icon className="ml-2 h-4 w-4" />}
      </TriggerWrapper>
    </Tooltip>
  );
};

DropdownComponent.displayName = 'Dropdown';
DropdownItem.displayName = 'Dropdown.Item';
DropdownHeader.displayName = 'Dropdown.Header';
DropdownDivider.displayName = 'Dropdown.Divider';

export const Dropdown = Object.assign(DropdownComponent, {
  Item: DropdownItem,
  Header: DropdownHeader,
  Divider: DropdownDivider,
});
