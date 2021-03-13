import { ChangeEventHandler, FC, FormEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { setSearchInput } from '../../redux/actions';
import { StoreType } from '../../types';

import style from './style.module.css';

type SearchType = {
  query?: string
  setQuery?: () => void
  startSearching?: () => void
}

export const Search: FC<SearchType> = () =>
{
  const dispatch = useDispatch();
  const isFetchingMovies = useSelector<StoreType, boolean>(store => store.app.isFetchingMovies);
  const searchInput = useSelector<StoreType, string>((state) => state.app.searchInput);
  const history = useHistory();
  
  const onChange: ChangeEventHandler<HTMLInputElement> = e =>
  {
    const value = e.target.value.trimStart();
    dispatch(setSearchInput(value))
  }
  const onSubmit: FormEventHandler<HTMLFormElement> = e =>
  {
    e.preventDefault();
    if (searchInput.length) {
      history.replace(`/?search=${searchInput}`);
    }
  }

  return (
    <form className={style.search} onSubmit={onSubmit}>
      <input type='search'
        className={style.input}
        placeholder='Search'
        onChange={onChange}
        value={searchInput}/>
      <button className={style.button} type='submit'>
        {
          isFetchingMovies
            ? <i className="fas fa-cog fa-spin" />
            : <i className='fas fa-search' />
        }
      </button>
    </form>
  )
};
