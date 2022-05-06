import { createRoot } from 'react-dom/client';
import { Root } from './docs/Root';
import { BrowserRouter } from 'react-router-dom';
import { Flowbite } from './lib/components/Flowbite';

import './index.css';
import 'flowbite';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <Flowbite>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </Flowbite>,
);
