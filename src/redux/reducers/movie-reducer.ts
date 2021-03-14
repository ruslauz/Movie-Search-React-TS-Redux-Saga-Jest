import { Reducer } from 'react';

import { Action, OneMovieResponse } from '../../types';

import {
  SET_IS_REQUESTING, 
  SAVE_MOVIE_DATA, 
  RESET_MOVIE, } from '../actions/movie-actions'

export type MovieStore = {
  isRequesting: boolean
  movieData: Partial<OneMovieResponse>
  isRedirected: boolean
};

export type ReducerType = Reducer<MovieStore, ReturnType<Action<any>>>

const initialState: MovieStore = {
  isRequesting: false,
  movieData: {},
  isRedirected: false,
};

export const movieReducer: ReducerType = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_REQUESTING:
      return {...state, isRequesting: action.payload};
    case SAVE_MOVIE_DATA:
      return {...state, movieData: action.payload};
    case RESET_MOVIE:
      return {...state, ...initialState};
    default:
      return state;
  }
}
