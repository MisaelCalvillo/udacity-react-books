import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Import the global styles
import './assets/css/styles.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
