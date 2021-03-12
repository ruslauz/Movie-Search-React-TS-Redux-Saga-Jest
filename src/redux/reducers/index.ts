import { SortType } from './../../types/index';
import { SET_IF_FETCHING_MOVIES, SET_NO_RESULTS, SET_CURRENT_PAGE, SET_TOTAL_PAGES, ADD_MORE_MOVIES, SET_IF_FETCHING_MORE_MOVIES, SET_SEARCH_INPUT, SET_SORT, RESET_APP } from './../actions/index';
import { Reducer } from 'react';

import { SET_QUERY, SAVE_MOVIES } from '../actions';
import { MoviesResponse } from '../../types';

export type Store = {
  isFetchingMovies: boolean
  errorFetchingMovies: boolean
  isFetchingMoreMovies: boolean
  errorFetchingMoreMovies: boolean
  noResults: boolean
  query: string
  searchInput: string
  sort: SortType
  movies: Array<MoviesResponse>
  currentPage: number;
  totalPages: number;
};

export type ReducerType = Reducer<Store, any>

const initialState: Store = {
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

export const reducer: ReducerType = (state: Store = initialState, action): Store => {
  switch (action.type) {
    case SET_IF_FETCHING_MOVIES:
      return {...state, isFetchingMovies: action.payload};
    case SAVE_MOVIES:
      return {...state, movies: action.payload};
    case SET_NO_RESULTS:
      return {...state, noResults: action.payload};
    case SET_QUERY:
      return {...state, query: action.payload};
    case SET_SEARCH_INPUT:
      return {...state, searchInput: action.payload};
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.payload};
    case SET_TOTAL_PAGES:
      return {...state, totalPages: action.payload};
    case SET_IF_FETCHING_MORE_MOVIES:
      return {...state, isFetchingMoreMovies: action.payload};
    case ADD_MORE_MOVIES:
      return {...state, movies: [...state.movies, ...action.payload]};
    case SET_SORT:
      return {...state, sort: action.payload};
    case RESET_APP:
      return {...state, ...initialState};
    default:
      return state;
  }
}