"use client";

import type { ComponentProps, FC } from "react";
import { useId } from "react";
import { IoMdHome } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import { Tooltip } from "../Tooltip";

export interface FlowbiteBottomNavigationItemTheme {
  base: string;
  icon: {
    base: string;
  };
  label: string;
}

export interface BottomNavigationItemProps extends Omit<ComponentProps<"button">, "ref">, Record<string, unknown> {
  icon?: FC<ComponentProps<"svg">>;
  label: string;
  theme?: DeepPartial<FlowbiteBottomNavigationItemTheme>;
  showTooltip?: boolean;
  showLabel?: boolean;
}

interface BottomNavItemBtnProps {
  reactId: string;
  customClassName: string;
  icon: FC<ComponentProps<"svg">>;
  theme: DeepPartial<FlowbiteBottomNavigationItemTheme>;
  label: string;
  showLabel: boolean;
}

const BottomNavItemBtn: FC<BottomNavItemBtnProps> = (props) => {
  const { icon: Icon, customClassName = "", reactId, label, showLabel, theme: customTheme = {}, ...rest } = props;

  const theme = mergeDeep(getTheme().bottomNavigation.item, customTheme);

  return (
    <button
      type="button"
      id={reactId}
      data-testid="flowbite-bottom-nav-item"
      className={twMerge(theme.base, customClassName)}
      {...rest}
    >
      <Icon className={theme.icon.base} data-testid="flowbite-bottom-nav-icon" fill="currentColor" aria-hidden="true" />

      {showLabel ? <span className={theme.label}>{label}</span> : null}
    </button>
  );
};

export const BottomNavigationItem: FC<BottomNavigationItemProps> = ({
  icon: Icon,
  label,
  theme: customTheme = {},
  showTooltip = false,
  showLabel = true,
  className,
  ...props
}) => {
  const id = useId();

  return (
    <>
      {showTooltip ? (
        <Tooltip
          content={
            <div id={id} className="flex-1 whitespace-nowrap px-3">
              {label}
            </div>
          }
          placement="top"
        >
          <BottomNavItemBtn
            icon={Icon ? Icon : IoMdHome}
            customClassName={className as string}
            label={label}
            reactId={id}
            showLabel={showLabel}
            theme={customTheme}
            {...props}
          />
        </Tooltip>
      ) : (
        <BottomNavItemBtn
          icon={Icon ? Icon : IoMdHome}
          customClassName={className as string}
          label={label}
          reactId={id}
          showLabel={showLabel}
          theme={customTheme}
          {...props}
        />
      )}
    </>
  );
};

BottomNavigationItem.displayName = "BottomNavigation.Item";
