import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import SettingsPage from './pages/SettingsPage';
import RankingPage from './pages/RankingPage';
import FeedbackPage from './pages/FeedbackPage';
import './App.css';
// import logo from './trivia.png';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/game" component={GamePage} />
          <Route path="/settings" component={SettingsPage} />
          <Route path="/ranking" component={RankingPage} />
          <Route path="/feedback" component={FeedbackPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
