import { FC } from 'react';
import { Toast } from '../components/toast';
import { CodeExample, DemoPage } from './DemoPage';
import { HiFire, HiCheck, HiExclamation, HiX } from 'react-icons/hi';
import { FaTelegramPlane } from 'react-icons/fa';
import { MdLoop } from 'react-icons/md';

const ToastPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default Toast',
      code: (
        <Toast className="flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400">
          <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-500 dark:bg-blue-800 dark:text-blue-200">
            <HiFire className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">Set yourself free.</div>
          <Toast.Toggle />
        </Toast>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Colors',
      code: (
        <div>
          <Toast className="mb-4 flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400">
            <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              <HiCheck className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">Item moved successfully.</div>
            <Toast.Toggle />
          </Toast>
          <Toast className="mb-4 flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400">
            <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
              <HiX className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">Item has been deleted.</div>
            <Toast.Toggle />
          </Toast>
          <Toast className="mb-4 flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400">
            <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
              <HiExclamation className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">Improve password difficulty.</div>
            <Toast.Toggle />
          </Toast>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Simple toast',
      code: (
        <Toast className="space-x flex w-full max-w-xs items-center space-x-4 divide-x divide-gray-200 rounded-lg bg-white p-4 text-gray-500 shadow dark:divide-gray-700 dark:bg-gray-800 dark:text-gray-400">
          <FaTelegramPlane className="h-5 w-5 text-blue-600 dark:text-blue-500" />
          <div className="pl-4 text-sm font-normal">Message sent successfully.</div>
        </Toast>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Undo button',
      code: (
        <Toast className="flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400">
          <div className="text-sm font-normal">Conversation archived.</div>
          <div className="ml-auto flex items-center space-x-2">
            <a
              className="rounded-lg p-1.5 text-sm font-medium text-blue-600 hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-700"
              href="#/toast"
            >
              Undo
            </a>
            <Toast.Toggle />
          </div>
        </Toast>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Interactive toast',
      code: (
        <Toast className="w-full max-w-xs rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400">
          <div className="flex">
            <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-500 dark:bg-blue-900 dark:text-blue-300">
              <MdLoop className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">
              <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Update available</span>
              <div className="mb-2 text-sm font-normal">A new software version is available for download.</div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <a
                    href="#/toast"
                    className="inline-flex w-full justify-center rounded-lg bg-blue-600 px-2 py-1.5 text-center text-xs font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                  >
                    Update
                  </a>
                </div>
                <div>
                  <a
                    href="#/toast"
                    className="inline-flex w-full justify-center rounded-lg border border-gray-300 bg-white px-2 py-1.5 text-center text-xs font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-600 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    Not now
                  </a>
                </div>
              </div>
            </div>
            <Toast.Toggle />
          </div>
        </Toast>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
  ];

  return <DemoPage examples={examples} />;
};

export default ToastPage;
