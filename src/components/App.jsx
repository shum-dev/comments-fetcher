import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Switcher from './Switcher';

import configureStore from '../redux';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switcher />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
