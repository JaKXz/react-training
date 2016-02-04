import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import * as reducers from './reducers/index';

import thunk from 'redux-thunk';
import logger from './middleware/logger';

// Configure our store
const store = compose(
  applyMiddleware(
    thunk,
    logger,
  ),
)(createStore)(combineReducers(reducers), {});

import Counter from './containers/Counter';

ReactDOM.render(
  <Provider store={ store }>
    <Counter />
  </Provider>,
  document.getElementById('root')
);
