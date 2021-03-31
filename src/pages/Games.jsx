import React, { Component } from 'react';
import Layout from "../components/layout/Layout";
import { get } from 'axios';
import MaterialTable from "material-table";
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

class Games extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      columns: [
        { title: "Título", field: 'title' },
        { title: "Nº de Jogadores", field: 'players_number' },
        { title: "Disponível?", field: 'available' }
      ]
    };
  }

  async componentDidMount() {
    await this.loadGames();
  }
  
  loadGames = async () => {
    const { data } = await get('http://localhost:8000/load_games');
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
        <MaterialTable title="Consulta de Jogos" data={this.state.data} columns={this.state.columns}/>
        <br></br>
        <Button         
          variant="contained"
          startIcon={<AddCircleIcon/>}
          onClick={() => window.location.href = "/games/new"}>
            NOVO JOGO
        </Button>
      </Layout>
      )
    }
  }

export default Games;


