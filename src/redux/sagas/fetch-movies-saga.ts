import { call, put, takeLatest } from 'redux-saga/effects';
import { v4 } from 'uuid';

import { getMovies } from '../../api';

import { SuccessResponse, ApiType } from '../../types';

import { 
  SEND_REQUEST,
  setIsFetchingMovies,
  saveMovies,
  setNoResults,
  setErrorFetchingMovies,
  sendRequest,
  setTotalPages, } from './../actions';

const RESULTS_PER_PAGE = 10;

export const fetchMoviesWatcher = function*() {
  yield takeLatest(SEND_REQUEST, fetchMoviesWorker); // Saves only last (latest) request in store
}

const fetchMoviesWorker = function*(action: ReturnType<typeof sendRequest>) {
  yield put(setIsFetchingMovies(true));
  yield put(setNoResults(false));
  yield put(setTotalPages(0));
  try {    
    const data: SuccessResponse = yield call<ApiType>(getMovies, action.payload);
    if (data.Response === 'True') {
      const dataWithId = data.Search.map(item => ({...item, id: v4()}))
      yield put(saveMovies(dataWithId));
      yield put(setTotalPages(Math.ceil(Number(data.totalResults)/RESULTS_PER_PAGE)));
    } else {
      yield put(saveMovies([]))
      yield put(setNoResults(true));
    }
  } catch (error) {
    yield put(setErrorFetchingMovies(true));
    console.log(error);
  } finally {
    yield put(setIsFetchingMovies(false));
  }
}
