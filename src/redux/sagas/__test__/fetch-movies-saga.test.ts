import { call, takeLatest, put } from '@redux-saga/core/effects';

import { fetchMoviesWorker, fetchMoviesWatcher } from '../fetch-movies-saga';
import { RESULTS_PER_PAGE } from './../fetch-movies-saga';

import { getMovies } from './../../../api/index';

import { GetMoviesType, MoviesResponseWithId, SuccessResponse } from '../../../types/';

import { DEFAULT } from './../../../utils/sort';

import {
  sendRequest,
  SEND_REQUEST,
  setNoResults,
  setIsFetchingMovies,
  setTotalPages,
  setCurrentPage,
  setSort,
  saveMovies,
  setErrorFetchingMovies } from '../../actions/app-actions';

import { failedData, successData } from './mock-data';

describe('Testing FetchMoviesWatcher', () => {
  
  let generator: ReturnType<typeof fetchMoviesWatcher>;
  let expectedValue;
  beforeEach(() => {
    generator = fetchMoviesWatcher();
  });

  test('watches SEND_REQUEST action with fetchMoviesWorker', () => {
    expectedValue  = takeLatest(SEND_REQUEST, fetchMoviesWorker);
    expect(generator.next().value).toEqual(expectedValue);
    expect(generator.next().done).toBeTruthy();    
  });
});

describe('Testing FetchMoviesWorker',  () => {

  describe('Normal request & response flow', () => {
    let expectedValue;
    let data: SuccessResponse;
    let dataWithId: Array<MoviesResponseWithId>;
    const query = 'guardians';
    const generator: Generator = fetchMoviesWorker(sendRequest(query));

    test('1. Must dispatch setIsFetchingMovies action with true', () => {
      expectedValue  = put(setIsFetchingMovies(true));
      expect(generator.next().value).toEqual(expectedValue);    
    });

    test('2. Must dispatch setNoResults with false', () => {
      expectedValue  = put(setNoResults(false));
      expect(generator.next().value).toEqual(expectedValue);    
    });

    test('3. Must dispatch setTotalPages with 0', () => {
      expectedValue  = put(setTotalPages(0));
      expect(generator.next().value).toEqual(expectedValue);    
    });

    test('4. Must dispatch setCurrentPage with 1', () => {
      expectedValue  = put(setCurrentPage(1));
      expect(generator.next().value).toEqual(expectedValue);    
    });

    test('5. Must dispatch setSort with DEFAULT/""', async () => {
      expectedValue  = put(setSort(DEFAULT));
      expect(generator.next().value).toEqual(expectedValue);    
    });

    test('6. Must call getMovies with query', () => {
      expectedValue  = call<GetMoviesType>(getMovies, query);
      expect(generator.next().value).toEqual(expectedValue); 
    });

    test('7. On successful response must return an Array of movies with id props', async () => {
      data = successData;      
      dataWithId = generator.next(data).value;
      expect(data.Response).toBe('True');
      expect(data.Search).toBeDefined();
      expect(data.Search).toBeInstanceOf(Array);
      expect(data.Search.length).toBe(RESULTS_PER_PAGE);
      expect(data.Search[0]).not.toHaveProperty('id');
      expect(dataWithId[0]).toHaveProperty('id');  
    });

    test('8. Must dispatch saveMovies with dataWithId' , () => {
      expectedValue = put(saveMovies(dataWithId));
      expect(generator.next(dataWithId).value).toEqual(expectedValue);
    });

    test('9. Must dispatch setTotalPages with number of Math.ceil([response_data].totalResults/RESULTS_PER_PAGE)' , () => {
      expectedValue = put(setTotalPages(Math.ceil(Number(data.totalResults)/RESULTS_PER_PAGE)));
      expect(generator.next().value).toEqual(expectedValue);
    });

    test('10. Must dispatch setIsFetchingMovies with false' , () => {
      expectedValue = put(setIsFetchingMovies(false));
      expect(generator.next().value).toEqual(expectedValue);
    });

    test('11. Must be done' , () => {
      expect(generator.next().done).toBeTruthy();
    });
  });

  describe('Flow with errors', () => {

    let expectedValue;
    let data;
    let generator: Generator;
    const query = 'guardians';

    describe('If Response property of received response has a value of "False"', () => {
      beforeAll(() => {
        generator = fetchMoviesWorker(sendRequest(query));
        generator.next();
        generator.next();
        generator.next();
        generator.next();
        generator.next();
        generator.next();
      })

      test('1. should dispatch saveMovies with empty Array', () => {
        data = failedData;
        expectedValue = put(saveMovies([]));
        expect(generator.next(data).value).toEqual(expectedValue);
      });

      test('2. should dispatch setNoResults with true', () => {
        expectedValue = put(setNoResults(true));
        expect(generator.next().value).toEqual(expectedValue);
      });

      test('3. should dispatch setIsFetchingMovies with false', () => {
        expectedValue = put(setIsFetchingMovies(false));
        expect(generator.next().value).toEqual(expectedValue);
      });

      test('4. should be done', () => {
        expect(generator.next().done).toBeTruthy();
      });
    });

    describe('If we get rejected promise', () => {
      
      beforeAll(() => {
        generator = fetchMoviesWorker(sendRequest(query));
        generator.next();
        generator.next();
        generator.next();
        generator.next();
        generator.next();
        generator.next();
      });

      test('1. should dispatch setErrorFetchingMovies with empty true', () => {
        const errorMessage = 'Some Error';
        data = TypeError(errorMessage);
        expectedValue = put(setErrorFetchingMovies(true));
        expect(generator.throw(data).value).toEqual(expectedValue);
      });

      test('2. should dispatch setErrorFetchingMovies with empty true', () => {
        expectedValue = put(setIsFetchingMovies(false));
        expect(generator.next().value).toEqual(expectedValue);
      });
    });
  });
});
