import { FC } from 'react';
import { HiCheck, HiClock } from 'react-icons/hi';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import { Badge, Card } from '../components';

SyntaxHighlighter.registerLanguage('tsx', tsx);

export const BadgesPage: FC = () => {
  return (
    <div className="flex flex-col max-w-4xl mx-auto gap-4 dark:text-white">
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Default badge</span>
        <Card>
          <div className="flex flex-wrap gap-2">
            <Badge color="blue">Default</Badge>
            <Badge color="gray">Dark</Badge>
            <Badge color="red">Red</Badge>
            <Badge color="green">Green</Badge>
            <Badge color="yellow">Yellow</Badge>
            <Badge color="indigo">Indigo</Badge>
            <Badge color="purple">Purple</Badge>
            <Badge color="pink">Pink</Badge>
          </div>
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Badge color="blue">Default</Badge>
<Badge color="gray">Dark</Badge>
<Badge color="red">Red</Badge>
<Badge color="green">Green</Badge>
<Badge color="yellow">Yellow</Badge>
<Badge color="indigo">Indigo</Badge>
<Badge color="purple">Purple</Badge>
<Badge color="pink">Pink</Badge>`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Large badge</span>
        <Card>
          <div className="flex flex-wrap gap-2">
            <Badge color="blue" size="sm">
              Default
            </Badge>
            <Badge color="gray" size="sm">
              Dark
            </Badge>
            <Badge color="red" size="sm">
              Red
            </Badge>
            <Badge color="green" size="sm">
              Green
            </Badge>
            <Badge color="yellow" size="sm">
              Yellow
            </Badge>
            <Badge color="indigo" size="sm">
              Indigo
            </Badge>
            <Badge color="purple" size="sm">
              Purple
            </Badge>
            <Badge color="pink" size="sm">
              Pink
            </Badge>
          </div>
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Badge color="blue" size="sm">Default</Badge>
<Badge color="gray" size="sm">Dark</Badge>
<Badge color="red" size="sm">Red</Badge>
<Badge color="green" size="sm">Green</Badge>
<Badge color="yellow" size="sm">Yellow</Badge>
<Badge color="indigo" size="sm">Indigo</Badge>
<Badge color="purple" size="sm">Purple</Badge>
<Badge color="pink" size="sm">Pink</Badge>`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Badges as links</span>
        <Card>
          <div className="flex flex-wrap items-center gap-2">
            <Badge href="#/badges">Default</Badge>
            <Badge size="sm" href="#/badges">
              Default
            </Badge>
          </div>
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Badge href="#">Default</Badge>
<Badge size="sm" href="#">Default</Badge>`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Badges with icon</span>
        <Card>
          <div className="flex flex-wrap gap-2">
            <Badge icon={HiCheck}>2 minutes ago</Badge>
            <Badge color="gray" icon={HiClock}>
              3 days ago
            </Badge>
          </div>
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Badge icon={HiClock}>2 minutes ago</Badge>
<Badge color="gray" icon={HiClock}>3 days ago</Badge>`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Badge with icon only</span>
        <Card>
          <div className="flex flex-wrap items-center gap-2">
            <Badge icon={HiCheck} />
            <Badge color="gray" icon={HiCheck} />
            <Badge size="sm" icon={HiCheck} />
            <Badge color="gray" size="sm" icon={HiCheck} />
          </div>
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Badge icon={HiCheck} />
<Badge color="gray" icon={HiCheck} />
<Badge size="sm" icon={HiCheck} />
<Badge color="gray" size="sm" icon={HiCheck} />`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
    </div>
  );
};
