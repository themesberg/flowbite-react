import { render } from 'react-dom';
import { Dashboard } from './Dashboard';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import 'flowbite';

render(
  <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
    <Dashboard />
  </BrowserRouter>,
  document.getElementById('root'),
);
