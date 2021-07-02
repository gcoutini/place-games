
import React, { Component } from 'react';
import { post, get } from 'axios'
import { TextField } from '@material-ui/core';
import Layout from "../components/layout/Layout"
import InputMask from 'react-input-mask'
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SearchIcon from '@material-ui/icons/Search';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import { IconButton } from '@material-ui/core';
import MaterialTable from "material-table";
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
      cep: "",
      logradouro: "",
      house_number: "",
      complement: "",
      bairro: "",
      localidade: "",
      uf: "",
      data_table: [],
      columns: [
        { title: "Cliente", field: 'client' },
        { title: "CPF", field: 'cpf'},
        { title: "Título", field: 'title'},
        { title: "Data da Locação", field: 'rent_date'},
        { title: "Data de Retorno", field: 'return_date'},
        { title: "Dias de Locação", field: 'rental_days'},
        { title: "Preço", field: 'price'},
      ]
    };
    this.handleChange = this.handleChange.bind(this);
  }


  handleCep = async e => {
    e.preventDefault();
    
  }
  getCep = async e => {
    e.preventDefault();
    const { cep } = this.state;
    const { data } = await get(`https://viacep.com.br/ws/${ cep }/json/`);
    console.log(data);
    this.setState(data);
    return data;
  }

  verifyClient = async e => {
    e.preventDefault();
    const { name, cpf } = this.state;
    const { data } = await post('http://localhost:8000/verify_client', {
      name, cpf
    });
    this.setState(data);
    return data;
  }

  updateInfo = async (event, value) => {
    await this.setState(value);
    const moment = require('moment');
    for(let i=0; i <= value.rentals.length-1; i++) {
      let format_take = moment(value.rentals[i].rent_date).format('DD/MM/YYYY')
      value.rentals[i].rent_date = format_take;
      let format_return = moment(value.rentals[i].return_date).format('DD/MM/YYYY');
      value.rentals[i].return_date = format_return;
    }
    await this.setState({data_table: value.rentals});
  }

  registerClient = async e => {
    e.preventDefault();
    const { name, birth_date, cpf, tel, cel, email, cep, logradouro, house_number, complement, bairro, localidade, uf } = this.state;
    const emptyFields = Object.keys(this.state).filter(key => this.state[key] === '');
    const mandatoryFields = [
      'name', 'birth_date', 'cpf', 'cel', 'cep', 'logradouro', 'house_number', 'bairro', 'localidade', 'uf'
    ];
    const isInfoValid = !emptyFields.find(field => mandatoryFields.includes(field));
    if (!isInfoValid) {
      alert("Preencha todos os campos obrigatórios!");
    } else {
        try {
          const { data } = await post('http://localhost:8000/register_client', {
            name, birth_date,cpf, tel, cel, email, cep, logradouro, house_number, complement, bairro, localidade, uf 
          });
          console.log(data);
          alert("Cliente cadastrado com sucesso!");
          this.componentDidMount();
          this.clearState();
        } catch(e) {
          alert("CPF já cadastrado!");
        }
    }
  }

  clearState = () => {
    this.setState({
      name: "",
      birth_date: "",
      cpf: "",
      tel: "",
      cel: "",
      email: "",
      cep: "",
      logradouro: "",
      house_number: "",
      complement: "",
      bairro: "",
      localidade: "",
      uf: ""
    });
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

  async componentDidMount() {
    let { data } = await get('http://localhost:8000/load_customers');
    data = data.sort((a, b) => (a.name > b.name) ? 1 : -1);
    this.setState({data});
    console.log(this.state);
  }
  

  render() {
    return (
      <Layout>
        <div className = "form-register-client">
            <Autocomplete
              name="search"
              id="customers-search"
              options={this.state.data}
              getOptionLabel={(option) => option.name}
              onChange={this.updateInfo}
              style={{ color: 'white', width: 300 }}
              renderInput={(params) => <TextField {...params} label="Buscar" variant="outlined"/>}
            />
            <br></br>
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
            <IconButton         
              variant="contained"
              onClick={this.verifyClient}>
              <SearchIcon></SearchIcon>
            </IconButton>
            <br></br>
            <br></br>
            <InputMask
              mask="(99) 9999-9999"
              value={this.state.tel}
              disabled={false}
              maskChar="_"
              onChange={this.handleChange}
            >{() => <TextField name="tel" label="Telefone Fixo" variant="outlined" size="small" InputProps={{ style: { color: 'white', width: '160px' }}}/>}
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
            <InputMask
                mask="99999-999"
                value={this.state.cep}
                disabled={false}
                maskChar="_"
                onBlur={this.getCep}
                onChange={this.handleChange}
              >{() => <TextField required name="cep" label="CEP" variant="outlined" size="small" InputProps={{ style: { color: 'white', width: "180px" }}}/>}
            </InputMask>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              disabled
              name="logradouro"
              label="Logradouro"
              variant="outlined"
              value={this.state.logradouro}
              InputProps={{ style: { color: 'white', width: '450px'}}}
              size="small" 
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              required
              name="house_number"
              label="Nº"
              variant="outlined"
              value={this.state.house_number}
              InputProps={{ style: { color: 'white', width: '100px'}}}
              size="small" 
              onChange={this.handleChange}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              name="complement"
              label="Complemento"
              variant="outlined"
              value={this.state.complement}
              InputProps={{ style: { color: 'white', width: '150px'}}}
              size="small" 
              onChange={this.handleChange}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              name="bairro"
              label="Bairro"
              variant="outlined"
              value={this.state.bairro}
              InputProps={{ style: { color: 'white', width: '150px'}}}
              size="small" 
              onChange={this.handleChange}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br></br>
            <br></br>
            <TextField
              disabled
              name="localidade"
              label="Cidade"
              variant="outlined"
              value={this.state.localidade}
              InputProps={{ style: { color: 'white', width: '300px'}}}
              size="small" 
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              disabled
              name="uf"
              label="Estado"
              variant="outlined"
              value={this.state.uf}
              InputProps={{ style: { color: 'white', width: '80px'}}}
              size="small" 
            />
            <br></br>
            <br></br>
            <div className='buttons'>
            <Button         
              variant="contained"
              startIcon={<AddCircleIcon/>}
              onClick={this.registerClient}>
                CADASTRAR
            </Button>
            &nbsp;&nbsp;&nbsp; 
            <Button         
              variant="contained"
              startIcon={<ClearAllIcon/>}
              onClick={(this.clearState)}>
                LIMPAR
            </Button>
          </div>
        </div>
        <br></br>
        <MaterialTable title="Histórico do Cliente" data={this.state.data_table} columns={this.state.columns} options={{ paging:false }} localization={{ body: { emptyDataSourceMessage: 'Nenhum registro encontrado.' }}}/>
      </Layout>
      )
    }
  }

export default Clients;
