import { put, call, cancel, fork, take } from '@redux-saga/core/effects';

import { fetchOneMovieWatcher, fetchOneMovieWorker } from '../fetch-one-movie-saga';

import { requestMovie, REQUEST_MOVIE, RESET_MOVIE, saveMovieData, setIsRequesting } from '../../actions/movie-actions';

import { getMovie } from '../../../api';

import { GetMovieType, HistoryType } from '../../../types';

import { mockedHistory, oneMovieFailedData, oneMovieMockedData } from './mock-data';


describe('Testing FetchMoviesWatcher', () => {
  
  let generator: Generator;
  let expectedValue;
  let history: HistoryType = mockedHistory;
  let action: ReturnType<typeof requestMovie> = { 
    type: REQUEST_MOVIE,
    payload: {id: 'tt3896198', history} 
  };
  
  beforeAll(() => {
    generator = fetchOneMovieWatcher();
  });

  test('1. should take effect on REQUEST_MOVIE action', () => {
    expectedValue = take(REQUEST_MOVIE);
    expect(generator.next().value).toEqual(expectedValue);    
  });

  test('2. should fork fetchOneMovieWorker with requestMovie action', () => {
    expectedValue = fork(fetchOneMovieWorker, action);
    expect(generator.next(action).value).toEqual(expectedValue);
  });

  test('3. should take RESET_MOVIE action', () => {
    expectedValue = take(RESET_MOVIE);
    expect(generator.next().value).toEqual(expectedValue);
  });

  test('4. should take RESET_MOVIE action', () => {
    expectedValue = cancel();
    expect(generator.next().value).toEqual(expectedValue);   
  });

  test('5. should start from the very beginning', () => {
    expectedValue = take(REQUEST_MOVIE);
    expect(generator.next().value).toEqual(expectedValue);    
  });
});

describe('Testing FetchMoviesWorker', () => {
  
  describe('Normal request & response flow', () => {
    let generator: Generator;
    let expectedValue;
    let history: HistoryType = mockedHistory;
    history.replace = jest.fn();
    let  action: ReturnType<typeof requestMovie> = { 
      type: REQUEST_MOVIE,
      payload: {id: 'tt3896198', history} 
    };
    const mockedData = oneMovieMockedData;

    beforeAll(() => {
      generator = fetchOneMovieWorker(action);
    });

    test('1. should dispatch setIsRequesting with true', () => {
      expectedValue = put(setIsRequesting(true));
      expect(generator.next().value).toEqual(expectedValue);
    });

    test('2. should dispatch setIsRequesting with true', () => {
      expectedValue = call<GetMovieType>(getMovie, action.payload.id);
      expect(generator.next().value).toEqual(expectedValue);
    });
    
    test('3. should dispatch saveMovieData with data responded', () => {
      expectedValue = put(saveMovieData(mockedData));
      expect(generator.next(mockedData).value).toEqual(expectedValue);      
    });

    test('4. should dispatch setIsRequesting with false', () => {
      expectedValue = put(setIsRequesting(false));
      expect(generator.next().value).toEqual(expectedValue);      
    });

    test('5. should be done', () => {
      expect(generator.next().done).toBeTruthy();
    });
  });

  describe('Flow with errors', () => {
    describe('Response === "False"', () => {
      let generator: Generator;
      let history: HistoryType = mockedHistory;
      history.replace = jest.fn();
      let  action: ReturnType<typeof requestMovie> = { 
        type: REQUEST_MOVIE,
        payload: {id: 'tt3896198', history} 
      };
      const mockedData = oneMovieFailedData;

      beforeAll(() => {
        generator = fetchOneMovieWorker(action);
        generator.next();
        generator.next();
      });

      test('1. should trigger history replace method with "/404" argument', () => {
        expect(history.replace).toBeCalledTimes(0);
        generator.next(mockedData);
        expect(history.replace).toBeCalledTimes(1);
        expect(history.replace).toBeCalledWith('/404');
      });

      test('2. should be done', () => {
        expect(generator.next()).toBeTruthy();
      });
    });

    describe('Rejected request', () => {
      let generator: Generator;
      let history: HistoryType = mockedHistory;
      history.replace = jest.fn();
      let  action: ReturnType<typeof requestMovie> = { 
        type: REQUEST_MOVIE,
        payload: {id: 'tt3896198', history} 
      };

      beforeAll(() => {
        generator = fetchOneMovieWorker(action);
        generator.next();
        generator.next();
      });

      test('1. should trigger history replace method with "/404" argument', () => {
        const errorMessage = 'Some Error'
        const error = TypeError(errorMessage);
        expect(history.replace).toBeCalledTimes(0);
        generator.throw(error);
        expect(history.replace).toBeCalledTimes(1);
        expect(history.replace).toBeCalledWith('/404');
      });

      test('2. should be done', () => {
        expect(generator.next()).toBeTruthy();
      })
    });
  });
});
