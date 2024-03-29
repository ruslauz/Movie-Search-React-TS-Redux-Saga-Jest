import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, Switch, useLocation } from 'react-router-dom';
import parse from 'url-parse';

import { Search } from '../components/Search';
import { SortSelector } from '../components/SortSelector';
import { Main } from '../pages/Main';
import { Movie } from '../pages/Movie';
import { NotFound } from '../pages/NotFound';
import { resetApp, sendRequest, setQuery, setSearchInput } from '../redux/actions';
import { StoreType } from '../types';

import style from './style.module.css';

export const App: FC = () =>
{
  const dispatch = useDispatch();
  const location = useLocation();
  const query = useSelector<StoreType, string>(store => store.app.query);
  const searchQuery = parse(location.search, true).query.search || '';

  useEffect(() =>
  {
    if (searchQuery && searchQuery !== query) {
      dispatch(sendRequest(searchQuery));
      dispatch(setQuery(searchQuery));
      dispatch(setSearchInput(searchQuery));
    } else if (!searchQuery && query && location.pathname === '/') {
      dispatch(resetApp());
    }
  }, [searchQuery, query, dispatch, location.pathname])

  const hasMovies = useSelector<StoreType, boolean>(store => Boolean(store.app.movies.length))
  return (
    <>
      <div className={style.app}>
        <header className={style.header}>
          <NavLink to='/' className={style.link}><i className="fas fa-video"></i> Movie Searching</NavLink>
          <Search />
          {
            hasMovies && location.pathname === '/' && <SortSelector />
          }
        </header>
        <main className={style.main}>
          <Switch>
            <Route path='/' exact>
              <Main />
            </Route>
            <Route path='/404' exact>
              <NotFound />
            </Route>
            <Route path='/:id'>
              <Movie />
            </Route>
          </Switch>
        </main>
      </div>
    </>
  );
};

export default App;
