import './Header.css'
import React from 'react'

export default props =>
  <div className={props.className || "Header"}>
    <div className="header-content">
      {props.children}       
    </div>
  </div>