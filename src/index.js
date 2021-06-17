// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

// Init
import { store } from './init/store';

// App
import { App } from './view/pages/App';

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById('root'),
);
