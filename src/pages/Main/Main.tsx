import { FC } from 'react';
import { useSelector } from 'react-redux';

import { Cards } from '../../components/Cards';
import { MoreMoviesButton } from '../../components/MoreMoviesButton';

import { StoreType } from '../../types'

import style from './style.module.css';

export const Main: FC = () => {
  const noResults = useSelector<StoreType, boolean>(store => store.app.noResults);
  const isFetchingMoreMovies = useSelector<StoreType, boolean>(store => store.app.isFetchingMoreMovies)
  const currentPage = useSelector<StoreType, number>(store => store.app.currentPage);
  const totalPages = useSelector<StoreType, number>(store => store.app.totalPages);

  return (
    <>
      { noResults &&
        <h2 className={style.noResults}>There are no results for this request</h2>
      }
      <Cards />
      { currentPage < totalPages &&
        <MoreMoviesButton>
          {
            isFetchingMoreMovies
              ? <i className="fas fa-cog fa-spin" />
              : <i className="fas fa-plus" />
          }
        </MoreMoviesButton>
      }
    </>
  )
};
