'use client';

import type { FC } from 'react';
import { DocsContentLayout } from '../../../components/docs-content-layout';
import ButtonGroupDocs from './button-group.mdx';

const ButtonGroupPage: FC = () => (
  <DocsContentLayout
    title="React Button Group - Flowbite"
    description="Button groups are a Tailwind CSS powered set of buttons sticked together in a horizontal line"
  >
    <ButtonGroupDocs />
  </DocsContentLayout>
);

export default ButtonGroupPage;
