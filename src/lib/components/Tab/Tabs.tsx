import classNames from 'classnames';
import type { ComponentProps, ForwardedRef, KeyboardEvent, PropsWithChildren, ReactElement } from 'react';
import { Children, forwardRef, useEffect, useId, useImperativeHandle, useMemo, useRef, useState } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { FlowbiteBoolean } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import type { TabItemProps } from './TabItem';
import TabItem from './TabItem';

export interface FlowbiteTabTheme {
  base: string;
  tablist: {
    base: string;
    styles: TabStyles;
    tabitem: {
      base: string;
      styles: TabStyleItem<TabStyles>;
      icon: string;
    };
  };
  tabpanel: string;
}

export interface TabStyles {
  default: string;
  fullWidth: string;
  pills: string;
  underline: string;
}

export interface TabStyleItemProps {
  base: string;
  active: FlowbiteBoolean;
}

export type TabStyleItem<Type> = {
  [K in keyof Type]: TabStyleItemProps;
};

export type TabItemStatus = 'active' | 'notActive';

interface TabEventProps {
  target: number;
}

interface TabKeyboardEventProps extends TabEventProps {
  event: KeyboardEvent<HTMLButtonElement>;
}

export interface TabsProps extends PropsWithChildren, Omit<ComponentProps<'div'>, 'ref' | 'style'> {
  onActiveTabChange?: (activeTab: number) => void;
  style?: keyof TabStyles;
  theme?: DeepPartial<FlowbiteTabTheme>;
}

export interface TabsRef {
  setActiveTab: (activeTab: number) => void;
}

export const TabsComponent = forwardRef<TabsRef, TabsProps>(
  (
    { children, className, onActiveTabChange, style = 'default', theme: customTheme = {}, ...props },
    ref: ForwardedRef<TabsRef>,
  ) => {
    const theme = mergeDeep(useTheme().theme.tab, customTheme);

    const id = useId();
    const tabs = useMemo(
      () => Children.map(children as ReactElement<PropsWithChildren<TabItemProps>>[], ({ props }) => props),
      [children],
    );
    const tabRefs = useRef<HTMLButtonElement[]>([]);
    const [activeTab, setActiveTab] = useState(
      Math.max(
        0,
        tabs.findIndex((tab) => tab.active),
      ),
    );
    const [focusedTab, setFocusedTab] = useState(
      Math.max(
        0,
        tabs.findIndex((tab) => tab.active),
      ),
    );

    const setActiveTabWithCallback = (activeTab: number) => {
      setActiveTab(activeTab);
      if (onActiveTabChange) onActiveTabChange(activeTab);
    };

    const handleClick = ({ target }: TabEventProps): void => {
      setActiveTabWithCallback(target);
      setFocusedTab(target);
    };

    const handleKeyboard = ({ event, target }: TabKeyboardEventProps): void => {
      if (event.key === 'ArrowLeft') {
        setFocusedTab(Math.max(0, focusedTab - 1));
      }

      if (event.key === 'ArrowRight') {
        setFocusedTab(Math.min(tabs.length - 1, focusedTab + 1));
      }

      if (event.key === 'Enter') {
        setActiveTabWithCallback(target);
        setFocusedTab(target);
      }
    };

    const tabItemStyle = theme.tablist.tabitem.styles[style];

    useEffect(() => {
      tabRefs.current[focusedTab]?.focus();
    }, [focusedTab]);

    useImperativeHandle(ref, () => ({
      setActiveTab: setActiveTabWithCallback,
    }));

    return (
      <div className={classNames(theme.base, className)}>
        <div
          aria-label="Tabs"
          role="tablist"
          className={classNames(theme.tablist.base, theme.tablist.styles[style], className)}
          {...props}
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              type="button"
              aria-controls={`${id}-tabpanel-${index}`}
              aria-selected={index === activeTab}
              className={classNames(
                theme.tablist.tabitem.base,
                { ...tabItemStyle },
                {
                  [tabItemStyle.active.on]: index === activeTab,
                  [tabItemStyle.active.off]: index !== activeTab && !tab.disabled,
                },
              )}
              disabled={tab.disabled}
              id={`${id}-tab-${index}`}
              onClick={() => handleClick({ target: index })}
              onKeyDown={(event) => handleKeyboard({ event, target: index })}
              ref={(element) => (tabRefs.current[index] = element as HTMLButtonElement)}
              role="tab"
              tabIndex={index === focusedTab ? 0 : -1}
            >
              {tab.icon && <tab.icon className={theme.tablist.tabitem.icon} />}
              {tab.title}
            </button>
          ))}
        </div>
        <div>
          {tabs.map((tab, index) => (
            <div
              key={index}
              aria-labelledby={`${id}-tab-${index}`}
              className={theme.tabpanel}
              hidden={index !== activeTab}
              id={`${id}-tabpanel-${index}`}
              role="tabpanel"
              tabIndex={0}
            >
              {tab.children}
            </div>
          ))}
        </div>
      </div>
    );
  },
);

TabsComponent.displayName = 'Tabs.Group';
export const Tabs = { Group: TabsComponent, Item: TabItem };
