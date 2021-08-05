import React from 'react';

import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import {Login} from "../components/Login/Login";
import {Register} from "../components/Register/Register";
import {Main} from "../components/Main/Main";

export default (): JSX.Element => {
  const routes = [
    {
      path: '/',
      component: Main
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
  ]

  return (
    <Switch>
      {routes.map((route) => {
        let renderRoute = (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
          />
        )
        return renderRoute;
      })}
    </Switch>
  )
}