import React from 'react';
import Main from './pages/Main';
import Login from './pages/Login';
import Games from './pages/Games';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Clients from './pages/Clients';
import AddGame from './pages/AddGame';
import Rent from './pages/Rent';
import { isAuthenticated } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route  
    {...rest} 
    render={props => 
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);


const Routes = () => (
  <BrowserRouter>
  <Switch>
    <Route path="/" exact component={Login}/>
    <Route path="/main" component={Main}/>
    <PrivateRoute path="/clients" component={Clients}/>
    <Route path="/games/new" component={AddGame}/>
    <Route path="/games" component={Games}/>
    <Route path="/rent" component={Rent}/>
  </Switch>
</BrowserRouter>
);

export default Routes;