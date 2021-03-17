import { Action, MoviesResponse, ActionWithPayload } from '../../types';

export const SET_QUERY = 'APP/SET_QUERY';
export const SET_SEARCH_INPUT = 'APP/SET_SEARCH_INPUT';
export const SEND_REQUEST = 'APP/SEND_REQUEST';
export const SET_IS_FETCHING_MOVIES = 'APP/SET_IS_FETCHING_MOVIES';
export const SAVE_MOVIES = 'APP/SAVE_MOVIES';
export const SET_NO_RESULTS = 'APP/SET_NO_RESULTS';
export const SET_ERROR_FETCHING_MOVIES = 'APP/SET_ERROR_FETCHING_MOVIES';

export const SET_CURRENT_PAGE = 'APP/SET_CURRENT_PAGE';
export const SET_TOTAL_PAGES = 'APP/SET_TOTAL_PAGES';

export const SET_IS_FETCHING_MORE_MOVIES = 'APP/SET_IF_FETCHING_MORE_MOVIES';
export const REQUEST_MORE_MOVIES = 'APP/REQUEST_MORE_MOVIES';
export const ADD_MORE_MOVIES = 'APP/ADD_MORE_MOVIES'
export const SET_ERROR_FETCHING_MORE_MOVIES = 'APP/SET_ERROR_FETCHING_MORE_MOVIES';

export const SET_SORT = 'APP/SET_SORT';

export const RESET_APP = 'APP/RESET_APP';

export const setIsFetchingMovies: Action<boolean> = boolean => ({
  type: SET_IS_FETCHING_MOVIES,
  payload: boolean,
})

export const sendRequest: ActionWithPayload<string> = query => ({
  type: SEND_REQUEST,
  payload: query,
})

export const saveMovies: ActionWithPayload<Array<MoviesResponse> | []> = movies => ({
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

export const setSearchInput: ActionWithPayload<string> = value => ({
  type: SET_SEARCH_INPUT,
  payload: value,
});

export const setCurrentPage: ActionWithPayload<number> = page => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});

export const setTotalPages: ActionWithPayload<number> = pages => ({
  type: SET_TOTAL_PAGES,
  payload: pages,
});

export const setIsFetchingMoreMovies: Action<boolean> = boolean => ({
  type: SET_IS_FETCHING_MORE_MOVIES,
  payload: boolean,
})

export const requestMoreMovies: ActionWithPayload<[string, number]> = values => ({
  type: REQUEST_MORE_MOVIES,
  payload: values,
});

export const addMoreMovies: ActionWithPayload<Array<MoviesResponse>> = movies => ({
  type: ADD_MORE_MOVIES,
  payload: movies,
});

export const setErrorFetchingMoreMovies: ActionWithPayload<boolean> = boolean => ({
  type: SET_ERROR_FETCHING_MORE_MOVIES,
  payload: boolean
});

export const setSort: ActionWithPayload<string> = sort => ({
  type: SET_SORT,
  payload: sort,
})

export const resetApp: Action<void> = () => ({
  type: RESET_APP
})
