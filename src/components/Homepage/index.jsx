import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchComments, setCommentsFilter } from '../../redux/actions/comments';
import { removeError } from '../../redux/actions/errors';

import Header from '../Header';
import Main from './Main';
import Loader from '../Loader';


const Homepage = ({ location }) => {
  const dispatch = useDispatch();

  const { filteredList } = useSelector((state) => state.comments);
  const [resultList, setResultList] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(setCommentsFilter(location.search.split('=')[1]));
    dispatch(fetchComments())
      .then(() => {
        dispatch(removeError());
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setResultList(filteredList);
  }, [filteredList]);


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
