
import React, { Component } from 'react';
import Header from '../components/layout/Header'
import "./Clients.css"
import logo from "../logo2.png"
import Avatar from '@material-ui/core/Avatar';
import profile from "../pp.jpg"
import { IconButton } from '@material-ui/core';
import { Home, People, BarChart, Delete } from '@material-ui/icons'
import Panel from "../components/layout/Panel"
import Card from "../components/layout/Card"

class Clients extends Component {
  render() {
    return (
      <Header>
        <img className ="logo" src={logo} alt="Logo"></img>
        <div className="avatar"><Avatar src={profile}></Avatar></div>
        <Panel>
          <ol className="icon-list">
            <IconButton onClick={() => window.location.href = "/main"}><Home></Home>Home</IconButton>
            <IconButton onClick={() => window.location.href = "/clients"}><People></People>Clientes</IconButton>
            <IconButton onClick={() => window.location.href = "/products"}><Delete></Delete>Produtos</IconButton>
            <IconButton onClick={() => window.location.href = "/stock"}><Delete></Delete>Estoque</IconButton>
            <IconButton onClick={() => window.location.href = "/data"}><BarChart></BarChart>Dados</IconButton>
          </ol>
        </Panel>
        <Card className="content">Clientes</Card>
      </Header>
      )
    }
  }

export default Clients;
