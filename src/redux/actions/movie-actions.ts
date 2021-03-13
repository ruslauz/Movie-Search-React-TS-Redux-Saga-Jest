import { OneMovieResponse, ActionWithPayload } from '../../types';

export const SET_IS_REQUESTING = 'MOVIE/SET_IS_REQUESTING';
export const REQUEST_MOVIE = 'MOVIE/REQUEST_MOVIE';
export const SAVE_MOVIE_DATA = 'SAVE_MOVIE_DATA';
export const SET_REDIRECTED = 'SET_REDIRECTED';

export const setIsRequesting: ActionWithPayload<boolean> = boolean => ({
  type: SET_IS_REQUESTING,
  payload: boolean,
});

export const requestMovie: ActionWithPayload<{id: string, history: any}> = object => ({
  type: REQUEST_MOVIE,
  payload: object,
});

export const saveMovieData: ActionWithPayload<OneMovieResponse> = data => ({
  type: SAVE_MOVIE_DATA,
  payload: data,
});

export const setRedirected: ActionWithPayload<boolean> = boolean => ({
  type: SET_REDIRECTED,
  payload: boolean
});
