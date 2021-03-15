import { FailedResponse, SuccessResponse } from '../types';

const API_KEY = process.env.REACT_APP_API_KEY || 'fd8f696d';
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&`

export const getMovies = async (query: string) => {
  try {
    const response = await  fetch(`${BASE_URL}s=${query}`)
    const data: SuccessResponse | FailedResponse = await response.json();
    data.Response === 'True' 
      ? console.log('success', data)
      : console.log('failed', data)
    return data
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export const getMovie = async (id: string) => {
  try {
    const response = await  fetch(`${BASE_URL}i=${id}`)
    const data = await response.json();
    data.Response === 'True' 
      ? console.log('success', data)
      : console.log('failed', data);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}


