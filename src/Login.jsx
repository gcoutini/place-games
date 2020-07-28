import React, { Component } from 'react';
import Card from './components/layout/Card';
import Input from './components/form/Input'


class Login extends Component {
    render() {
        return (       
            <div className="Login">
            <Card teste='#fff' marginTop='120px'><h1>Área de Login</h1></Card>
            <Card height='350px'><h1><Input></Input></h1></Card>
             </div>
       )
   }
}

export default Login;