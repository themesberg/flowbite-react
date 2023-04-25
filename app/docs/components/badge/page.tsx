'use client';

import type { FC } from 'react';
import { HiCheck, HiClock } from 'react-icons/hi';
import { CodePreview } from '~/app/components/code-preview';
import { Badge } from '~/src';

const BadgePage: FC = () => (
  <>
    <CodePreview title="Default badges" className="flex flex-wrap gap-2">
      <Badge color="info">Default</Badge>
      <Badge color="gray">Dark</Badge>
      <Badge color="failure">Failure</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="indigo">Indigo</Badge>
      <Badge color="purple">Purple</Badge>
      <Badge color="pink">Pink</Badge>
    </CodePreview>
    <CodePreview title="Large badges" className="flex flex-wrap gap-2">
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
    </CodePreview>
    <CodePreview title="Badge as link" className="flex flex-wrap gap-2">
      <Badge href="/badges">Default</Badge>
      <Badge size="sm" href="/badges">
        Default
      </Badge>
    </CodePreview>
    <CodePreview title="Badge with icon" className="flex flex-wrap gap-2">
      <Badge icon={HiCheck}>2 minutes ago</Badge>
      <Badge color="gray" icon={HiClock}>
        3 days ago
      </Badge>
    </CodePreview>
    <CodePreview title="Badge with icon only" className="flex flex-wrap gap-2">
      <Badge icon={HiCheck} />
      <Badge color="gray" icon={HiCheck} />
      <Badge size="sm" icon={HiCheck} />
      <Badge color="gray" size="sm" icon={HiCheck} />
    </CodePreview>
  </>
);

export default BadgePage;
