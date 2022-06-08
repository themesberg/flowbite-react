import { createRoot } from 'react-dom/client';
import { Root } from './docs/Root';
import { BrowserRouter } from 'react-router-dom';
import { Flowbite } from './lib/components';

import './index.css';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  const theme = {
    sidebar: {
      base: 'h-full bg-inherit',
      inner: 'h-full overflow-y-auto overflow-x-hidden rounded bg-inherit py-4 px-3',
    },
  };

  root.render(
    <Flowbite theme={{ theme }}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </Flowbite>,
  );
}
