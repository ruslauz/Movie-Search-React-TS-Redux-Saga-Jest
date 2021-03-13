import { FC, MouseEventHandler } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { StoreType } from '../../types';

import style from './style.module.css';

export const HomeButton: FC = () =>
{
  const query = useSelector<StoreType, string>(store => store.app.query);
  const history = useHistory();
  const onHomeClick: MouseEventHandler = () =>
  {
    if (query) {
      history.goBack();
    } else {
      history.replace('/');
    }
  };

  return <button className={style.home} onClick={onHomeClick}>
    <i className="fas fa-home"/>
  </button>
};
