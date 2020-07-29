import React, { Component } from 'react';
import Card from '../components/layout/Card';
import Input from '../components/form/Input'
import "./Login.css"

class Login extends Component {

  render() {
    return (       
      <div className="Login">
        <Card height='350px'>
          <h1><Input></Input></h1>
        </Card>
      </div>
    )
  }

}

export default Login;