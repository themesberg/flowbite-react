'use client';

import Link from 'next/link';
import type { FC } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { HiCheck, HiExclamation, HiFire, HiX } from 'react-icons/hi';
import { MdLoop } from 'react-icons/md';
import { CodePreview } from '~/app/components/code-preview';
import { Button, Toast } from '~/src';
import { DocsContentLayout } from '../../../components/docs-content-layout';

const ToastPage: FC = () => (
  <DocsContentLayout
    title="React Toast - Flowbite"
    description="Push notifications to your users using the toast component and choose from multiple sizes, colors, styles, and positions"
  >
    <CodePreview title="Default toast">
      <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
          <HiFire className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">Set yourself free.</div>
        <Toast.Toggle />
      </Toast>
    </CodePreview>
    <CodePreview title="Colors">
      <div className="flex flex-col gap-4">
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
            <HiCheck className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">Item moved successfully.</div>
          <Toast.Toggle />
        </Toast>
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
            <HiX className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">Item has been deleted.</div>
          <Toast.Toggle />
        </Toast>
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
            <HiExclamation className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">Improve password difficulty.</div>
          <Toast.Toggle />
        </Toast>
      </div>
    </CodePreview>
    <CodePreview title="Simple toast">
      <div className="space-x-4 divide-x divide-gray-200 dark:divide-gray-700">
        <Toast>
          <FaTelegramPlane className="h-5 w-5 text-cyan-600 dark:text-cyan-500" />
          <div className="pl-4 text-sm font-normal">Message sent successfully.</div>
        </Toast>
      </div>
    </CodePreview>
    <CodePreview title="Undo button">
      <Toast>
        <div className="text-sm font-normal">Conversation archived.</div>
        <div className="ml-auto flex items-center space-x-2">
          <Link
            href="/toast"
            className="rounded-lg p-1.5 text-sm font-medium text-cyan-600 hover:bg-cyan-100 dark:text-cyan-500 dark:hover:bg-gray-700"
          >
            Undo
          </Link>
          <Toast.Toggle />
        </div>
      </Toast>
    </CodePreview>
    <CodePreview title="Interactive toast">
      <Toast>
        <div className="flex !items-start">
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-900 dark:text-cyan-300">
            <MdLoop className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">
            <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Update available</span>
            <div className="mb-2 text-sm font-normal">A new software version is available for download.</div>
            <div className="flex gap-2">
              <div className="w-full">
                <Button size="xs">Update</Button>
              </div>
              <div className="w-full">
                <Button color="light" size="xs">
                  Not now
                </Button>
              </div>
            </div>
          </div>
          <Toast.Toggle />
        </div>
      </Toast>
    </CodePreview>
  </DocsContentLayout>
);

export default ToastPage;
