import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { requestMoreMovies } from '../../redux/actions';
import { StoreType } from '../../types';

import style from './style.module.css';

export const MoreMoviesButton: FC = ({ children }) =>
{
  const dispatch = useDispatch();
  const query = useSelector<StoreType, string>(store => store.app.query)
  const currentPage = useSelector<StoreType, number>(store => store.app.currentPage);
  const onFetchMoreMovies = () => dispatch(requestMoreMovies([query, currentPage + 1]))

  return <button className={style.home} onClick={onFetchMoreMovies}>{children}</button>
};
