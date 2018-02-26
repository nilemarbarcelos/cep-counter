import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import cep from './reducers/cep';
import counter from './reducers/counter';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const reduxThunk = ({dispatch, getState}) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }
  return next(action);
}

const rootReducer = combineReducers({
  cep,
  counter
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk))

store.subscribe(() => {
  console.log('state:', store.getState());
})
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
