import { call, put, select, takeEvery } from 'redux-saga/effects';

import { getMovie } from '../../api';

import { ApiType, OneMovieResponse, StoreType } from '../../types';

import { setIsRequesting, requestMovie, REQUEST_MOVIE, saveMovieData, setRedirected } from './../actions/movie-actions';

export const fetchOneMovieWatcher = function*() {
  yield takeEvery(REQUEST_MOVIE, fetchOneMovieWorker); // Takes every request
}

const fetchOneMovieWorker = function*(action: ReturnType<typeof requestMovie>) {
  yield put(setIsRequesting(true));
  yield put(setRedirected(false));
  try {    
    const data: OneMovieResponse = yield call<ApiType>(getMovie, action.payload.id);
    if (data.Response === 'True') {
      yield put(saveMovieData(data));
    } else {
      action.payload.history.replace('/404');
    }
  } catch (error) {
    action.payload.history.replace('/404');;
  } finally {
    const isRedirected: boolean = yield select((state: StoreType) => state.movie.isRedirected);
    if (!isRedirected) yield put(setIsRequesting(false));
  }
}
