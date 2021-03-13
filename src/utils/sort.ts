import { MoviesResponse } from './../types';

export const YEAR_ASC = 'YEAR_ASC';
export const YEAR_DESC = 'YEAR_DESC';
export const NAME_ASC = 'NAME_ASC';
export const NAME_DESC = 'NAME_DESC';
export const DEFAULT = '';



export const sortingVariants = {
  [YEAR_ASC]: (a: MoviesResponse, b: MoviesResponse) => (parseInt(a.Year) - parseInt(b.Year)),
  [YEAR_DESC]: (a: MoviesResponse, b: MoviesResponse) => (parseInt(b.Year) - parseInt(a.Year)),
  [NAME_ASC]: (a: MoviesResponse, b: MoviesResponse) => (a.Title.localeCompare(b.Title)),
  [NAME_DESC]: (a: MoviesResponse, b: MoviesResponse) => (a.Title.localeCompare(a.Title)),
}