import { YEAR_ASC, YEAR_DESC } from './../../../utils/sort';
import { addMoreMovies,
  resetApp,
  saveMovies,
  setCurrentPage,
  setErrorFetchingMoreMovies,
  setErrorFetchingMovies,
  setIsFetchingMoreMovies,
  setIsFetchingMovies,
  setNoResults,
  setQuery,
  setSearchInput,
  setSort,
  setTotalPages } from '../../actions';
import { appReducer, AppStore, initialState } from '../app-reducer';
import { successData } from '../../sagas/__test__/mock-data';
import { setIsRequesting } from '../../actions/movie-actions';


describe('Testing app-reducer', () => {
  let state: AppStore;
  let payload: string | number | boolean | any[] | undefined;

  beforeEach(() => {
    state = initialState;
  });

  test('1. setIsFetchingMovies should change isFetchingMovies property', () => {
    payload = true;
    expect(state.isFetchingMovies).toBeFalsy();
    expect(state.isFetchingMovies).not.toEqual(payload);

    state = appReducer(initialState, setIsFetchingMovies(payload));
    expect(state.isFetchingMovies).toEqual(payload);

    payload = false;
    expect(state.isFetchingMovies).not.toEqual(payload);
    state = appReducer(initialState, setIsFetchingMovies(payload));
    expect(state.isFetchingMovies).toEqual(payload);
  });

  test('2. setErrorFetchingMovies should change errorFetchingMovies property', () => {
    payload = true;
    expect(state.errorFetchingMovies).toBeFalsy();
    expect(state.errorFetchingMovies).not.toEqual(payload);

    state = appReducer(initialState, setErrorFetchingMovies(payload));
    expect(state.errorFetchingMovies).toEqual(payload);

    payload = false;
    expect(state.errorFetchingMovies).not.toEqual(payload);
    state = appReducer(initialState, setErrorFetchingMovies(payload));
    expect(state.errorFetchingMovies).toEqual(payload);
  });

  test('3. setIsFetchingMoreMovies should change isFetchingMoreMovies property', () => {
    payload = true;
    expect(state.isFetchingMoreMovies).toBeFalsy();
    expect(state.isFetchingMoreMovies).not.toEqual(payload);

    state = appReducer(initialState, setIsFetchingMoreMovies(payload));
    expect(state.isFetchingMoreMovies).toEqual(payload);

    payload = false;
    expect(state.isFetchingMoreMovies).not.toEqual(payload);
    state = appReducer(initialState, setIsFetchingMoreMovies(payload));
    expect(state.isFetchingMoreMovies).toEqual(payload);
  });

  test('4. setErrorFetchingMoreMovies should change errorFetchingMoreMovies property', () => {
    payload = true;
    expect(state.errorFetchingMoreMovies).toBeFalsy();
    expect(state.errorFetchingMoreMovies).not.toEqual(payload);

    state = appReducer(initialState, setErrorFetchingMoreMovies(payload));
    expect(state.errorFetchingMoreMovies).toEqual(payload);

    payload = false;
    expect(state.errorFetchingMoreMovies).toBeTruthy();
    expect(state.errorFetchingMoreMovies).not.toEqual(payload);
    state = appReducer(initialState, setIsFetchingMoreMovies(payload));
    expect(state.errorFetchingMoreMovies).toEqual(payload);
  });

  test('5. setNoResults should change noResults property', () => {
    payload = true;
    expect(state.noResults).toBeFalsy();
    expect(state.noResults).not.toEqual(payload);

    state = appReducer(initialState, setNoResults(payload));
    expect(state.noResults).toEqual(payload);

    payload = false;
    expect(state.noResults).toBeTruthy();
    expect(state.noResults).not.toEqual(payload);
    state = appReducer(initialState, setNoResults(payload));
    expect(state.noResults).toEqual(payload);
  });

  test('6. setQuery should change query property', () => {
    payload = 'text';
    expect(state.query).toBe('');
    expect(state.query).not.toEqual(payload);

    state = appReducer(initialState, setQuery(payload));
    expect(state.query).toEqual(payload);

    payload = 'another text';
    expect(state.query).not.toEqual(payload);
    state = appReducer(initialState, setQuery(payload));
    expect(state.query).toEqual(payload);
  });

  test('7. setSearchInput should change searchInput property', () => {
    payload = 'text';
    expect(state.searchInput).toBe('');
    expect(state.searchInput).not.toEqual(payload);

    state = appReducer(initialState, setSearchInput(payload));
    expect(state.searchInput).toEqual(payload);

    payload = 'another text';
    expect(state.searchInput).not.toEqual(payload);
    state = appReducer(initialState, setSearchInput(payload));
    expect(state.searchInput).toEqual(payload);
  });

  test('8. setSort should change sort property', () => {
    payload = YEAR_ASC;
    expect(state.sort).toBe('');
    expect(state.sort).not.toEqual(payload);

    state = appReducer(initialState, setSort(payload));
    expect(state.sort).toEqual(payload);

    payload = YEAR_DESC;
    expect(state.sort).not.toEqual(payload);
    state = appReducer(initialState, setSort(payload));
    expect(state.sort).toEqual(payload);
  });

  test('9. saveMovies should change movies property', () => {
    payload = successData.Search;
    expect(state.movies).toEqual([]);
    expect(state.movies).not.toEqual(payload);

    state = appReducer(initialState, saveMovies(payload));
    expect(state.movies).toEqual(payload);

    payload = [];
    expect(state.movies).not.toEqual(payload);
    state = appReducer(initialState, saveMovies(payload));
    expect(state.movies).toEqual(payload);
  });

  test('10. setCurrentPage should change currentPage property', () => {
    payload = 2;
    expect(state.currentPage).toEqual(1);
    expect(state.currentPage).not.toEqual(payload);

    state = appReducer(initialState, setCurrentPage(payload));
    expect(state.currentPage).toEqual(payload);

    payload = 3;
    expect(state.currentPage).not.toEqual(payload);
    state = appReducer(initialState, setCurrentPage(payload));
    expect(state.currentPage).toEqual(payload);
  });

  test('11. setTotalPages should change totalPages property', () => {
    payload = 1;
    expect(state.totalPages).toEqual(0);
    expect(state.totalPages).not.toEqual(payload);

    state = appReducer(initialState, setTotalPages(payload));
    expect(state.totalPages).toEqual(payload);

    payload = 2;
    expect(state.totalPages).not.toEqual(payload);
    state = appReducer(initialState, setTotalPages(payload));
    expect(state.totalPages).toEqual(payload);
  });

  test('12. addMoreMovies should change movies property', () => {
    const payload = successData.Search;
    expect(state.movies).toEqual([]);
    expect(state.movies).not.toEqual(payload);

    state = appReducer(initialState, addMoreMovies(payload));
    expect(state.movies).toEqual(payload);

    const payload2 = successData.Search;
    state = appReducer(state, addMoreMovies(payload2));
    expect(state.movies).toEqual(payload.concat(payload));
  });

  test('13. resetApp should turn state to initial state', () => {
    state = appReducer(state, setErrorFetchingMovies(true));
    state = appReducer(state, setIsFetchingMoreMovies(true));
    state = appReducer(state, setErrorFetchingMoreMovies(true));
    state = appReducer(state, setNoResults(true));
    state = appReducer(state, setQuery('payload'));
    state = appReducer(state, setSearchInput('payload'));
    state = appReducer(state, setSort(YEAR_ASC));
    state = appReducer(state, saveMovies(successData.Search));
    state = appReducer(state, setCurrentPage(3));
    state = appReducer(state, setTotalPages(10));

    expect(state).not.toEqual(initialState);

    state = appReducer(state, resetApp());
    expect(state).toEqual(initialState);
  });

  test('14. not defined action shouldn\'t change the state', () => {
    state = appReducer(state, setIsRequesting(true));
    expect(state).toEqual(initialState);
  });
})