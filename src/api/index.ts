import { ApiType } from '../types';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`

export const getMovies: ApiType = async (query) => {
  try {
    const response = await  fetch(`${BASE_URL}s=${query}`)
    const data = await response.json();
    data.Response === 'True' 
      ? console.log('success', data)
      : console.log('failed', data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export const getMovie: ApiType = async (id) => {
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


