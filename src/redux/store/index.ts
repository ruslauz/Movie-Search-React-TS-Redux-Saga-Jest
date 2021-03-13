import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSaga from 'redux-saga';

import { rootReducer } from '../reducers';
import { rootSaga } from './../sagas';

const saga = createSaga();

export const store = createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(saga)))

saga.run(rootSaga);
