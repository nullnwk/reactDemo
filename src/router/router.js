import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import List from '../views/List';


const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/list" component={List} />
    </Switch>
  </HashRouter>
);


export default BasicRoute;