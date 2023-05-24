'use client';

import type { FC } from 'react';
import { CodePreview } from '~/app/components/code-preview';
import { Progress } from '~/src';
import { DocsContentLayout } from '../../../components/docs-content-layout';

const ProgressPage: FC = () => (
  <DocsContentLayout title="React Progress Bar - Flowbite" description="description placeholder">
    <CodePreview title="Default progress">
      <Progress progress={45} />
    </CodePreview>
    <CodePreview title="Sizing">
      <div className="flex flex-col gap-2">
        <div className="text-base font-medium dark:text-white">Small</div>
        <Progress progress={45} size="sm" color="dark" />
        <div className="text-base font-medium dark:text-white">Default</div>
        <Progress progress={45} size="md" color="dark" />
        <div className="text-lg font-medium dark:text-white">Large</div>
        <Progress progress={45} size="lg" color="dark" />
        <div className="text-lg font-medium dark:text-white">Extra Large</div>
        <Progress progress={45} size="xl" color="dark" />
      </div>
    </CodePreview>
    <CodePreview title="Colors">
      <div className="flex flex-col gap-2">
        <div className="text-base font-medium">Dark</div>
        <Progress progress={45} color="dark" />
        <div className="text-base font-medium text-cyan-700">Blue</div>
        <Progress progress={45} color="blue" />
        <div className="text-base font-medium text-red-700">Red</div>
        <Progress progress={45} color="red" />
        <div className="text-base font-medium text-green-700">Green</div>
        <Progress progress={45} color="green" />
        <div className="text-base font-medium text-yellow-700">Yellow</div>
        <Progress progress={45} color="yellow" />
        <div className="text-base font-medium text-indigo-700">Indigo</div>
        <Progress progress={45} color="indigo" />
        <div className="text-base font-medium text-purple-700">Purple</div>
        <Progress progress={45} color="purple" />
      </div>
    </CodePreview>
    <CodePreview title="With labels">
      <Progress progress={50} labelProgress={true} textLabel="Flowbite" labelText={true} size="lg" />
    </CodePreview>
    <CodePreview title="Label positions">
      <Progress
        progress={45}
        labelProgress={true}
        progressLabelPosition="inside"
        textLabel="Flowbite"
        labelText={true}
        textLabelPosition="outside"
        size="lg"
      />
    </CodePreview>
  </DocsContentLayout>
);

export default ProgressPage;
