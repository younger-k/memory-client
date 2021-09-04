import React from 'react';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Route from "./routes/Route";
import {StoreProvider} from "./store/StoreProvider";

const App = (): JSX.Element => {
  return (
    <StoreProvider>
      <Router>
        <Route />
      </Router>
    </StoreProvider>
  );
}

export default App;
