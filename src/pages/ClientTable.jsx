
import React, { Component } from 'react';
import Header from '../components/layout/Header'
import { post } from 'axios'
import "./Clients.css"
import logo from "../logo2.png"
import Avatar from '@material-ui/core/Avatar';
import profile from "../pp.jpg"
import { IconButton } from '@material-ui/core';
import { Home, People, BarChart, Delete } from '@material-ui/icons'
import Panel from "../components/layout/Panel"

class ClientTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { title: "Love Letter", publisher: "Galápagos Jogos", nOfPlayers: "2-6", available: true },
        { title: "Dominion", publisher: "Paper Games", nOfPlayers: "4", available: true },
        { title: "River Dragon", publisher: "Conclave", nOfPlayers: "6", available: true },
        { title: "Exploding Kittens", publisher: "Galápagos Jogos", nOfPlayers: "4", available: true }
      ],
      columns: [
        { title: "Nome", field: 'name' },
        { title: "Data de Nascimento", field: 'birth_date' },
        { title: "CPF", field: 'cpf' },
        { title: "Telefone", field: 'tel' },
      ]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  verifyClient = async e => {
    e.preventDefault();
    console.log(this.state);
    const { name, cpf } = this.state;
    const { data } = await post('http://localhost:8000/verify_client', {
      name, cpf
    });
    console.log(data);
    this.setState(data);
    return data;
  }

  registerClient = async e => {
    e.preventDefault();
    console.log(this.state);
    const { name, birth_date, cpf, tel, cel, email } = this.state;
    try {
      const { data } = await post('http://localhost:8000/register_client', {
        name, birth_date,cpf, tel, cel, email
      });
      console.log(data);
      alert("Cliente cadastrado com sucesso!");
    } catch(e) {
      alert("CPF já cadastrado!");
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  routeChange = () => {
    let path = `/main/`;
    this.history.push(path);
  }

  render() {
    return (
      <div>
        <Header>
          <img className ="logo" src={logo} alt="Logo"></img>
          <div className="avatar"><Avatar src={profile}></Avatar></div>
        </Header>  
        <Panel>
          <ol className="icon-list">
            <IconButton onClick={() => window.location.href = "/main"}><Home></Home>Home</IconButton>
            <IconButton onClick={() => window.location.href = "/clients"}><People></People>Clientes</IconButton>
            <IconButton onClick={() => window.location.href = "/products"}><Delete></Delete>Produtos</IconButton>
            <IconButton onClick={() => window.location.href = "/stock"}><Delete></Delete>Estoque</IconButton>
            <IconButton onClick={() => window.location.href = "/data"}><BarChart></BarChart>Dados</IconButton>
          </ol>
        </Panel>
      </div>
     )
    }
  }

export default ClientTable;
