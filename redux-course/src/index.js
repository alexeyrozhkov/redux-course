import React from 'react';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import  configureStore from './store/configureStore'

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
