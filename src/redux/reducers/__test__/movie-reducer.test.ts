import { MovieStore, initialState, movieReducer } from "../movie-reducer";
import { resetMovie, saveMovieData, setIsRequesting } from "../../actions/movie-actions";
import { setIsFetchingMovies } from '../../actions/app-actions';
import { oneMovieMockedData } from "../../sagas/__test__/mock-data";
import { OneMovieResponse } from "../../../types";

describe('Testing app-reducer', () => {
  let state: MovieStore;
  let payload: string | number | boolean | any[] | undefined | OneMovieResponse;

  beforeEach(() => {
    state = initialState;
  });

  test('1. setIsRequesting should change isRequesting property', () => {
    payload = true;
    expect(state.isRequesting).toBeFalsy();
    expect(state.isRequesting).not.toEqual(payload);

    state = movieReducer(state, setIsRequesting(payload));
    expect(state.isRequesting).toEqual(payload);

    payload = false;
    expect(state.isRequesting).not.toEqual(payload);
    state = movieReducer(initialState, setIsRequesting(payload));
    expect(state.isRequesting).toEqual(payload);
  });

  test('2. saveMovieData should change movieData property', () => {
    payload = oneMovieMockedData;

    expect(state.movieData).toEqual({});
    expect(state.movieData).not.toEqual(payload);

    state = movieReducer(state, saveMovieData(payload));
    expect(state.movieData).toEqual(payload);
  });

  test('3. resetMovie should turn state to initialState', () => {
    movieReducer(state, setIsRequesting(true));
    state = movieReducer(state, saveMovieData(oneMovieMockedData));
    expect(state).not.toEqual(initialState);

    state = movieReducer(state, resetMovie());
    expect(state).toEqual(initialState);
  });

  test('4. not defined action should not change the state', () => {
    state = movieReducer(state, setIsFetchingMovies(true));
    expect(state).toEqual(initialState);
  });
});