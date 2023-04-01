import React from "react";
import { useFloatingContext } from "./FloatingContext";

export const FloatingClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(function FloatingClose(props, ref) {
  const { setOpen } = useFloatingContext();
  return (
    <button
      type="button"
      ref={ref}
      {...props}
      onClick={(event) => {
        props.onClick?.(event);
        setOpen(false);
      }}
    />
  );
});