import React, { Component } from 'react';
import Main from './pages/Main';
import Login from './pages/Login';
import Games from './pages/Games';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Clients from './pages/Clients';
import ClientTable from './pages/ClientTable';
import AddGame from './pages/AddGame';

class App extends Component {

  render() {
    return (
        <Router>
          <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/main" component={Main}/>
            <Route path="/clients/new" component={Clients}/>
            <Route path="/clients" component={ClientTable}/>
            <Route path="/games/new" component={AddGame}/>
            <Route path="/games" component={Games}/>
          </Switch>
        </Router>
    )
  }
  
}

export default App;

