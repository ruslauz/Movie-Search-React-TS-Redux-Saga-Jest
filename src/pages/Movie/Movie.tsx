import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';

import { HomeButton } from '../../components/HomeButton';

import { requestMovie, setRedirected } from '../../redux/actions/movie-actions';

import { OneMovieResponse, StoreType } from '../../types';

import style from './style.module.css';
import { NO_IMAGE_URL } from '../../components/Cards/Cards';

export const Movie: FC = () =>
{
  const dispatch = useDispatch();
  const movieData = useSelector<StoreType, Partial<OneMovieResponse>>(store => store.movie.movieData);
  const isRequesting = useSelector<StoreType, boolean>(store => store.movie.isRequesting);
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  useEffect(() =>
  {
    dispatch(requestMovie({ id, history }));
    return () => void dispatch(setRedirected(true));
  }, [id, history, dispatch])

  return (
    <>
      {
        isRequesting && <h2 className={style.title}>Data is Loading...<i className="fas fa-cog fa-spin" /></h2>
      }
      {
        !isRequesting && (
          <div className={style.content}>
            <h2 className={style.title}>
              {movieData.Title}
            </h2>
            <div className={style.information}>
              <div className={style.imageWrapper}>
                <img src={movieData.Poster === 'N/A' ? NO_IMAGE_URL : movieData.Poster} alt={movieData.Title} className={style.poster} />
              </div>
              <div className={style.description}>
                <div className={style.item}>
                  <span className={style.name}>Year: </span>
                  <span className={style.value}>{movieData.Year}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>Rated: </span>
                  <span className={style.value}>{movieData.Rated}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>Released: </span>
                  <span className={style.value}>{movieData.Released}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>Runtime: </span>
                  <span className={style.value}>{movieData.Runtime}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>Genre: </span>
                  <span className={style.value}>{movieData.Genre}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>Director: </span>
                  <span className={style.value}>{movieData.Director}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>Writer: </span>
                  <span className={style.value}>{movieData.Writer}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>Actors: </span>
                  <span className={style.value}>{movieData.Actors}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>Plot: </span>
                  <span className={style.value}>{movieData.Plot}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>Language: </span>
                  <span className={style.value}>{movieData.Language}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>Country: </span>
                  <span className={style.value}>{movieData.Country}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>Awards: </span>
                  <span className={style.value}>{movieData.Awards}</span>
                </div>
                {/* <div>Ratings: {movieData.Ratings}</div> */}
                <div className={style.item}>
                  <span className={style.name}>IMDb Rating: </span>
                  <span className={style.value}>{movieData.imdbRating}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>IMDb Votes: </span>
                  <span className={style.value}>{movieData.imdbVotes}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>Type: </span>
                  <span className={style.value}>{movieData.Type}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>DVD: </span>
                  <span className={style.value}>{movieData.DVD}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>Box Office: </span>
                  <span className={style.value}>{movieData.BoxOffice}</span>
                </div>
                <div className={style.item}>
                  <span className={style.name}>Production: </span>
                  <span className={style.value}>{movieData.Production}</span>
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
