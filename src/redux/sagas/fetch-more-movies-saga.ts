import { MoviesResponseWithId } from './../../types/index';
import { call, put, takeLeading } from 'redux-saga/effects';
import { v4 } from 'uuid';

import { getMovies } from '../../api';

import { SuccessResponse, GetMoviesType } from '../../types';

import { 
  REQUEST_MORE_MOVIES,
  setCurrentPage,
  requestMoreMovies,
  addMoreMovies,
  setIsFetchingMoreMovies,
  setErrorFetchingMoreMovies } from './../actions';

export const fetchMoreMoviesWatcher = function*() {
  yield takeLeading(REQUEST_MORE_MOVIES, fetchMoreMoviesWorker); // Prevents requests when other request is running (i.e You cannot send another request when you already send one and it is not resolved yet)
}

export const fetchMoreMoviesWorker = function*(action: ReturnType<typeof requestMoreMovies>) {
  yield put(setIsFetchingMoreMovies(true));
  try {
    const query = action.payload[0];
    const page = action.payload[1];
    const data: SuccessResponse = yield call<GetMoviesType>(getMovies, `${query}&page=${page}`);
    if (data.Response === 'True') {
      const dataWithId: Array<MoviesResponseWithId> = yield data.Search.map(item => ({...item, id: v4()}))
      yield put(addMoreMovies(dataWithId));
      yield put(setCurrentPage(page));
    }
  } catch (error) {
    console.log(error);
    yield put(setErrorFetchingMoreMovies(true));
    console.log(error);
  } finally {
    yield put(setIsFetchingMoreMovies(false));
  }
}
