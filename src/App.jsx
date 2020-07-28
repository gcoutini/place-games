import React, { Component } from 'react';
import './App.css';
// import Card from './components/layout/Card';
// import Input from './components/form/Input'
import Main from './Main'
import Login from './Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class App extends Component {

    render() {
      return (
  <Router>
   <div className="App">
     <Switch>
     <Route path="/" exact component={Login}/>
     <Route path="/main" component={Main}/>
     </Switch>
   </div>
  </Router>
  )
      }
}

export default App;

