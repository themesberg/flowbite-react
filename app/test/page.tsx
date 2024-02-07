'use client';
import { useState } from 'react';

import { Button } from '~/src';
import { Drawer, DrawerHeader } from '~/src/components/drawer';

export default function Test() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <div>
        <div className="flex min-h-[50vh] items-center justify-center">
          <Button onClick={() => setIsOpen(true)}>Drawer Toggle Button</Button>
        </div>

        <Drawer open={isOpen} position="left" onClose={handleClose}>
          <DrawerHeader title="Drawer" />
          <p>HI</p>
        </Drawer>
      </div>
    </div>
  );
}
