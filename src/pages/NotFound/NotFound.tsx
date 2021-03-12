import { FC } from 'react';
import { HomeButton } from '../../components/HomeButton';

import style from './style.module.css';

export const NotFound: FC = () =>
{
  return (
    <>
      <h1 className={style.title}>Something went wrong. Page&nbsp;not&nbsp;found!</h1>
      <div className={style.imageWrapper}>
        <img src="https://ctoetotakoe.ru/wp-content/uploads/2016/05/404-not-found.png"
        alt="404" className={style.image} />
        <HomeButton />
      </div>
    </>
  )
};
