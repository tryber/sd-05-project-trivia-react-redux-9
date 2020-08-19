import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import SettingPage from './pages/SettingPage';

// import logo from './trivia.png';
// import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/game' component={GamePage} />
        <Route path='/settings' component={SettingPage} />
      </Switch>
      </BrowserRouter>
    )
    }
  }
export default App;


// export default function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           SUA VEZ
//         </p>
//       </header>
//     </div>
//   );
// }
