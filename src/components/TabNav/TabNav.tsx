import React, {useState} from 'react';

import {useHistory} from 'react-router-dom';
import { Paper, Tab, Tabs } from "@material-ui/core";

export const TabNav = () => {
  const history = useHistory();
  const [value, setValue] = useState('/');

  const routes = [
    {label: 'Main', path: '/'},
    {label: 'Login', path: '/login'},
    {label: 'Register', path: '/register'},
    {label: 'Board', path: '/board'},
    {label: 'Rank', path: '/rank'},
    {label: 'Room1', path: '/Room1'},
  ]

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
    history.push(newValue);
  };

  return (
    <Paper>
      <Tabs
        value={value}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
      >
        {routes.map((route) => {
          return (
            <Tab key={route.path} label={route.label} value={route.path} />
          )
        })}
      </Tabs>
    </Paper>
  )
}