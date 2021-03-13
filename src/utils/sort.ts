import { MoviesResponse } from './../types';

export const YEAR_ASC = 'YEAR_ASC';
export const YEAR_DESC = 'YEAR_DESC';
export const NAME_ASC = 'NAME_ASC';
export const NAME_DESC = 'NAME_DESC';
export const DEFAULT = '';



export const sortingVariants = {
  [YEAR_ASC]: (a: MoviesResponse, b: MoviesResponse) => (+a.Year - +b.Year),
  [YEAR_DESC]: (a: MoviesResponse, b: MoviesResponse) => (+b.Year - +a.Year),
  [NAME_ASC]: (a: MoviesResponse, b: MoviesResponse) => (a.Title > b.Title ? 1 : -1),
  [NAME_DESC]: (a: MoviesResponse, b: MoviesResponse) => (a.Title < b.Title ? 1 : -1),
}