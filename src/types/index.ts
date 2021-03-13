import { MovieStore } from './../redux/reducers/movie-reducer';
import { AppStore } from './../redux/reducers/app-reducer';
import { YEAR_ASC, YEAR_DESC, NAME_ASC, NAME_DESC, DEFAULT } from './../utils/sort';

/* Actions */

export type Action<T> = (value?: T) => {type: string, payload?: T}
export type ActionWithPayload<T> = (value: T) => {type: string, payload: T}

/* Api */

export type ApiType = (query?: string) => Promise<SuccessResponse | never>;
export type SuccessResponse = {
  Response: string
  Search: Array<MoviesResponse>
  totalResults: string
};
export type MoviesResponse = {
  id: string
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
};
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
  Ratings: string,
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

/* Store */

export type StoreType = {
  app: AppStore
  movie: MovieStore
}