import { FC } from 'react';

import { Progressbar } from '../components';
import { CodeExample, DemoPage } from './DemoPage';

const ProgressbarPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default Progressbar',
      code: <Progressbar />,
    },
    {
      title: 'Sizing',
      code: (
        <>
          <div className="mb-1 text-base font-medium dark:text-white">Small</div>
          <Progressbar size="sm" color="gray" />
          <div className="mb-1 text-base font-medium dark:text-white">Default</div>
          <Progressbar size="md" color="gray" />
          <div className="mb-1 text-lg font-medium dark:text-white">Large</div>

          <Progressbar size="lg" color="gray" />
          <div className="mb-1 text-lg font-medium dark:text-white">Extra Large</div>

          <Progressbar size="xl" color="gray" />
        </>
      ),
    },
    {
      title: 'Colors',
      code: (
        <>
          <div className="mb-1 text-base font-medium">Dark</div>
          <Progressbar color="gray" />

          <div className="mb-1 text-base font-medium text-blue-700">Blue</div>
          <Progressbar color="blue" />

          <div className="mb-1 text-base font-medium text-red-700">Red</div>
          <Progressbar color="red" />

          <div className="mb-1 text-base font-medium text-green-700">Green</div>
          <Progressbar color="green" />

          <div className="mb-1 text-base font-medium text-yellow-700">Yellow</div>
          <Progressbar color="yellow" />

          <div className="mb-1 text-base font-medium text-indigo-700">Indigo</div>
          <Progressbar color="indigo" />

          <div className="mb-1 text-base font-medium text-purple-700">Purple</div>
          <Progressbar color="purple" />
        </>
      ),
    },
    {
      title: 'With label inside',
      code: (
        <>
          <Progressbar progress={50} label="flowbite" size="lg" />
        </>
      ),
    },
    {
      title: 'With label outside',
      code: (
        <>
          <Progressbar label="Flowbite" labelPosition="outside" labelProgress={true} />
        </>
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default ProgressbarPage;
