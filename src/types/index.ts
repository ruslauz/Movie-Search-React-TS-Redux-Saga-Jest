import { useHistory } from 'react-router-dom';

import { MovieStore } from './../redux/reducers/movie-reducer';
import { AppStore } from './../redux/reducers/app-reducer';
import { YEAR_ASC, YEAR_DESC, NAME_ASC, NAME_DESC, DEFAULT } from './../utils/sort';
import { getMovie, getMovies } from '../api';

/* Actions */

export type Action<T> = (value?: T) => {type: string, payload?: T}
export type ActionWithPayload<T> = (value: T) => {type: string, payload: T}

// export type Action<T, P> = (value?: T) => {type: P, payload?: T}
// export type ActionWithPayload<T, P> = (value: T) => {type: P, payload: T}

/* Api */

export type ApiType = (query?: string) => Promise<ResponseType>;
export type ResponseType = SuccessResponse | FailedResponse | never
export type SuccessResponse = {
  Response: 'True'
  Search: Array<MoviesResponse>
  totalResults: string
};

export type FailedResponse = {
  Response: 'False'
  Error: 'Movie not found!'
};

export type GetMoviesResponse = ReturnType<typeof getMovies>;
export type GetMovieResponse = ReturnType<typeof getMovie>;

export type GetMoviesType = (query: string) => GetMoviesResponse;
export type GetMovieType = (query: string) => GetMovieResponse;

export type MoviesResponse = {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
};

export type MoviesResponseWithId = MoviesResponse & {id: string}

export type OneMovieResponse = {
  Title: string,
  Year: string,
  Rated: string,
  Released: string,
  Runtime: string,
  Genre: string,
  Director: string,
  Writer: string,
  Actors: string,
  Plot: string,
  Language: string,
  Country: string,
  Awards: string,
  Poster: string,
  Ratings: Array<{Source: string, Value: string}>,
  Metascore: string,
  imdbRating: string,
  imdbVotes: string,
  imdbID: string,
  Type: string,
  DVD: string,
  BoxOffice: string,
  Production: string,
  Website: string,
  Response: string,
};

/* Sort */

export type SortType = typeof YEAR_ASC 
| typeof YEAR_DESC 
| typeof NAME_ASC 
| typeof NAME_DESC 
| typeof DEFAULT;

// export type SortFunction = (a: MoviesResponse, b: MoviesResponse) => number

/* Store */

export type StoreType = {
  app: AppStore
  movie: MovieStore
}

/* History */

export type HistoryType = ReturnType<typeof useHistory>