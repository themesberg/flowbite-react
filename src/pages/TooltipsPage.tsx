import { FC } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import { Button, Card, Tooltip } from '../components';

SyntaxHighlighter.registerLanguage('tsx', tsx);

export const TooltipsPage: FC = () => {
  return (
    <div className="flex flex-col max-w-4xl mx-auto gap-4 dark:text-white">
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Using tooltips</span>
        <Card>
          <div className="flex gap-2">
            <Tooltip content="Tooltip content">
              <Button>Default tooltip</Button>
            </Tooltip>
          </div>
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Tooltip content="Tooltip content">
  <Button>Default tooltip</Button>
</Tooltip>
`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Tooltip styles</span>
        <Card>
          <div className="flex gap-2">
            <Tooltip content="Tooltip content" style="light">
              <Button>Light tooltip</Button>
            </Tooltip>
            <Tooltip content="Tooltip content" style="dark">
              <Button>Dark tooltip</Button>
            </Tooltip>
          </div>
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Tooltip content="Tooltip content" style="light">
  <Button>Light tooltip</Button>
</Tooltip>
<Tooltip content="Tooltip content" style="dark">
  <Button>Dark tooltip</Button>
</Tooltip>
`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Placement</span>
        <Card>
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
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
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
`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Triggering</span>
        <Card>
          <div className="flex gap-2">
            <Tooltip content="Tooltip content" trigger="hover">
              <Button>Tooltip hover</Button>
            </Tooltip>
            <Tooltip content="Tooltip content" trigger="click">
              <Button>Tooltip click</Button>
            </Tooltip>
          </div>
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Tooltip content="Tooltip content" trigger="hover">
  <Button>Tooltip hover</Button>
</Tooltip>
<Tooltip content="Tooltip content" trigger="click">
  <Button>Tooltip click</Button>
</Tooltip>
`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Animation</span>
        <Card>
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
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
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
`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Disable arrow</span>
        <Card>
          <div className="flex gap-2">
            <Tooltip content="Tooltip content" arrow={false}>
              <Button>Default tooltip</Button>
            </Tooltip>
          </div>
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Tooltip content="Tooltip content" arrow={false}>
  <Button>Default tooltip</Button>
</Tooltip>
`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
    </div>
  );
};
