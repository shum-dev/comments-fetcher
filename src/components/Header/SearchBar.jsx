/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCommentsFilter } from '../../redux/actions/comments';

import { container, active } from '../../styles/SearchBar.module.scss';


const SearchBar = ({ handleSearch }) => {
  const buttons = ['.org', '.com', '.biz'];

  const dispatch = useDispatch();

  const { filter } = useSelector((state) => state.comments);
  const [name, setName] = useState('');
  const history = useHistory();

  const handleClick = (item) => {
    dispatch(setCommentsFilter(item));
    history.push(`?filter=${item}`);
    setName('');
  };

  const handleChange = (e) => {
    const { value } = e.currentTarget;
    setName(value);
    handleSearch(value.toLowerCase());
  };

  return (
    <section className={container}>
      <div>
        <label>
          Search
          <input type="text" placeholder="Enter Name" value={name} onChange={handleChange} />
        </label>
      </div>

      <div>
        <span>Show only</span>
        <span>
          { buttons.map((item, i) => {
            const isActive = filter === item;
            return <button key={i} type="button" className={isActive ? active : ''} onClick={handleClick.bind(this, item)}>{item}</button>;
          })}
        </span>
      </div>
    </section>
  );
};

export default SearchBar;
