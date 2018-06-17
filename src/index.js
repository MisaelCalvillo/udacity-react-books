import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Import BrowserRouter
import { BrowserRouter } from 'react-router-dom';

// Import Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the global styles
import './assets/css/styles.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
