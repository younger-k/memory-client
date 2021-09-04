import React from 'react';

import {Switch, Route} from "react-router-dom";
import {Login} from "../components/Login/Login";
import {Register} from "../components/Register/Register";
import {Main} from "../components/Main/Main";
import {TabNav} from "../components/TabNav/TabNav";
import {Rank} from "../components/Rank/Rank";
import {Room1} from "../components/Room/Room1";
import {Room6} from "../components/Room6/Room6";
import {observer} from "mobx-react-lite";
import {useDataStore} from "../store/StoreProvider";
import {Toast} from "../components/common/Toast/Toast";

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
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/Room1',
      component: Room1
    },
    {
      path: '/room6',
      component: Room6
    }
  ]

  // @ts-ignore
  const GlobalToast = observer(() => {
    const { toastStore } = useDataStore();
    return (
      toastStore.isShow && (
        <Toast
          status={toastStore.status}
          message={toastStore.message}
          time={toastStore.time}
          closeCallback={() => toastStore.hideToast()}
        />
      )
    );
  });

  return (
    <React.Fragment>
      <TabNav />
      <Switch>
        {routes.map((route) => {
          let renderRoute = (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
            />
          )

          if (route.path === '/') {
            renderRoute = (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact
              />
            )
          }
          return renderRoute;
        })}
      </Switch>
      <GlobalToast />
    </React.Fragment>
  )
}