import { FC } from 'react';
import { useSelector } from 'react-redux';

import Card from '../Card/Card';
import { MoreMoviesButton } from '../MoreMoviesButton';

import { MoviesResponse, SortType, StoreType } from '../../types'
import { sortingVariants } from '../../utils/sort';

import style from './style.module.css';

const NO_IMAGE_URL = 'http://fpae.pt/backup/20181025/wp/wp-content/plugins/post-slider-carousel/images/no-image-available-grid.jpg'

export const Cards: FC = () =>
{
  const movies = useSelector<StoreType, Array<MoviesResponse>>(store => store.app.movies);
  const sort = useSelector<StoreType, SortType>(store => store.app.sort)
  const isFetchingMovies = useSelector<StoreType, boolean>(store => store.app.isFetchingMovies);
  const isFetchingMoreMovies = useSelector<StoreType, boolean>(store => store.app.isFetchingMoreMovies)
  const noResults = useSelector<StoreType, boolean>(store => store.app.noResults);
  const currentPage = useSelector<StoreType, number>(store => store.app.currentPage);
  const totalPages = useSelector<StoreType, number>(store => store.app.totalPages);
  const sortedMovies = sort ? [...movies].sort(sortingVariants[sort]) : movies;

  return (
    <>
      { noResults &&
        <h2 className={style.noResults}>There are no results for this request</h2>
      }
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
      { currentPage < totalPages &&
        <MoreMoviesButton>
          {
            isFetchingMoreMovies 
              ? <i className="fas fa-cog fa-spin"></i>
              : <i className="fas fa-plus"></i>
          }
        </MoreMoviesButton>
      }
    </>
  )
}

export default Cards
