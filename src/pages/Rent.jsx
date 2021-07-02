
import React, { Component } from 'react';
import Layout from "../components/layout/Layout"
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { get, post } from 'axios';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import SendIcon from '@material-ui/icons/Send';
import InputMask from 'react-input-mask'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class Rent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      client: "",
      title: "",
      cpf: "",
      rent_date: "",
      rental_days: "7",
      return_date: "",
      price: "",
      players_number: "",
      available: "",
      paidFor: false,
      data_games: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  
  async componentDidMount() {
    let { data: data_games } = await get('http://localhost:8000/load_games');
    this.setState({data_games});
    data_games = data_games.sort((a, b) => (a.title > b.title) ? 1 : -1);

    let { data: data_customers } = await get('http://localhost:8000/load_customers');
    this.setState({data_customers});
    data_customers = data_customers.sort((a, b) => (a.name > b.name) ? 1 : -1);
  }
  
  infoSearch = async () => {
    const cpf = this.state.cpf;
    const name = this.state.client;
    const { data } = await post('http://localhost:8000/info_search', {
      name, cpf
    });
    console.log(data);
    (cpf)? await this.setState({ client: data.name }) : await this.setState({ cpf: data.cpf })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleChangeCB = (e) => {
    this.setState({
      [e.target.name]: e.target.checked
    });
  };

  routeChange = () => {
    let path = `/main/`;
    this.history.push(path);
  }

  newRent = async e => {
    e.preventDefault();
    const moment = require('moment');
    const rent_date = moment().format()
    const return_date = moment().add(this.state.rental_days, 'd').format()
    await this.setState({ rent_date: rent_date, return_date: return_date })
    const { client, title, cpf, rental_days, price, paidFor} = this.state;
    try {
      const { data } = await post('http://localhost:8000/new_rent', {
        client, title, cpf, rent_date, return_date, rental_days, price, paidFor
      });
      console.log(data);
      alert("Aluguel cadastrado com sucesso!");
    } catch(e) {
      alert("Erro ao registrar aluguel!");
    }
  }

  // updateInfo = async (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  //   this.infoSearch();
  // }

  render() {
    return (
      <Layout>
        <InputMask
          mask="999.999.999-99"
          value={this.state.cpf}
          disabled={false}
          maskChar="_"
          onBlur={this.infoSearch}
          onChange={this.handleChange}
        >{() => <TextField required name="cpf" label="CPF" variant="outlined" size="small" InputProps={{ style: { width: '150px' }}}/>}
        </InputMask>
        <br></br>
        <br></br>
        <TextField
          InputProps={{ style: { width: '300px' } }}
          required
          name="client"
          label="Cliente"
          variant="outlined"
          onChange={this.handleChange}
          onBlur={this.infoSearch}
          value={this.state.client}
          size="small" 
        />
      <br></br>
      <br></br>
      <Autocomplete
      id="game-title-list"
      options={this.state.data_games}
      getOptionLabel={(option) => option.title}
      onChange={(event, value) => this.setState( {title: value.title} )}
      style={{ color: 'white', width: 300 }}
      renderInput={(params) => <TextField {...params} label="Jogo" variant="outlined"/>}
      />
      <br></br>
      <TextField
        id="rental_days"
        name="rental_days"
        label="Dias de Locação"
        type="number"
        onChange={this.handleChange}
        defaultValue="7"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <br></br>
      <br></br>
      <TextField
        id="price"
        name="price"
        label="Valor"
        type="number"
        onChange={this.handleChange}
        variant="outlined"
        defaultValue=""
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          startAdornment: <InputAdornment position="start">R$</InputAdornment>,
        }}
      />
      <br></br>
      <br></br>
      <FormControlLabel
        control={<Checkbox checked={this.state.paidFor} onChange={this.handleChangeCB} name="paidFor" />}
        label="Pagamento na retirada?"
      />
      <br></br>
      <br></br>
      <Button         
        variant="contained"
        startIcon={<SendIcon/>}
        onClick={(this.newRent)}>
          ALUGAR
      </Button> 
      </Layout>
      )
    }
  }

export default Rent;
