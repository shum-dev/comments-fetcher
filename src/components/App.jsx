import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { fetchComments } from '../redux/actions/comments';
import { removeError } from '../redux/actions/errors';

import Header from './Header';
import Main from './Main';
import Loader from './Loader';


function App() {
  const { comments } = useSelector((state) => state);

  const dispatch = useDispatch();
  const history = useHistory();

  const [filteredList, setFilteredList] = useState([]);
  const [resultList, setResultList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    history.push('?filter=.org');
    dispatch(fetchComments())
      .then((res) => {
        dispatch(removeError());

        const filtered = res.filter((item) => item.email.includes('.org'));
        setFilteredList(filtered);
        setResultList(filtered);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [dispatch]);

  useEffect(() => {
    const unbindHistory = history.listen((location) => {
      const currentFilter = location.search.split('=')[1];
      const filtered = comments.filter((item) => item.email.includes(currentFilter));
      setFilteredList(filtered);
      setResultList(filtered);
    });

    return () => {
      unbindHistory();
    };
  }, [history, comments]);

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
}

export default App;
