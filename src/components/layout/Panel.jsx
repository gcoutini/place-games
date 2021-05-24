import './Panel.css'
import React, { Component } from 'react'
import { IconButton } from '@material-ui/core';
import { Home, People } from '@material-ui/icons'
import CasinoIcon from '@material-ui/icons/Casino';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import logo from "../../logo2.png";
import { Link } from "react-router-dom";
import FastfoodIcon from '@material-ui/icons/Fastfood';
class Panel extends Component {
 
  menu = () => [
    { to: "/main", icon: <Home></Home>, label: "Home" }
  ]

  render() {
    return(
      <div className="Panel">
        <div className="logo">
          <img src={logo} alt="Logo" width="125px" height="auto"></img>
        </div>
        <nav className="links">
          {/* {
            this.menu().forEach(m => (
              <Link to={m.to} style={{ textDecoration: 'none' }}>
                <IconButton>
                  {m.icon} Teste
                </IconButton>
              </Link>
            ))
          } */}
          <Link to="/main" style={{ textDecoration: 'none' }}>
            <IconButton>
              <Home></Home>Home
            </IconButton>
          </Link>
          <Link to="/clients" style={{ textDecoration: 'none' }}>
            <IconButton>
              <People></People>Clientes
            </IconButton>
          </Link>
          <Link to="/games" style={{ textDecoration: 'none' }}>
            <IconButton>
              <CasinoIcon></CasinoIcon>Jogos
            </IconButton>
          </Link>
          <Link to="/rent" style={{ textDecoration: 'none' }}>
            <IconButton>
              <AddShoppingCartIcon></AddShoppingCartIcon>Aluguel
            </IconButton>
          </Link>
          <Link to="/tables" style={{ textDecoration: 'none' }}>
            <IconButton>
              <FastfoodIcon></FastfoodIcon>Comanda
            </IconButton>
          </Link>
        </nav>    
      </div>
    )
  }
}

export default Panel;