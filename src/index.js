import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store from './store/index';

ReactDOM.render(
  <>
    <BrowserRouter>
        <Provider store={store}>
          <App/>
        </Provider>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
