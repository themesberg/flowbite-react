import { FC } from 'react';
import { Flowbite } from '../../lib/components/Flowbite';

import { CodeExample, DemoPage } from './DemoPage';

const ThemePage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Theme Support',
      content: (
        <>
          <p>
            Sometimes you want to give your web application a little more personality and customize some aspects of
            Flowbite. This is possible thanks to the support we offer for themes. To use our theme support, your
            application needs to be surrounded by the Flowbite component, and you must tell this component which theme
            you want to load for your application.
          </p>
        </>
      ),
      code: (
        <Flowbite
          theme={{
            button: {
              primary: 'bg-red-500',
            },
          }}
        >
          ...
        </Flowbite>
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default ThemePage;
