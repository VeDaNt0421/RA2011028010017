// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TrainList from './components/TrainList';
import TrainDetails from './components/TrainDetails';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TrainList} />
        <Route path="/train/:trainId" component={TrainDetails} />
      </Switch>
    </Router>
  );
};

export default App;
