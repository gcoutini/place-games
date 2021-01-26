import React, { Component } from 'react'
import MaterialTable from 'material-table'

class Table extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      columns: this.props.columns,
      title: this.props.title
    }
  }

  render() {
    return(<div>
      <MaterialTable title={this.state.title}
      data={this.state.data}
      columns={this.state.columns}
      />
    </div>
    )
  }
}

export default Table;