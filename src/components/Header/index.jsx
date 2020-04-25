/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import SearchBar from './SearchBar';

import { container } from '../../styles/Header.module.scss';

const Header = ({ handleSearch }) => (
  <header className={container}>
    <h1>
      FILTERED LIST
    </h1>
    <SearchBar handleSearch={handleSearch} />
  </header>
);

export default Header;
