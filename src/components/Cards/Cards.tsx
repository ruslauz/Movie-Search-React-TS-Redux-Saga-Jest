import { FC } from 'react';
import { useSelector } from 'react-redux';

import Card from '../Card/Card';

import { MoviesResponseWithId, SortType, StoreType } from '../../types'
import { sortingVariants } from '../../utils/sort';

import style from './style.module.css';

export const NO_IMAGE_URL = 'https://fpae.pt/backup/20181025/wp/wp-content/plugins/post-slider-carousel/images/no-image-available-grid.jpg'

export const Cards: FC = () =>
{
  const movies = useSelector<StoreType, Array<MoviesResponseWithId>>(store => store.app.movies);
  const sort = useSelector<StoreType, SortType>(store => store.app.sort)
  const isFetchingMovies = useSelector<StoreType, boolean>(store => store.app.isFetchingMovies);
  const sortedMovies = sort ? [...movies].sort(sortingVariants[sort]) : movies;

  return (
    <>
      <div className={style.cards}>
        {!isFetchingMovies && !!movies.length &&
          sortedMovies.map(movie => (
            <Card
              title={movie.Title}
              poster={movie.Poster === 'N/A' ? NO_IMAGE_URL : movie.Poster}
              year={movie.Year}
              type={movie.Type}
              key={movie.id}
              id={movie.imdbID} />
          ))
        }
      </div>
    </>
  )
}

export default Cards
