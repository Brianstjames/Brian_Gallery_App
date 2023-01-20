import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import reducer from './reducers/reducers';
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // this is bringing in the reducer in the first slot, and the second slot is allowing us to use the redux dev tools extension

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>


  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

