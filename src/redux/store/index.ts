import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSaga from 'redux-saga';

import { reducer } from '../reducers';
import { sagaWatcher } from './../sagas/index';

const saga = createSaga();

export const store = createStore<any, any, any, any>(reducer, undefined, composeWithDevTools(applyMiddleware(saga)))

saga.run(sagaWatcher)