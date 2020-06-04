import React from 'react';
import ReactDOM from 'react-dom';
import MyProvider from './AppContext.js'
import './index.css';
import App from './App';

ReactDOM.render(
  <MyProvider>
  <App />
  </MyProvider>,
  document.getElementById('root')
);

