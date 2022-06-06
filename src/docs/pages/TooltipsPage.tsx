import type { FC } from 'react';
import { Button, Tooltip } from '../../lib';
import type { CodeExample } from './DemoPage';
import { DemoPage } from './DemoPage';

const TooltipsPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Using tooltips',
      code: (
        <Tooltip content="Tooltip content">
          <Button>Default tooltip</Button>
        </Tooltip>
      ),
    },
    {
      title: 'Tooltip styles',
      code: (
        <div className="flex gap-2">
          <Tooltip content="Tooltip content" style="light">
            <Button>Light tooltip</Button>
          </Tooltip>
          <Tooltip content="Tooltip content" style="dark">
            <Button>Dark tooltip</Button>
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'Placement',
      code: (
        <div className="flex gap-2">
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
        </div>
      ),
    },
    {
      title: 'Triggering',
      code: (
        <div className="flex gap-2">
          <Tooltip content="Tooltip content" trigger="hover">
            <Button>Tooltip hover</Button>
          </Tooltip>
          <Tooltip content="Tooltip content" trigger="click">
            <Button>Tooltip click</Button>
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'Animation',
      code: (
        <div className="flex gap-2">
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
        </div>
      ),
    },
    {
      title: 'Disable arrow',
      code: (
        <Tooltip content="Tooltip content" arrow={false}>
          <Button>Default tooltip</Button>
        </Tooltip>
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default TooltipsPage;
