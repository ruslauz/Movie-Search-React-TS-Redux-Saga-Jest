import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestMoreMovies } from '../../redux/actions';
import { Store } from '../../redux/reducers';
import style from './style.module.css';

export const MoreMoviesButton: FC = ({ children }) =>
{
  const dispatch = useDispatch();
  const query = useSelector<Store, string>(store => store.query)
  const currentPage = useSelector<Store, number>(store => store.currentPage);
  const onFetchMoreMovies = () => dispatch(requestMoreMovies([query, currentPage + 1]))

  return <button className={style.home} onClick={onFetchMoreMovies}>{children}</button>
};
