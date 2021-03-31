import './Panel.css'
import React, { Component } from 'react'
import { IconButton } from '@material-ui/core';
import { Home, People, BarChart } from '@material-ui/icons'
import CasinoIcon from '@material-ui/icons/Casino';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import logo from "../../logo2.png"
class Panel extends Component {
 
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return(
      <div className="Panel">
        <div className="logo">
          <img src={logo} alt="Logo" width="125px" height="auto"></img>
        </div>
        <nav className="links">
          <IconButton onClick={() => window.location.href = "/main"}><Home></Home>Home</IconButton>
          <IconButton onClick={() => window.location.href = "/clients"}><People></People>Clientes</IconButton>
          <IconButton onClick={() => window.location.href = "/games"}><CasinoIcon></CasinoIcon>Jogos</IconButton>
          <IconButton onClick={() => window.location.href = "/rent"}><AddShoppingCartIcon></AddShoppingCartIcon>Aluguel</IconButton>
          <IconButton onClick={() => window.location.href = "/data"}><BarChart></BarChart>Dados</IconButton>
        </nav>    
      </div>
    )
  }
}

export default Panel;