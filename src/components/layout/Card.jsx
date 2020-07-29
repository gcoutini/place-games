import './Card.css'
import React from 'react'

export default props =>
  <div className={props.className || "Card"}>
    <div className="Content">
      {props.children}       
    </div>
  </div>