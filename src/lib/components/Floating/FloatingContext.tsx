import {
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import type { Dispatch, SetStateAction } from 'react';
import { createContext, useContext, useMemo, useRef, useState } from 'react';
import type { FloatingProps } from './Floating';

interface FloatingContextType extends FloatingProps {
  context: ReturnType<typeof useFloating>['context'];
  descriptionId?: string;
  dismissOnClick?: boolean;
  getReferenceProps: ReturnType<typeof useInteractions>['getReferenceProps'];
  getFloatingProps: ReturnType<typeof useInteractions>['getFloatingProps'];
  labelId?: string;
  middlewareData: ReturnType<typeof useFloating>['middlewareData'];
  refs: ReturnType<typeof useFloating>['refs'];
  setDescriptionId: Dispatch<SetStateAction<string | undefined>>;
  setOpen: ((open: boolean) => void) | Dispatch<SetStateAction<boolean>>;
  setLabelId: Dispatch<SetStateAction<string | undefined>>;
  strategy: ReturnType<typeof useFloating>['strategy'];
  x: ReturnType<typeof useFloating>['x'];
  y: ReturnType<typeof useFloating>['y'];
}

export const FloatingContext = createContext<FloatingContextType | undefined>(undefined);

export function useFloatingContext(): FloatingContextType {
  const context = useContext(FloatingContext);

  if (!context) {
    throw new Error('Floating components must be wrapped in <Floating />');
  }

  return context;
}

export function useFloatingHook({
  arrow: arrowProp,
  initialOpen = false,
  placement = undefined,
  modal,
  dismissOnClick = true,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  style,
  theme,
  trigger,
}: FloatingProps) {
  const arrowRef = useRef(null);
  const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen);
  const [labelId, setLabelId] = useState<string | undefined>();
  const [descriptionId, setDescriptionId] = useState<string | undefined>();

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({
        fallbackAxisSideDirection: 'end',
      }),
      shift({ padding: 5 }),
      arrow({
        element: arrowRef,
      }),
    ],
  });

  const context = data.context;
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const hover = useHover(context, {
    move: false,
    enabled: controlledOpen == null && trigger === 'hover',
  });
  const focus = useFocus(context, {
    enabled: controlledOpen == null && trigger === 'hover',
  });
  const click = useClick(context, {
    enabled: (controlledOpen == null && trigger === undefined) || trigger === 'click',
  });
  const interactions = useInteractions([hover, focus, click, dismiss, role]);

  return useMemo(
    () => ({
      arrow: arrowProp,
      arrowRef,
      descriptionId,
      labelId,
      modal,
      open,
      setDescriptionId,
      setLabelId,
      setOpen,
      style,
      theme,
      ...interactions,
      ...data,
    }),
    [arrowProp, data, descriptionId, interactions, labelId, modal, open, setOpen, style, theme],
  );
}
