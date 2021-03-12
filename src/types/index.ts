import { YEAR_ASC, YEAR_DESC, NAME_ASC, NAME_DESC, DEFAULT } from './../utils/sort';
/* Actions */
export type Action<T> = (value?: T) => {type: string, payload?: T}
export type ActionWithPayload<T> = (value: T) => {type: string, payload: T}

/* Api */

export type ApiType = (query?: string) => Promise<SuccessResponse | never>
export type SuccessResponse = {
  Response: string
  Search: Array<MoviesResponse>
  totalResults: string
}
export type MoviesResponse = {
  id: string
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
}

/* Sort */

export type SortType = typeof YEAR_ASC 
| typeof YEAR_DESC 
| typeof NAME_ASC 
| typeof NAME_DESC 
| typeof DEFAULT
