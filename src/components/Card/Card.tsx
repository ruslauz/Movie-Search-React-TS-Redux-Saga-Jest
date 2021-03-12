import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';

type CardProps = {
  id: string
  title: string
  poster: string
  year: string
  type: string
}

export const Card: FC<CardProps> = ({ id, title, poster, year, type }) =>
{
  return (
    <Link to={id} title={title}>
      <div className={style.card}>
        <div className={style.imageContainer}>
          <img src={poster} alt={title} className={style.poster} />
        </div>
        <div className={style.text}>
          <div className={style.layer}></div>
          <p className={style.title}>{title}</p>
          <div className={style.additional}>
            <span className={style.year}>Year {year}</span>
            <span className={style.rating}>{type}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card
