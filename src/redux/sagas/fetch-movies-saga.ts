import { GetMoviesType } from './../../types/index';
import { call, put, takeLatest } from 'redux-saga/effects';
import { v4 } from 'uuid';

import { getMovies } from '../../api';

import { SuccessResponse, ApiType, MoviesResponseWithId, GetMoviesResponse } from '../../types';

import { 
  SEND_REQUEST,
  setIsFetchingMovies,
  saveMovies,
  setNoResults,
  setErrorFetchingMovies,
  sendRequest,
  setTotalPages,
  setCurrentPage,
  setSort, } from './../actions';
import { DEFAULT } from './../../utils/sort';

export const RESULTS_PER_PAGE = 10;

export const fetchMoviesWatcher = function*() {
  yield takeLatest(SEND_REQUEST, fetchMoviesWorker); // Saves only last (latest) request in store
}

export const fetchMoviesWorker = function*(action: ReturnType<typeof sendRequest>) {
  yield put(setIsFetchingMovies(true));
  yield put(setNoResults(false));
  yield put(setTotalPages(0));
  yield put(setCurrentPage(1));
  yield put(setSort(DEFAULT));
  try {    
    const data: SuccessResponse = yield call<GetMoviesType>(getMovies, action.payload);    
    if (data.Response === 'True') {
      const moviesWithId: Array<MoviesResponseWithId> = yield data.Search.map(item => ({...item, id: v4()}))
      yield put(saveMovies(moviesWithId));
      yield put(setTotalPages(Math.ceil(Number(data.totalResults)/RESULTS_PER_PAGE)));
    } else {
      yield put(saveMovies([]));
      yield put(setNoResults(true));
    }
  } catch (error) {
    console.log(error);
    yield put(setErrorFetchingMovies(true));
  } finally {
    yield put(setIsFetchingMovies(false));
  }
}
