import type React from 'react';

export type AsProp<C extends React.ElementType> = {
  as?: C | null;
};

export type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

// eslint-disable-next-line @typescript-eslint/ban-types
export type PolymorphicComponentProp<C extends React.ElementType, Props = {}> = React.PropsWithChildren<
  Props & AsProp<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

// eslint-disable-next-line @typescript-eslint/ban-types
export type PolymorphicComponentPropWithRef<C extends React.ElementType, Props = {}> = PolymorphicComponentProp<
  C,
  Props
> & {
  ref?: PolymorphicRef<C>;
};

export type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];
