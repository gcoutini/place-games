import './Header.css'
import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import profile from "../../pp.jpg"

class Header extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="Header">
        <div className="avatar"><Avatar src={profile}></Avatar></div>       
      </div>
    )
  }
}

export default Header;