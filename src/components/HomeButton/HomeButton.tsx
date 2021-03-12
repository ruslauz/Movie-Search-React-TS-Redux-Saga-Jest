import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Store } from '../../redux/reducers';
import style from './style.module.css';

export const HomeButton: FC = () =>
{
  const query = useSelector<Store, string>(store => store.query);
  const history = useHistory();
  const onHomeClick = () =>
  {
    if (query) {
      history.goBack()
    } else {
      history.replace('/')
    }
  };

  return <button className={style.home} onClick={onHomeClick}><i className="fas fa-home"></i></button>
};
