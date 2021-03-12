import { REQUEST_MORE_MOVIES } from './../actions/index';
import { call, put, takeEvery } from 'redux-saga/effects';
import { v4 } from 'uuid';

import { getMovies } from './../../api';
import { SuccessResponse, ApiType } from './../../types';
import { 
  SEND_REQUEST,
  setIsFetchingMovies,
  saveMovies,
  setNoResults,
  setErrorFetchingMovies,
  sendRequest,
  setTotalPages,
  setCurrentPage,
  requestMoreMovies,
  addMoreMovies,
  setIsFetchingMoreMovies,
  setErrorFetchingMoreMovies } from './../actions';


const RESULTS_PER_PAGE = 10;

export const sagaWatcher = function*() {
  yield takeEvery(SEND_REQUEST, fetchMovies);
  yield takeEvery(REQUEST_MORE_MOVIES, fetchMoreMovies);
}

const fetchMovies = function*(action: ReturnType<typeof sendRequest>) {
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

const fetchMoreMovies = function*(action: ReturnType<typeof requestMoreMovies>) {
  yield put(setIsFetchingMoreMovies(true));
  try {
    const query = action.payload[0];
    const page = action.payload[1];
    const data: SuccessResponse = yield call<ApiType>(getMovies, `${query}&page=${page}`);
    console.log(data);
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