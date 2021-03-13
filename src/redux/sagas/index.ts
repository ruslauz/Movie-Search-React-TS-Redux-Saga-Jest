import { all } from 'redux-saga/effects';

import { fetchOneMovieWatcher } from './fetch-one-movie-saga';
import { fetchMoreMoviesWatcher } from './fetch-more-movies-saga';
import { fetchMoviesWatcher } from './fetch-movies-saga';

export const rootSaga = function*() {
  yield all([
    fetchMoviesWatcher(),
    fetchMoreMoviesWatcher(),
    fetchOneMovieWatcher()
  ]);
};
