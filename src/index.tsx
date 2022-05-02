import { createRoot } from 'react-dom/client';
import { Root } from './docs/Root';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import 'flowbite';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
);
