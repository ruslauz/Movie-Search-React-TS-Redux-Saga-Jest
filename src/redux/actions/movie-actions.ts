import { OneMovieResponse, ActionWithPayload, HistoryType, Action } from '../../types';

export const SET_IS_REQUESTING = 'MOVIE/SET_IS_REQUESTING';
export const REQUEST_MOVIE = 'MOVIE/REQUEST_MOVIE';
export const SAVE_MOVIE_DATA = 'MOVIE/SAVE_MOVIE_DATA';
export const RESET_MOVIE = 'MOVIE/RESET_MOVIE';

export const setIsRequesting: ActionWithPayload<boolean> = boolean => ({
  type: SET_IS_REQUESTING,
  payload: boolean,
});

export const requestMovie: ActionWithPayload<{id: string, history: HistoryType}> = object => ({
  type: REQUEST_MOVIE,
  payload: object,
});

export const saveMovieData: ActionWithPayload<OneMovieResponse> = data => ({
  type: SAVE_MOVIE_DATA,
  payload: data,
});

export const resetMovie: Action<undefined> = () => ({
  type: RESET_MOVIE,
});
