import { FC } from 'react';
import { Toast } from '../components/Toast';
import { CodeExample, DemoPage } from './DemoPage';

const ToastPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default Toast',
      code: (
        <div>
          <Toast className="mb-2" duration={75}>
            Duration: 75ms
          </Toast>
          <Toast className="mb-2" duration={300}>
            Duration: 300ms
          </Toast>
          <Toast className="mb-2" duration={1000}>
            Duration: 1000ms
          </Toast>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
  ];

  return <DemoPage examples={examples} />;
};

export default ToastPage;
