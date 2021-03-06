//////// Store Configuration ////////

import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import reducers from 'redux/reducers';
import thunk from 'redux-thunk';

const middleware = [thunk];

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default function configureStore() {
  return createStore(
    combineReducers({
      ...reducers,
    }),
    {},
    composeEnhancers(
      applyMiddleware(...middleware),
    ),
  );
}
