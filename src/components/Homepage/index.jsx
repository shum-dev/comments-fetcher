import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchComments, setCommentsFilteredList } from '../../redux/actions/comments';
import { removeError } from '../../redux/actions/errors';

import Header from '../Header';
import Main from './Main';
import Loader from '../Loader';


const Homepage = () => {
  const dispatch = useDispatch();

  const { cache, filteredList, filter } = useSelector((state) => state.comments);
  const [resultList, setResultList] = useState(filteredList);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const result = cache.filter((item) => item.email.includes(filter));
    dispatch(setCommentsFilteredList(result));
    setResultList(result);
  }, [cache, dispatch, setResultList, filter]);

  useEffect(() => {
    dispatch(fetchComments())
      .then((res) => {
        dispatch(removeError());
        const result = res.filter((item) => item.email.includes(filter));
        setResultList(result);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
    // eslint-disable-next-line
  }, []);

  const search = (term) => {
    const filtered = filteredList.filter((item) => item.name.includes(term));
    setResultList(filtered);
  };

  return (
    <>
      <Header handleSearch={search} />
      { isLoading ? (
        <Loader />
      ) : (
        <Main
          isLoading={isLoading}
          resultList={resultList}
        />
      )}
    </>
  );
};

export default Homepage;
