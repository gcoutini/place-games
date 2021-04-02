import React, { Component } from 'react';
import Main from './pages/Main';
import Login from './pages/Login';
import Games from './pages/Games';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Clients from './pages/Clients';
import AddGame from './pages/AddGame';
import Rent from './pages/Rent';

class App extends Component {

  render() {
    return (
        <Router>
          <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/main" component={Main}/>
            <Route path="/clients" component={Clients}/>
            <Route path="/games/new" component={AddGame}/>
            <Route path="/games" component={Games}/>
            <Route path="/rent" component={Rent}/>
          </Switch>
        </Router>
    )
  }
  
}

export default App;

