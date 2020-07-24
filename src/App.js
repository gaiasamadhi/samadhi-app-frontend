import React from 'react';
import HomePage from './pages/HomePage';
import LevelSelection from './pages/LevelSelection';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'><HomePage/></Route>
        <Route path='/level-selection'><LevelSelection/></Route>
      </Switch>
    </Router>
  );
}

export default App;
