import React, { Component } from 'react'
import './Layout.css'
import Header from './Header'
import Panel from './Panel'
import Content from './Content'

class Layout extends Component {
 
  render() {
    return(
      <div className='grid'>
        <Header/>
        <Panel/>
        <Content>
          {this.props.children}
        </Content>
      </div>
    )
  }
}

export default Layout;