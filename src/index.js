import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import combinedReducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/sagas';



const sagaMiddleware = createSagaMiddleware();


const store = createStore(combinedReducers,
  applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);



ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
