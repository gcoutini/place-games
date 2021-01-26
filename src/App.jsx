import React, { Component } from 'react';
import Main from './pages/Main'
import Login from './pages/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Clients from './pages/Clients';
import ClientTable from './pages/ClientTable'
import Layout from './components/layout/Layout'

class App extends Component {

  render() {
    return (
      <Layout>
        <Router>
          <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/main" component={Main}/>
            <Route path="/clients/new" component={Clients}/>
            <Route path="/clients" component={ClientTable}/>
          </Switch>
        </Router>
      </Layout>
    )
  }
  
}

export default App;

