import { render } from 'react-dom';
import { Dashboard } from './Dashboard';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import 'flowbite';

render(
  <BrowserRouter>
    <Dashboard />
  </BrowserRouter>,
  document.getElementById('root'),
);
