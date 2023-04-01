import {
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
import { createContext, useContext, useMemo, useState } from 'react';
import type { FloatingOptions } from './Floating';

type FloatingContextType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  labelId?: string;
  descriptionId?: string;
  placement: string;
  context: ReturnType<typeof useFloating>;
  refs: ReturnType<typeof useFloating>['refs'];
  strategy: ReturnType<typeof useFloating>['strategy'];
  x: ReturnType<typeof useFloating>['x'];
  y: ReturnType<typeof useFloating>['y'];
  modal: boolean;
  setDescriptionId: Dispatch<SetStateAction<string | undefined>>;
  middlewareData: ReturnType<typeof useFloating>['middlewareData'];
  setLabelId: Dispatch<SetStateAction<string | undefined>>;
  getReferenceProps: ReturnType<typeof useInteractions>['getReferenceProps'];
  getFloatingProps: ReturnType<typeof useInteractions>['getFloatingProps'];
  theme: FloatingOptions['theme'];
};

export const FloatingContext = createContext<FloatingContextType | undefined>(undefined);

export function useFloatingContext(): FloatingContextType {
  const context = useContext(FloatingContext);

  if (!context) {
    throw new Error('Floating components must be wrapped in <Floating />');
  }

  return context;
}

export function useFloatingHook({
  initialOpen = false,
  placement = 'bottom',
  modal,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  theme,
  trigger,
}: FloatingOptions = {}) {
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
    ],
  });

  const context = data.context;
  const dismiss = useDismiss(context);
  const role = useRole(context);

  let interactions: {};
  if (trigger === 'hover') {
    const hover = useHover(context, {
      move: false,
      enabled: controlledOpen == null,
    });
    const focus = useFocus(context, {
      enabled: controlledOpen == null,
    });
    interactions = useInteractions([hover, focus, dismiss, role]);
  } else {
    const click = useClick(context, {
      enabled: controlledOpen == null,
    });
    interactions = useInteractions([click, dismiss, role]);
  }

  return useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
      modal,
      labelId,
      descriptionId,
      setLabelId,
      setDescriptionId,
      theme,
    }),
    [open, setOpen, interactions, data, modal, labelId, descriptionId],
  );
}
