import type React from 'react';
import { forwardRef } from 'react';

/** This allows `forwardRef` to be used with generic components */

// biome-ignore lint/complexity/noBannedTypes: <explanation>
type FixedForwardRef = <T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => JSX.Element,
) => (props: P & React.RefAttributes<T>) => JSX.Element;

const genericForwardRef = forwardRef as FixedForwardRef;

export default genericForwardRef;
