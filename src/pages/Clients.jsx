
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
import Card from "../components/layout/Card"

class Clients extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      birth_date: "",
      cpf: "",
      tel: "",
      cel: "",
      email: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }


  registerClient = async e => {
    e.preventDefault();
    console.log(this.state);
    const { name, birth_date, cpf, tel, cel, email } = this.state;
    const { data } = await post('http://localhost:8000/register_client', {
      name, birth_date,cpf, tel, cel, email
    });
    console.log(data);
    if(data) alert("Cliente cadastrado com sucesso!");
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
      <Header>
        <img className ="logo" src={logo} alt="Logo"></img>
        <div className="avatar"><Avatar src={profile}></Avatar></div>
        <Panel>
          <ol className="icon-list">
            <IconButton onClick={() => window.location.href = "/main"}><Home></Home>Home</IconButton>
            <IconButton onClick={() => window.location.href = "/clients"}><People></People>Clientes</IconButton>
            <IconButton onClick={() => window.location.href = "/products"}><Delete></Delete>Produtos</IconButton>
            <IconButton onClick={() => window.location.href = "/stock"}><Delete></Delete>Estoque</IconButton>
            <IconButton onClick={() => window.location.href = "/data"}><BarChart></BarChart>Dados</IconButton>
          </ol>
        </Panel>
        <Card className="content">Clientes
        <div className = "form-register-client">
          <label>Nome:  </label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
          <br></br>
          <label>Data de Nascimento:  </label>
          <input type="text" name="birth_date" value={this.state.birth_date} onChange={this.handleChange}/>
          <br></br>
          <label>*CPF:  </label>
          <input type="text" name="cpf" value={this.state.cpf} onChange={this.handleChange}/>
          <br></br>
          <label>Telefone Fixo ou Comercial:  </label>
          <input type="text" name="tel" value={this.state.tel} onChange={this.handleChange}/>
          <br></br>
          <label>Telefone Celular:  </label>
          <input type="text" name="cel" value={this.state.cel} onChange={this.handleChange}/>
          <br></br>
          <label>E-mail:  </label>
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
          <br></br>
          <input type="button" value="Cadastrar" onClick={this.registerClient}></input>
        </div>
        </Card>
      </Header>
      )
    }
  }

export default Clients;
