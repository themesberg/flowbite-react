import classNames from 'classnames';
import type { ComponentProps, FC, KeyboardEvent, PropsWithChildren, ReactElement } from 'react';
import { Children, useEffect, useId, useMemo, useRef, useState } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import type { FlowbiteBoolean } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import type { TabProps } from './TabItem';
import { TabItem } from './TabItem';

export interface TabStyles {
  default: string;
  underline: string;
  pills: string;
  fullWidth: string;
}

export interface TabStyleItemProps {
  base: string;
  active: FlowbiteBoolean;
}

export type TabStyleItem<Type> = {
  [K in keyof Type]: TabStyleItemProps;
};

export type TabItemStatus = 'active' | 'notActive';

export interface TabsProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className' | 'style'>> {
  style?: keyof TabStyles;
}

interface TabEventProps {
  target: number;
}

interface TabKeyboardEventProps extends TabEventProps {
  event: KeyboardEvent<HTMLButtonElement>;
}

export const TabsComponent: FC<TabsProps> = ({ children, style = 'default', ...rest }) => {
  const theme = useTheme().theme.tab;
  const theirProps = excludeClassName(rest);

  const id = useId();
  const tabs = useMemo(
    () => Children.map(children as ReactElement<PropsWithChildren<TabProps>>[], ({ props }) => props),
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

  const handleClick = ({ target }: TabEventProps): void => {
    setActiveTab(target);
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
      setActiveTab(target);
      setFocusedTab(target);
    }
  };

  useEffect(() => {
    tabRefs.current[focusedTab]?.focus();
  }, [focusedTab]);

  return (
    <div className={theme.base}>
      <div
        aria-label="Tabs"
        role="tablist"
        className={classNames(theme.tablist.base, theme.tablist.styles[style])}
        {...theirProps}
      >
        {tabs.map((tab, index) => (
          <button
            key={index}
            type="button"
            aria-controls={`${id}-tabpanel-${index}`}
            aria-selected={index === activeTab}
            className={classNames(theme.tablist.tabitem.base, theme.tablist.tabitem.styles[style], {
              [theme.tablist.tabitem.styles[style].active.on]: index === activeTab,
              [theme.tablist.tabitem.styles[style].active.off]: index !== activeTab && !tab.disabled,
            })}
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
};

TabsComponent.displayName = 'Tabs.Group';
TabItem.displayName = 'Tabs.Item';
export const Tabs = { Group: TabsComponent, Item: TabItem };
