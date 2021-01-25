import './Panel.css'
import React from 'react'

export default props =>
  <div className={props.className || "Panel"}>
    <div className="Content">
      {props.children}       
    </div>
  </div>