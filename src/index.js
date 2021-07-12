import React from 'react';

import { Theme } from '@twilio-paste/core/theme';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { getLCP, getFID, getCLS } from 'web-vitals';

import Application from './components/Application';
import { store } from './store';

import './index.css';

getCLS(console.log);
getFID(console.log);
getLCP(console.log);

ReactDOM.render(
  <Provider store={store}>
    <Theme.Provider theme="default">
      <React.StrictMode>
        <Application />
      </React.StrictMode>
    </Theme.Provider>
  </Provider>,
  document.getElementById('root')
);
