import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import CounterContainer from './CounterContainer';
import {Provider} from 'react-redux';
import rootReducer from './modules';

const weight = 100;
// const store = createStore(rootReducer);

const reducer = (state = weight, action) => {
  if(action.type === '증가'){
    state++;
    return state
  }
  else if(action.type === '감소'){
    state--;
    return state;
  }
  else{
    return state
  }
}

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
