import { render } from 'react-dom';
import { Dashboard } from './Dashboard';
import { HashRouter } from 'react-router-dom';

import './index.css';
import 'flowbite';

render(
  <HashRouter>
    <Dashboard />
  </HashRouter>,
  document.getElementById('root'),
);
