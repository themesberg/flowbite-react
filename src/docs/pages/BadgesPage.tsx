import type { FC } from 'react';
import { HiCheck, HiClock } from 'react-icons/hi';
import { Badge } from '../../lib';
import type { CodeExample } from './DemoPage';
import { DemoPage } from './DemoPage';

const BadgesPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default badge',
      code: (
        <div className="flex flex-wrap gap-2">
          <Badge color="info">Default</Badge>
          <Badge color="gray">Dark</Badge>
          <Badge color="failure">Failure</Badge>
          <Badge color="success">Success</Badge>
          <Badge color="warning">Warning</Badge>
          <Badge color="indigo">Indigo</Badge>
          <Badge color="purple">Purple</Badge>
          <Badge color="pink">Pink</Badge>
        </div>
      ),
    },
    {
      title: 'Large badge',
      code: (
        <div className="flex flex-wrap gap-2">
          <Badge color="info" size="sm">
            Default
          </Badge>
          <Badge color="gray" size="sm">
            Dark
          </Badge>
          <Badge color="failure" size="sm">
            Failure
          </Badge>
          <Badge color="success" size="sm">
            Success
          </Badge>
          <Badge color="warning" size="sm">
            Warning
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
      ),
    },
    {
      title: 'Badges as links',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Badge href="/badges">Default</Badge>
          <Badge size="sm" href="/badges">
            Default
          </Badge>
        </div>
      ),
    },
    {
      title: 'Badges with icon',
      code: (
        <div className="flex flex-wrap gap-2">
          <Badge icon={HiCheck}>2 minutes ago</Badge>
          <Badge color="gray" icon={HiClock}>
            3 days ago
          </Badge>
        </div>
      ),
    },
    {
      title: 'Badge with icon only',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Badge icon={HiCheck} />
          <Badge color="gray" icon={HiCheck} />
          <Badge size="sm" icon={HiCheck} />
          <Badge color="gray" size="sm" icon={HiCheck} />
        </div>
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default BadgesPage;
