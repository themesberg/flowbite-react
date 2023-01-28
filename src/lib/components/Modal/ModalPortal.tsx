import { FC, PropsWithChildren, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export type ModalPortalProps = PropsWithChildren<{
  root?: HTMLElement;
}>;

export const ModalPortal: FC<ModalPortalProps> = ({ children, root = document.body }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // If the current value of the ref is falsy (e.g. null), set it to a new div
  // element.
  if (!containerRef.current) {
    containerRef.current = document.createElement('div');
  }

  // If the current value of the ref is not already a child of the root element,
  // append it or replace its parent.
  if (containerRef.current.parentNode !== root) {
    root.appendChild(containerRef.current);
  }

  useEffect(() => {
    return () => {
      const container = containerRef.current;

      // If a container exists on unmount, it is removed from the DOM and
      // garbage collected.
      if (container) {
        container.parentNode?.removeChild(container);
        containerRef.current = null;
      }
    };
  }, []);

  return createPortal(children, containerRef.current);
};
