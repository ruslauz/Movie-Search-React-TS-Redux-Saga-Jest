import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';

import { getMovie } from '../../api';
import { HomeButton } from '../../components/HomeButton';

import style from './style.module.css';

export const Movie: FC = () =>
{
  const dispatch = useDispatch();
  const [data, setData] = useState<Partial<DataType>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isRedirected, setRedirected] = useState(false);
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  useEffect(() =>
  {
    setIsLoading(true)
    getMovie(id)
      .then(data =>
      {
        if (data.Response === 'True') {
          setData(data);
        } else {
          history.replace('/404');
        }
      })
      .catch(e =>
      {
        history.replace('/404');
      })
      .finally(() =>
      {
        !isRedirected && setIsLoading(false)
      })
    return () => setRedirected(true);
  }, [id, history, dispatch, isRedirected])

  return (
    <>
      {
        isLoading && <h2 className={style.title}>Data is Loading...</h2>
      }
      {
        !isLoading && (
          <div className={style.content}>
            <h2 className={style.title}>
              {data.Title}
            </h2>
            <div className={style.information}>
              <div className={style.imageWrapper}>
                <img src={data.Poster === 'N/A' ? 'http://fpae.pt/backup/20181025/wp/wp-content/plugins/post-slider-carousel/images/no-image-available-grid.jpg' : data.Poster} alt={data.Title} className={style.poster} />
              </div>
              <div className={style.description}>
                <div className={style.item}>
                  <span className={style.name}>Year: </span>
                  <span className={style.value}>{data.Year}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>Rated: </span>
                  <span className={style.value}>{data.Rated}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>Released: </span>
                  <span className={style.value}>{data.Released}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>Runtime: </span>
                  <span className={style.value}>{data.Runtime}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>Genre: </span>
                  <span className={style.value}>{data.Genre}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>Director: </span>
                  <span className={style.value}>{data.Director}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>Writer: </span>
                  <span className={style.value}>{data.Writer}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>Actors: </span>
                  <span className={style.value}>{data.Actors}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>Plot: </span>
                  <span className={style.value}>{data.Plot}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>Language: </span>
                  <span className={style.value}>{data.Language}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>Country: </span>
                  <span className={style.value}>{data.Country}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>Awards: </span>
                  <span className={style.value}>{data.Awards}</span>
                </div>
                {/* <div>Ratings: {data.Ratings}</div> */}
                <div className={style.item}>
                  <span className={style.name}>IMDb Rating: </span>
                  <span className={style.value}>{data.imdbRating}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>IMDb Votes: </span>
                  <span className={style.value}>{data.imdbVotes}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>Type: </span>
                  <span className={style.value}>{data.Type}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>DVD: </span>
                  <span className={style.value}>{data.DVD}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>Box Office: </span>
                  <span className={style.value}>{data.BoxOffice}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>Production: </span>
                  <span className={style.value}>{data.Production}</span>
                </div>
              </div>
            </div>
            <HomeButton />
          </div>
        )
      }
    </>
  )
};

const dataTemp = {
  "Title": "Legend of the Guardians: The Owls of Ga'Hoole",
  "Year": "2010",
  "Rated": "PG",
  "Released": "24 Sep 2010",
  "Runtime": "97 min",
  "Genre": "Animation, Action, Adventure, Family, Fantasy, Mystery, Thriller, War",
  "Director": "Zack Snyder",
  "Writer": "John Orloff (screenplay), Emil Stern (screenplay), Kathryn Lasky (novels)",
  "Actors": "Emily Barclay, Abbie Cornish, Essie Davis, Adrienne DeFaria",
  "Plot": "When a young owl is abducted by an evil Owl army, he must escape with new-found friends and seek the legendary Guardians to stop the menace.",
  "Language": "English",
  "Country": "USA, Australia",
  "Awards": "4 wins & 23 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjE0NjA5OTA4N15BMl5BanBnXkFtZTcwODA3MTA3Mw@@._V1_SX300.jpg",
  "Ratings": [{ "Source": "Internet Movie Database", "Value": "6.9/10" }, { "Source": "Rotten Tomatoes", "Value": "52%" }, { "Source": "Metacritic", "Value": "53/100" }],
  "Metascore": "53",
  "imdbRating": "6.9",
  "imdbVotes": "78,148",
  "imdbID": "tt1219342",
  "Type": "movie",
  "DVD": "24 Jul 2014",
  "BoxOffice": "$55,675,313",
  "Production": "Animal Logic, Village Roadshow Entertainment",
  "Website": "N/A",
  "Response": "True"
}

type DataType = typeof dataTemp