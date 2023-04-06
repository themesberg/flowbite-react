import { useTheme } from 'flowbite-react';
import type { ComponentProps, FC } from 'react';
import { useMemo } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineChevronUp } from 'react-icons/hi';
import { useFloatingContext } from './FloatingContext';

const icons: Record<string, FC<ComponentProps<'svg'>>> = {
  top: HiOutlineChevronUp,
  right: HiOutlineChevronRight,
  bottom: HiOutlineChevronDown,
  left: HiOutlineChevronLeft,
};

export const FloatingIcon: FC = () => {
  const theme = useTheme().theme.dropdown;
  const { placement } = useFloatingContext();

  const Icon = useMemo(() => {
    return placement ? icons[placement] : HiOutlineChevronDown;
  }, [placement]);

  return <>{Icon && <Icon className={theme.arrowIcon} />}</>;
};
