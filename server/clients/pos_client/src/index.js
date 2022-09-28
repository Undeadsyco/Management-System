/* eslint-disable react/jsx-filename-extension */
// dependendcies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// components
import App from './App';
// utils
import './index.css';
import reducer from './reducers';

const store = createStore(reducer);
// store.subscribe(() => {
//   localStorage.setItem('state', JSON.stringify(store.getState()));
// });

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/pos_system">
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
