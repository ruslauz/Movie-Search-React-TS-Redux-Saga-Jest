import { put, call, takeLeading } from 'redux-saga/effects';

import { fetchMoreMoviesWorker, fetchMoreMoviesWatcher } from '../fetch-more-movies-saga';
import { RESULTS_PER_PAGE } from './../fetch-movies-saga';

import { GetMoviesType, MoviesResponseWithId, SuccessResponse } from '../../../types/';
import { getMovies } from './../../../api';
import {
  setCurrentPage,
  REQUEST_MORE_MOVIES,
  requestMoreMovies,
  setIsFetchingMoreMovies,
  addMoreMovies,
  setErrorFetchingMoreMovies } from '../../actions/app-actions';
import { successData } from './mock-data';

describe('Testing FetchMoreMoviesWatcher', () => {
  
  let generator: ReturnType<typeof fetchMoreMoviesWatcher>;
  let expectedValue;
  beforeAll(() => {
    generator = fetchMoreMoviesWatcher();
  });

  test('should watch REQUEST_MORE_MOVIES action with fetchMoreMoviesWorker and takeLeading effect', () => {
    expectedValue  = takeLeading(REQUEST_MORE_MOVIES, fetchMoreMoviesWorker);    
    expect(generator.next().value).toEqual(expectedValue);
  });

  test('to be done', () => {    
    expect(generator.next().done).toBeTruthy();    
  });
});

describe('Testing FetchMoreMoviesWorker',  () => {

  describe('Normal request & response flow', () => {
    let expectedValue;
    let data: SuccessResponse;
    let dataWithId: Array<MoviesResponseWithId>;
    let initialPageNumber = 1
    const query = 'guardians';
    const payloadValue: [string, number] = [query, initialPageNumber + 1]
    const generator: Generator = fetchMoreMoviesWorker(requestMoreMovies(payloadValue));
    
    test('1. should dispatch setIsFetchingMoreMovies with true' , () => {
      expectedValue = put(setIsFetchingMoreMovies(true));
      expect(generator.next().value).toEqual(expectedValue);
    });
    
    test('2. should dispatch setIsFetchingMoreMovies with true' , () => {
      expectedValue = call<GetMoviesType>(getMovies, `${payloadValue[0]}&page=${payloadValue[1]}`);
      expect(generator.next().value).toEqual(expectedValue);
    });
    
    test('3. On successful response must return an Array of movies with id props', async () => {
      data = successData;      
      dataWithId = generator.next(data).value;
      expect(data.Response).toBe('True');
      expect(data.Search).toBeDefined();
      expect(data.Search).toBeInstanceOf(Array);
      expect(data.Search.length).toBe(RESULTS_PER_PAGE);
      expect(data.Search[0]).not.toHaveProperty('id');
      expect(dataWithId[0]).toHaveProperty('id');  
    });

    test('4. should dispatch addMoreMovies with dataWithId', () => {
      expectedValue = put(addMoreMovies(dataWithId));
      expect(generator.next(dataWithId).value).toEqual(expectedValue);
    })

    test('5. should dispatch setCurrentPage with page === payloadValue[1]', () => {
      expectedValue = put(setCurrentPage(payloadValue[1]));
      expect(generator.next().value).toEqual(expectedValue);
    })

    test('6. should dispatch setIsFetchingMoreMovies with false', () => {
      expectedValue = put(setIsFetchingMoreMovies(false));
      expect(generator.next().value).toEqual(expectedValue);
    })

    test('7. should be done', () => {
      expect(generator.next().done).toBeTruthy();
    })
  });

  describe('Flow with error', () => {

    let expectedValue;
    let initialPageNumber = 1
    const query = 'guardians';
    const payloadValue: [string, number] = [query, initialPageNumber + 1]
    const generator: Generator = fetchMoreMoviesWorker(requestMoreMovies(payloadValue));
    
    describe('If we get rejected promise', () => {
      test('1. should dispatch setErrorFetchingMoreMovies with true', () => {
        const errorMessage = 'Some Error'
        const error = TypeError(errorMessage);
        generator.next();
        generator.next();
        expectedValue = put(setErrorFetchingMoreMovies(true));
        expect(generator.throw(error).value).toEqual(expectedValue);
      });

      test('2. should dispatch setIsFetchingMoreMovies with false', () => {
        expectedValue = put(setIsFetchingMoreMovies(false));
        expect(generator.next().value).toEqual(expectedValue);
      });

      test('3. should be done', () => {
        expect(generator.next().done).toBeTruthy();
      });
    });
  });
});
