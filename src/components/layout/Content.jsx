import './Content.css'
import React, { Component } from 'react'

class Content extends Component {
  
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return(
      <div className='content'>
        {this.props.children}
      </div>
    )
  }
}

export default Content;