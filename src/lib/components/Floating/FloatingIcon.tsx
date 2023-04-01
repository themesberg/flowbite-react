import { ComponentProps, FC, useMemo } from 'react';
import { useFloatingContext } from './FloatingContext';
import { HiOutlineChevronUp, HiOutlineChevronRight, HiOutlineChevronDown, HiOutlineChevronLeft } from 'react-icons/hi';
import { useTheme } from 'flowbite-react';

const icons: Record<string, FC<ComponentProps<'svg'>>> = {
  top: HiOutlineChevronUp,
  right: HiOutlineChevronRight,
  bottom: HiOutlineChevronDown,
  left: HiOutlineChevronLeft,
};

export const FloatingIcon: FC = () => {
  const theme = useTheme().theme.dropdown
  const { placement } = useFloatingContext();

  const Icon = useMemo(() => {
    return icons[placement] ?? HiOutlineChevronDown;
  }, [placement]);

  return (
    <>
      {Icon && <Icon className={theme.arrowIcon} />}
    </>
  );
};