import { ChangeEventHandler, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSort } from '../../redux/actions';
import { SortType, StoreType } from '../../types';

import { NAME_ASC, NAME_DESC, YEAR_ASC, YEAR_DESC, DEFAULT } from '../../utils/sort';

import style from './style.module.css';

export const SortSelector: FC = () =>
{
  const dispatch = useDispatch();
  const sort = useSelector<StoreType, SortType>(store => store.app.sort);
  const onChange: ChangeEventHandler<HTMLSelectElement> = e =>
  {
    dispatch(setSort(e.target.value));
  };

  return (
    <label className={style.label}>
      <span className={style.labelText}>Sort By :</span>
      <select className={style.select} placeholder='Sort By' onChange={onChange} value={sort}>
        <option value={DEFAULT}></option>
        <option value={YEAR_ASC}>Year Asc</option>
        <option value={YEAR_DESC}>Year Desc</option>
        <option value={NAME_ASC}>Name Asc</option>
        <option value={NAME_DESC}>Name Desc</option>
      </select>
    </label>
  )
};
