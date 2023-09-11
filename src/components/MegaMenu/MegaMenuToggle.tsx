import type { FC, MouseEventHandler } from 'react';
import { twMerge } from 'tailwind-merge';
import type { ButtonProps } from '../Button';
import { Button } from '../Button';

export type MegaMenuToggleProps = ButtonProps;

export const MegaMenuToggle: FC<MegaMenuToggleProps> = ({ children, className, ...props }) => {
  const onClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const collapseButton = event.target as HTMLButtonElement;
    const parentMegaMenu = collapseButton.closest('nav');
    const adjacentCollapse = parentMegaMenu?.querySelector(
      '[data-testid="flowbite-mega-menu-collapse"]',
    ) as HTMLDivElement;

    adjacentCollapse?.classList.toggle('hidden');
  };

  return (
    <Button
      color="gray"
      onClick={onClick}
      className={twMerge(
        '!border-0 !bg-transparent !p-0 !text-gray-700 !ring-0 [&>span]:items-center [&_*]:!p-0',
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

MegaMenuToggle.displayName = 'MegaMenu.Toggle';
