import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Dashboard } from './Dashboard';

import './index.css';
import 'flowbite';

render(
  <StrictMode>
    <Dashboard />
  </StrictMode>,
  document.getElementById('root'),
);
