'use client';

import type { FC } from 'react';
import { CodePreview } from '~/app/components/code-preview';
import { Button, Tooltip } from '~/src';
import { DocsContentLayout } from '../../../components/docs-content-layout';

const TooltipPage: FC = () => (
  <DocsContentLayout
    title="React Tooltip - Flowbite"
    description="Use the following Tailwind CSS powered tooltips to show extra content when hovering or focusing on an element"
  >
    <p>
      Flowbite React allows you to show extra information when hovering or focusing over an element in multiple
      positions, styles, and animations.
    </p>
    <CodePreview title="Default tooltip">
      <Tooltip content="Tooltip content">
        <Button>Default tooltip</Button>
      </Tooltip>
    </CodePreview>
    <CodePreview title="Tooltip styles" className="flex gap-2">
      <Tooltip content="Tooltip content" style="light">
        <Button>Light tooltip</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" style="dark">
        <Button>Dark tooltip</Button>
      </Tooltip>
    </CodePreview>
    <CodePreview title="Placement" className="flex gap-2">
      <Tooltip content="Tooltip content" placement="top">
        <Button>Tooltip top</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" placement="right">
        <Button>Tooltip right</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" placement="bottom">
        <Button>Tooltip bottom</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" placement="left">
        <Button>Tooltip left</Button>
      </Tooltip>
    </CodePreview>
    <CodePreview title="Triggering" className="flex gap-2">
      <Tooltip content="Tooltip content" trigger="hover">
        <Button>Tooltip hover</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" trigger="click">
        <Button>Tooltip click</Button>
      </Tooltip>
    </CodePreview>
    <CodePreview title="Animation" className="flex gap-2">
      <Tooltip content="Tooltip content" animation={false}>
        <Button>Not animated tooltip</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" animation="duration-150">
        <Button>Fast animation</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" animation="duration-300">
        <Button>Normal speed animation</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" animation="duration-500">
        <Button>Slow animation</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" animation="duration-1000">
        <Button>Really slow animation</Button>
      </Tooltip>
    </CodePreview>
    <CodePreview title="Disable arrow">
      <Tooltip content="Tooltip content" arrow={false}>
        <Button>Default tooltip</Button>
      </Tooltip>
    </CodePreview>
  </DocsContentLayout>
);

export default TooltipPage;
