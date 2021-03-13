import { call, put, select, takeEvery } from 'redux-saga/effects';
import { v4 } from 'uuid';

import { getMovies, getMovie } from '../../api';

import { SuccessResponse, ApiType, OneMovieResponse, StoreType } from '../../types';

import { setIsRequesting, requestMovie, REQUEST_MOVIE, saveMovieData, setRedirected } from './../actions/movie-actions';
import { 
  SEND_REQUEST,
  REQUEST_MORE_MOVIES,
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
  yield takeEvery(REQUEST_MOVIE, fetchOneMovie);
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

const fetchOneMovie = function*(action: ReturnType<typeof requestMovie>) {
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
