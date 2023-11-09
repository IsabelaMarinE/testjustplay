import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Redux
import { reducer } from './reducers/reducer';
import { Provider } from 'react-redux';
import { legacy_createStore as createStrore } from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStrore(reducer);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
