import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchComments, setCommentsFilteredList } from '../../redux/actions/comments';
import { removeError } from '../../redux/actions/errors';

import Header from '../Header';
import Main from './Main';
import Loader from '../Loader';


const Homepage = ({ history }) => {
  const dispatch = useDispatch();

  const { cache, filteredList } = useSelector((state) => state.comments);
  const [resultList, setResultList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    history.push('?filter=.org');
  }, [history]);

  useEffect(() => {
    const unbindHistory = history.listen((location) => {
      const currentFilter = location.search.split('=')[1];
      const result = cache.filter((item) => item.email.includes(currentFilter));
      dispatch(setCommentsFilteredList(result));
      setResultList(result);
    });

    return () => {
      unbindHistory();
    };
  }, [history, cache, dispatch, setResultList]);

  useEffect(() => {
    dispatch(fetchComments())
      .then((res) => {
        dispatch(removeError());
        const result = res.filter((item) => item.email.includes('.org'));
        dispatch(setCommentsFilteredList(result));
        setResultList(result);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [dispatch]);

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
