import { FC } from 'react';

import { Progressbar } from '../components';
import { CodeExample, DemoPage } from './DemoPage';

const ProgressbarPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default Progressbar',
      code: <Progressbar progress={45} />,
    },
    {
      title: 'Sizing',
      code: (
        <div>
          <div className="mb-1 text-base font-medium dark:text-white">Small</div>
          <Progressbar progress={45} size="sm" color="dark" />
          <div className="mb-1 text-base font-medium dark:text-white">Default</div>
          <Progressbar progress={45} size="md" color="dark" />
          <div className="mb-1 text-lg font-medium dark:text-white">Large</div>

          <Progressbar progress={45} size="lg" color="dark" />
          <div className="mb-1 text-lg font-medium dark:text-white">Extra Large</div>

          <Progressbar progress={45} size="xl" color="dark" />
        </div>
      ),
    },
    {
      title: 'Colors',
      code: (
        <div>
          <div className="mb-1 text-base font-medium">Dark</div>
          <Progressbar progress={45} color="dark" />

          <div className="mb-1 text-base font-medium text-blue-700">Blue</div>
          <Progressbar progress={45} color="blue" />

          <div className="mb-1 text-base font-medium text-red-700">Red</div>
          <Progressbar progress={45} color="red" />

          <div className="mb-1 text-base font-medium text-green-700">Green</div>
          <Progressbar progress={45} color="green" />

          <div className="mb-1 text-base font-medium text-yellow-700">Yellow</div>
          <Progressbar progress={45} color="yellow" />

          <div className="mb-1 text-base font-medium text-indigo-700">Indigo</div>
          <Progressbar progress={45} color="indigo" />

          <div className="mb-1 text-base font-medium text-purple-700">Purple</div>
          <Progressbar progress={45} color="purple" />
        </div>
      ),
    },
    {
      title: 'With label inside',
      code: <Progressbar progress={50} label="flowbite" size="lg" />,
    },
    {
      title: 'With label outside',
      code: <Progressbar progress={45} label="Flowbite" labelPosition="outside" labelProgress={true} />,
    },
  ];

  return <DemoPage examples={examples} />;
};

export default ProgressbarPage;
