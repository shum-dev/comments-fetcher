/* eslint-disable react/no-array-index-key */
import React from 'react';

import { useSelector } from 'react-redux';
import Card from './Card';
import Error from './Error';

import { container, list } from '../../styles/Main.module.scss';

const Main = ({ resultList }) => {
  const { error } = useSelector((state) => state.errors);

  if (error) {
    return (
      <main className={container}>
        { error && <Error message={error} />}
      </main>
    );
  }

  return (
    <main className={container}>
      <ul className={list}>
        { resultList.map((item, i) => (
          <Card key={i} data={item} />
        ))}
      </ul>
    </main>
  );
};

export default Main;
