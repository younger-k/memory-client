import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Route from "./routes/Route";

const App = (): JSX.Element => {
  return (
    <Router>
      <Route />
    </Router>
  );
}

export default App;
