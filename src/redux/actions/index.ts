import { MoviesResponse, ActionWithPayload } from './../../types/index';
import { Action } from '../../types';

export const SET_QUERY = 'SET_QUERY';
export const SET_SEARCH_INPUT = 'SET_SEARCH_INPUT';
export const SEND_REQUEST = 'SEND_REQUEST';
export const SET_IF_FETCHING_MOVIES = 'SET_IF_FETCHING_MOVIES';
export const SAVE_MOVIES = 'SAVE_MOVIES';
export const SET_NO_RESULTS = 'SET_NO_RESULTS';
export const SET_ERROR_FETCHING_MOVIES = 'SET_ERROR_FETCHING_MOVIES';

export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';

export const SET_IF_FETCHING_MORE_MOVIES = 'SET_IF_FETCHING_MORE_MOVIES';
export const REQUEST_MORE_MOVIES = 'REQUEST_MORE_MOVIES';
export const ADD_MORE_MOVIES = 'ADD_MORE_MOVIES'
export const SET_ERROR_FETCHING_MORE_MOVIES = 'SET_ERROR_FETCHING_MOVIES';

export const SET_SORT = 'SET_SORT';

export const RESET_APP = 'RESET_APP';

export const setIsFetchingMovies: Action<boolean> = boolean => ({
  type: SET_IF_FETCHING_MOVIES,
  payload: boolean,
})

export const sendRequest: Action<string> = query => ({
  type: SEND_REQUEST,
  payload: query,
})

export const saveMovies: Action<Array<MoviesResponse>> = movies => ({
  type: SAVE_MOVIES,
  payload: movies,
});

export const setNoResults: Action<boolean> = boolean => ({
  type: SET_NO_RESULTS,
  payload: boolean,
});

export const setErrorFetchingMovies: Action<boolean> = boolean => ({
  type: SET_ERROR_FETCHING_MOVIES,
  payload: boolean,
});

export const setQuery: Action<string> = query => ({
  type: SET_QUERY,
  payload: query,
});

export const setSearchInput: Action<string> = value => ({
  type: SET_SEARCH_INPUT,
  payload: value,
});

export const setCurrentPage: Action<number> = page => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const setTotalPages: Action<number> = pages => ({
  type: SET_TOTAL_PAGES,
  payload: pages,
});

export const setIsFetchingMoreMovies: Action<boolean> = boolean => ({
  type: SET_IF_FETCHING_MORE_MOVIES,
  payload: boolean,
})

export const requestMoreMovies: ActionWithPayload<[string, number]> = values => ({
  type: REQUEST_MORE_MOVIES,
  payload: values,
});

export const addMoreMovies: Action<Array<MoviesResponse>> = movies => ({
  type: ADD_MORE_MOVIES,
  payload: movies,
});

export const setErrorFetchingMoreMovies: Action<boolean> = boolean => ({
  type: SET_ERROR_FETCHING_MORE_MOVIES,
  payload: boolean
});

export const setSort: Action<string> = sort => ({
  type: SET_SORT,
  payload: sort,
})

export const resetApp: Action<void> = () => ({
  type: RESET_APP
})
