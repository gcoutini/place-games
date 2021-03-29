
import React, { Component } from 'react';
import { get } from 'axios'
import "./Clients.css"
import MaterialTable from "material-table"

class ClientTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      columns: [
        { title: "Nome", field: 'name' },
        { title: "CPF", field: 'cpf' },
        { title: "Celular", field: 'cel' },
      ]
    };
  }

  async componentDidMount() {
    await this.loadCustomers();
  }
  
  loadCustomers = async () => {
    const { data } = await get('http://localhost:8000/load_customers');
    this.setState({data});
    return data;
  }

  routeChange = () => {
    let path = `/main/`;
    this.history.push(path);
  }

  render() {
    return (
      <MaterialTable title="Consulta de Clientes" data={this.state.data} columns={this.state.columns}/>
     )
    }
  }

export default ClientTable;
