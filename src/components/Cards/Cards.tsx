import { FC } from 'react';
import { useSelector } from 'react-redux';

import style from './style.module.css';

import Card from '../Card/Card';

import { MoviesResponse, SortType } from '../../types'
import { Store } from '../../redux/reducers';
import { MoreMoviesButton } from '../MoreMoviesButton';

import { sortingVariants } from '../../utils/sort';

const NO_IMAGE_URL = 'http://fpae.pt/backup/20181025/wp/wp-content/plugins/post-slider-carousel/images/no-image-available-grid.jpg'

export const Cards: FC = () =>
{
  const movies = useSelector<Store, Array<MoviesResponse>>(store => store.movies);
  const sort = useSelector<Store, SortType>(store => store.sort)
  const isFetchingMovies = useSelector<Store, boolean>(store => store.isFetchingMovies);
  const isFetchingMoreMovies = useSelector<Store, boolean>(store => store.isFetchingMoreMovies)
  const noResults = useSelector<Store, boolean>(store => store.noResults);
  const currentPage = useSelector<Store, number>(store => store.currentPage);
  const totalPages = useSelector<Store, number>(store => store.totalPages);
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
