
import React, { Component } from 'react';
import { get } from 'axios';
import "./Clients.css";
import MaterialTable from "material-table";
import Layout from "../components/layout/Layout";
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

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
      <Layout>
        <MaterialTable title="Consulta de Clientes" data={this.state.data} columns={this.state.columns}/>
        <br></br>
        <Button         
          variant="contained"
          startIcon={<AddCircleIcon/>}
          onClick={() => window.location.href = "/clients/new"}>
            NOVO CLIENTE
        </Button>
      </Layout>
     )
    }
  }

export default ClientTable;
