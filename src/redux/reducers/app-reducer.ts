import { Reducer } from 'react';

import { SortType, Action, MoviesResponseWithId } from '../../types';

import { 
  SET_IS_FETCHING_MOVIES,
  SET_NO_RESULTS,
  SET_CURRENT_PAGE,
  SET_TOTAL_PAGES,
  ADD_MORE_MOVIES,
  SET_IS_FETCHING_MORE_MOVIES,
  SET_SEARCH_INPUT,
  SET_SORT,
  RESET_APP,
  SET_QUERY,
  SAVE_MOVIES,
  SET_ERROR_FETCHING_MOVIES,
  SET_ERROR_FETCHING_MORE_MOVIES, } from './../actions';


export type AppStore = {
  isFetchingMovies: boolean
  errorFetchingMovies: boolean
  isFetchingMoreMovies: boolean
  errorFetchingMoreMovies: boolean
  noResults: boolean
  query: string
  searchInput: string
  sort: SortType
  movies: Array<MoviesResponseWithId>
  currentPage: number;
  totalPages: number;
};

export type ReducerType = Reducer<AppStore, ReturnType<Action<any>>>

export const initialState: AppStore = {
  isFetchingMovies: false,
  errorFetchingMovies: false,
  isFetchingMoreMovies: false,
  errorFetchingMoreMovies: false,
  noResults: false,
  query: '',
  searchInput: '',
  sort: '',
  movies: [],
  currentPage: 1,
  totalPages: 0,
};

export const appReducer: ReducerType = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_FETCHING_MOVIES:
      return {...state, isFetchingMovies: action.payload};
    case SAVE_MOVIES:
      return {...state, movies: action.payload};
    case SET_NO_RESULTS:
      return {...state, noResults: action.payload};
    case SET_ERROR_FETCHING_MOVIES:
      return {...state, errorFetchingMovies: action.payload};
    case SET_QUERY:
      return {...state, query: action.payload};
    case SET_SEARCH_INPUT:
      return {...state, searchInput: action.payload};
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.payload};
    case SET_TOTAL_PAGES:
      return {...state, totalPages: action.payload};
    case SET_IS_FETCHING_MORE_MOVIES:
      return {...state, isFetchingMoreMovies: action.payload};
    case ADD_MORE_MOVIES:
      return {...state, movies: [...state.movies, ...action.payload]};
    case SET_ERROR_FETCHING_MORE_MOVIES:
      return {...state, errorFetchingMoreMovies: action.payload};
    case SET_SORT:
      return {...state, sort: action.payload};
    case RESET_APP:
      return {...state, ...initialState};
    default:
      return state;
  }
}