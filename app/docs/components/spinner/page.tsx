'use client';

import type { FC } from 'react';
import { CodePreview } from '~/app/components/code-preview';
import { Button, Spinner } from '~/src';
import { DocsContentLayout } from '../../../components/docs-content-layout';

const SpinnersPage: FC = () => (
  <DocsContentLayout
    title="React Spinner (Loader) - Flowbite"
    description="Use the spinner component as a loader indicator in your projects when fetching data based on an animated SVG"
  >
    <p>
      The spinner component can be used as a loading indicator which comes in multiple colors, sizes, and styles
      separately or inside elements such as buttons to improve the user experience whenever data is being fetched from
      your server.
    </p>
    <CodePreview title="Default spinner">
      <Spinner aria-label="Default status example" />
    </CodePreview>
    <CodePreview title="Colors" className="flex flex-wrap gap-2">
      <Spinner color="info" aria-label="Info spinner example" />
      <Spinner color="success" aria-label="Success spinner example" />
      <Spinner color="failure" aria-label="Failure spinner example" />
      <Spinner color="warning" aria-label="Warning spinner example" />
      <Spinner color="pink" aria-label="Pink spinner example" />
      <Spinner color="purple" aria-label="Purple spinner example" />
    </CodePreview>
    <CodePreview title="Sizing" className="flex flex-wrap items-center gap-2">
      <Spinner aria-label="Extra small spinner example" size="xs" />
      <Spinner aria-label="Small spinner example" size="sm" />
      <Spinner aria-label="Medium sized spinner example" size="md" />
      <Spinner aria-label="Large spinner example" size="lg" />
      <Spinner aria-label="Extra large spinner example" size="xl" />
    </CodePreview>
    <CodePreview title="Alignment" className="flex flex-col gap-2">
      <div className="text-left">
        <Spinner aria-label="Left-aligned spinner example" />
      </div>
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
      <div className="text-right">
        <Spinner aria-label="Right-aligned spinner example" />
      </div>
    </CodePreview>
    <CodePreview title="Buttons" className="flex flex-row gap-3">
      <Button>
        <Spinner aria-label="Spinner button example" />
        <span className="pl-3">Loading...</span>
      </Button>
      <Button color="gray">
        <Spinner aria-label="Alternate spinner button example" />
        <span className="pl-3">Loading...</span>
      </Button>
    </CodePreview>
  </DocsContentLayout>
);

export default SpinnersPage;
