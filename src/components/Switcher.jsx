import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './Homepage';
import NotFound from './NotFound';

const Switcher = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route component={NotFound} />
  </Switch>
);

export default Switcher;
