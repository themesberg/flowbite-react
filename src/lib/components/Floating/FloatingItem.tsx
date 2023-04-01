import React, { useId } from "react";
import { useFloatingContext } from './FloatingContext';

export const FloatingItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLProps<HTMLLIElement>
>(function FloatingDescription({ children, ...props }, ref) {
  const { setDescriptionId } = useFloatingContext();
  const id = useId();

  React.useLayoutEffect(() => {
    setDescriptionId(id);
    return () => setDescriptionId(undefined);
  }, [id, setDescriptionId]);

  return (
    <li {...props} ref={ref} id={id}>
      {children}
    </li>
  );
});