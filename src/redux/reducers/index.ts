import { combineReducers } from 'redux';

import { appReducer } from './app-reducer';
import { movieReducer } from './movie-reducer';

export const rootReducer = combineReducers({
  app: appReducer,
  movie: movieReducer,
});
