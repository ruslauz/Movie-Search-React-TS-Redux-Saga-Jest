import { call, put, takeLeading } from 'redux-saga/effects';
import { v4 } from 'uuid';

import { getMovies } from '../../api';

import { SuccessResponse, ApiType } from '../../types';

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

const fetchMoreMoviesWorker = function*(action: ReturnType<typeof requestMoreMovies>) {
  yield put(setIsFetchingMoreMovies(true));
  try {
    const query = action.payload[0];
    const page = action.payload[1];
    const data: SuccessResponse = yield call<ApiType>(getMovies, `${query}&page=${page}`);
    if (data.Response === 'True') {
      const dataWithId = data.Search.map(item => ({...item, id: v4()}))
      yield put(addMoreMovies(dataWithId));
      yield put(setCurrentPage(page));
    } else {
      
    }
  } catch (error) {
    yield put(setErrorFetchingMoreMovies(true));
    console.log(error);
  } finally {
    yield put(setIsFetchingMoreMovies(false));
  }
}
