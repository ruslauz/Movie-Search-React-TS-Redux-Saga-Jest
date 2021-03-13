import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSaga from 'redux-saga';

import { rootReducer } from '../reducers';
import { sagaWatcher } from './../sagas';

const saga = createSaga();

export const store = createStore<any, any, any, any>(rootReducer, undefined, composeWithDevTools(applyMiddleware(saga)))

saga.run(sagaWatcher)