import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/layout/Card'
import Input from './components/form/Input'

export default (props) => (
  <div className="App">
    <Card teste='#fff' marginTop='120px'><h1>Área de Login</h1></Card>
    <Card height='350px'><h1><Input></Input></h1></Card>

  </div>
)
