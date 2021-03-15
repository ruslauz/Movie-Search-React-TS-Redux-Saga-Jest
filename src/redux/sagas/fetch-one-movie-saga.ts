import { Task } from '@redux-saga/types';
import { call, put, cancel, fork, take } from 'redux-saga/effects';

import { getMovie } from '../../api';

import { ApiType, GetMovieType, OneMovieResponse } from '../../types';

import { setIsRequesting, requestMovie, REQUEST_MOVIE, saveMovieData, RESET_MOVIE } from './../actions/movie-actions';

export const fetchOneMovieWatcher = function*() {
  while (true) {
    const action: ReturnType<typeof requestMovie> = yield take(REQUEST_MOVIE); // Takes every request  
    const task: Task = yield fork(fetchOneMovieWorker, action);
    yield take(RESET_MOVIE);
    yield cancel(task);
  }
}

export const fetchOneMovieWorker = function*(action: ReturnType<typeof requestMovie>) {
  yield put(setIsRequesting(true));
  try {    
    const data: OneMovieResponse = yield call<GetMovieType>(getMovie, action.payload.id);
    if (data.Response === 'True') {
      yield put(saveMovieData(data));
      yield put(setIsRequesting(false));
    } else {
      yield action.payload.history.replace('/404');
    }
  } catch (error) {
    yield action.payload.history.replace('/404');
  }
};
