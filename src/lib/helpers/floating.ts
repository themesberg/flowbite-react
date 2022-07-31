import { arrow, autoPlacement, shift } from '@floating-ui/core';
import type { Placement } from '@floating-ui/react-dom';
import type { Middleware } from '@floating-ui/react-dom-interactions';
import { flip, offset } from '@floating-ui/react-dom-interactions';
import type { RefObject } from 'react';

/**
 * @see https://floating-ui.com/docs/middleware
 */
export const getMiddleware = ({
  arrowRef,
  placement,
}: {
  arrowRef: RefObject<HTMLDivElement>;
  placement: 'auto' | Placement;
}): Middleware[] => {
  const middleware = [];

  middleware.push(offset(8));
  middleware.push(placement === 'auto' ? autoPlacement() : flip());
  middleware.push(shift({ padding: 8 }));

  if (arrowRef.current) {
    middleware.push(arrow({ element: arrowRef.current }));
  }

  return middleware;
};

export const getPlacement = ({ placement }: { placement: 'auto' | Placement }): Placement | undefined => {
  return placement === 'auto' ? undefined : placement;
};

export const getArrowPlacement = ({ placement }: { placement: Placement }): Placement => {
  return {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  }[placement.split('-')[0]] as Placement;
};
