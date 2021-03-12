import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setSort } from '../../redux/actions';

import { NAME_ASC, NAME_DESC, YEAR_ASC, YEAR_DESC, DEFAULT } from '../../utils/sort';

import style from './style.module.css';


export const SortSelector = () =>
{
  const dispatch = useDispatch();
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    dispatch(setSort(e.target.value));
  };
  
  return (
    <>
      <label htmlFor="" className={style.label}>
        <span className={style.labelText}>Sort By :</span>
        <select className={style.select} placeholder='Sort By' onChange={onChange}>
          <option value={DEFAULT}></option>
          <option value={YEAR_ASC}>Year Asc</option>
          <option value={YEAR_DESC}>Year Desc</option>
          <option value={NAME_ASC}>Name Asc</option>
          <option value={NAME_DESC}>Name Desc</option>
        </select>
      </label>
    </>
  )
};
