import React, { Component } from 'react';
import Main from './pages/Main'
import Login from './pages/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/main" component={Main}/>
        </Switch>
      </Router>
    )
  }
  
}

export default App;

