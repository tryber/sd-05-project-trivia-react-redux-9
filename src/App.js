import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import SettingsPage from './pages/SettingsPage';

// import logo from './trivia.png';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/game" component={GamePage} />
          <Route path="/settings" component={SettingsPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
