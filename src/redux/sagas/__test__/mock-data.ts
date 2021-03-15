import { SuccessResponse, FailedResponse, HistoryType, OneMovieResponse } from "../../../types";

export const successData: SuccessResponse = {
  Search: [
    {
      Title: 'Guardians of the Galaxy',
      Year: '2014',
      imdbID: 'tt2015381',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX300.jpg'
    },
    {
      Title: 'Guardians of the Galaxy Vol. 2',
      Year: '2017',
      imdbID: 'tt3896198',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg'
    },
    {
      Title: 'Rise of the Guardians',
      Year: '2012',
      imdbID: 'tt1446192',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMTkzMjgwMDg1M15BMl5BanBnXkFtZTcwMTgzNTI1OA@@._V1_SX300.jpg'
    },
    {
      Title: 'Rise of the Guardians',
      Year: '2012',
      imdbID: 'tt1446192',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMTkzMjgwMDg1M15BMl5BanBnXkFtZTcwMTgzNTI1OA@@._V1_SX300.jpg'
    },
    {
      Title: "Legend of the Guardians: The Owls of Ga'Hoole",
      Year: '2010',
      imdbID: 'tt1219342',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMjE0NjA5OTA4N15BMl5BanBnXkFtZTcwODA3MTA3Mw@@._V1_SX300.jpg'
    },
    {
      Title: 'Guardians',
      Year: '2017',
      imdbID: 'tt4600952',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BYzgxY2NkZGYtOGI4NC00MTc4LTlkY2QtNmRjOTU1NDI0NGQ1XkEyXkFqcGdeQXVyNTc4MjczMTM@._V1_SX300.jpg'
    },
    {
      Title: 'Naruto the Movie 3: Guardians of the Crescent Moon Kingdom',
      Year: '2006',
      imdbID: 'tt1071815',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BNjk2ZWIzOTYtMGUxMC00MzdhLWI3ZGMtZGJhNzZmMDYxYjJlXkEyXkFqcGdeQXVyMjQ3NTQ4MjQ@._V1_SX300.jpg'
    },
    {
      Title: '7 Guardians of the Tomb',
      Year: '2018',
      imdbID: 'tt4915672',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BZjMzZDI4YmEtZDIwNS00YWQ5LTkzN2UtMzJiMTliNjZiMzRjXkEyXkFqcGdeQXVyMzQwMTY2Nzk@._V1_SX300.jpg'
    },
    {
      Title: 'Guardians of the Galaxy',
      Year: '2015–2019',
      imdbID: 'tt4176370',
      Type: 'series',
      Poster: 'https://m.media-amazon.com/images/M/MV5BNDM4NDQxMDU2MV5BMl5BanBnXkFtZTgwMDY2MDQ5NjE@._V1_SX300.jpg'
    },
    {
      Title: 'Halo 5: Guardians',
      Year: '2015',
      imdbID: 'tt3467114',
      Type: 'game',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMjAzMjIzMjY4OF5BMl5BanBnXkFtZTgwNDM5NzQxNzE@._V1_SX300.jpg'
    }
  ],
  totalResults: '188',
  Response: 'True'
};

export const failedData: FailedResponse = {
  Response: 'False',
  Error: 'Movie not found!'
}

export const mockedHistory: HistoryType = {
  length: 1,
  action: 'PUSH',
  location: {pathname:'', search:'',state: null, hash: ''},
  push(){}, replace(){}, go(){}, goBack(){}, goForward(){},
  block(){return () => {}}, listen(){return () => {}},
  createHref(){return ''}
};

export const oneMovieMockedData: OneMovieResponse ={
  Actors: "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
  Awards: "Nominated for 1 Oscar. Another 15 wins & 57 nominations.",
  BoxOffice: "$389,813,101",
  Country: "USA",
  DVD: "10 Jul 2017",
  Director: "James Gunn",
  Genre: "Action, Adventure, Comedy, Sci-Fi",
  Language: "English",
  Metascore: "67",
  Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
  Poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
  Production: "Marvel Studios, Walt Disney Pictures",
  Rated: "PG-13",
  Ratings: [
    {Source: "Internet Movie Database", Value: "7.6/10"},
    {Source: "Rotten Tomatoes", Value: "85%"},
    {Source: "Metacritic", Value: "67/100"},
  ],
  Released: "05 May 2017",
  Response: "True",
  Runtime: "136 min",
  Title: "Guardians of the Galaxy Vol. 2",
  Type: "movie",
  Website: "N/A",
  Writer: "James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)",
  Year: "2017",
  imdbID: "tt3896198",
  imdbRating: "7.6",
  imdbVotes: "573,212",
}

export const  oneMovieFailedData = {
  Error: "Incorrect IMDb ID.",
  Response: "False",
}