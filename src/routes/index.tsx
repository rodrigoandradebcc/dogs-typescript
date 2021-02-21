import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import LoginCreate from '../pages/LoginCreate';
import LoginPasswordLost from '../pages/LoginPasswordLost';
import LoginPasswordReset from '../pages/LoginPasswordReset';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/login/criar" component={LoginCreate} />
    <Route path="/login/perdeu" component={LoginPasswordLost} />
    <Route path="/login/resetar" component={LoginPasswordReset} />
  </Switch>
);

export default Routes;
