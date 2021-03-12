import { ChangeEvent, FC, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { setSearchInput } from '../../redux/actions';
import { Store } from '../../redux/reducers';

import style from './style.module.css';

type SearchType = {
  query?: string
  setQuery?: () => void
  startSearching?: () => void
}

export const Search: FC<SearchType> = () =>
{
  const dispatch = useDispatch();
  const isFetchingMovies = useSelector<Store, boolean>(store => store.isFetchingMovies)
  const history = useHistory();
  const searchInput = useSelector<Store, string>((state) => state.searchInput);
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
  {
    const value = e.target.value.trimStart();
    dispatch(setSearchInput(value))
  }
  const onSubmit = (e: FormEvent<HTMLFormElement>) =>
  {
    e.preventDefault();
    if (searchInput.length) {
      history.replace(`/?search=${searchInput}`);
    }
  }

  return (
    <form className={style.search} onSubmit={onSubmit}>
      <input type='text'
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
