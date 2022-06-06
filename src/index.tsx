import { createRoot } from 'react-dom/client';
import { Root } from './docs/Root';
import { BrowserRouter } from 'react-router-dom';
import { Flowbite } from './lib/components';

import './index.css';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(
    <Flowbite>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </Flowbite>,
  );
}
