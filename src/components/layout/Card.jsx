import './Card.css'
import React from 'react'

export default props =>
    <div className="Card" style={{borderColor: props.color || '#000', color: props.teste || '#000', height: props.height || '65px', marginTop: props.marginTop}}>
        <div className="Content">
        {props.children}       
        </div>
    </div>