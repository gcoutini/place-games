
import React, { Component } from 'react';
import { post } from 'axios'
import "./Clients.css"
import { TextField } from '@material-ui/core';
import Card from "../components/layout/Card"
import InputMask from 'react-input-mask'
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/AddCircle';
class Clients extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      birth_date: "",
      cpf: "",
      tel: "",
      cel: "",
      email: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  verifyClient = async e => {
    e.preventDefault();
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
      <Card className="content">Clientes
      <br></br>
      <br></br>
      <div className = "form-register-client">
        <TextField
          InputProps={{ style: { color: 'white', width: '360px' }}}
          required
          name="name"
          label="Nome"
          variant="outlined"
          onChange={this.handleChange}
          value={this.state.name}
          size="small" 
          />
        <br></br>
        <br></br>
        <InputMask
          mask="99/99/9999"
          value={this.state.birth_date}
          disabled={false}
          maskChar="_"
          onChange={this.handleChange}
        >{() => <TextField required name="birth_date" label="Data de Nascimento" variant="outlined" size="small" InputProps={{ style: { color: 'white', width: "180px" }}}/>}
        </InputMask>
        <br></br>
        <br></br>
        <InputMask
          mask="999.999.999-99"
          value={this.state.cpf}
          disabled={false}
          maskChar="_"
          onChange={this.handleChange}
        >{() => <TextField required name="cpf" label="CPF" variant="outlined" size="small" InputProps={{ style: { color: 'white', width: '150px' }}}/>}
        </InputMask>
        <br></br>
        <br></br>
        <InputMask
          mask="(99) 9999-9999"
          value={this.state.tel}
          disabled={false}
          maskChar="_"
          onChange={this.handleChange}
        >{() => <TextField required name="tel" label="Telefone Fixo" variant="outlined" size="small" InputProps={{ style: { color: 'white', width: '160px' }}}/>}
        </InputMask>
        <br></br>
        <br></br>
        <InputMask
          mask="(99) 99999-9999"
          value={this.state.cel}
          disabled={false}
          maskChar="_"
          onChange={this.handleChange}
        >{() => <TextField required name="cel" label="Celular" variant="outlined" size="small" InputProps={{ style: { color: 'white', width: '160px' }}}/>}
        </InputMask>
        <br></br>
        <br></br>
        <TextField
          required
          name="email"
          label="E-mail"
          variant="outlined"
          onChange={this.handleChange}
          value={this.state.email}
          InputProps={{ style: { color: 'white', width: '250px'}}}
          size="small" 
        />
        <br></br>
        <br></br>
        <div className='buttons'>
        <Button         
          variant="contained"
          startIcon={<SearchIcon/>}
          onClick={this.verifyClient}>
            Procurar
        </Button>
        &nbsp;&nbsp;&nbsp; 
        <Button         
          variant="contained"
          startIcon={<AddCircleIcon/>}
          onClick={this.registerClient}>
            CADASTRAR
        </Button>

          {/* <input type="button" value="Consultar" onClick={this.verifyClient}></input>
          <input type="button" value="Cadastrar" onClick={this.registerClient}></input> */}
        </div>
      </div>
      </Card>
      )
    }
  }

export default Clients;
