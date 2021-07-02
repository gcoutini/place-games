
import React, { Component } from 'react';
import { post } from 'axios'
import { TextField } from '@material-ui/core';
import Card from "../components/layout/Card"
import Layout from "../components/layout/Layout"
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBack from '@material-ui/icons/ArrowBack';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class AddGame extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      players_number: "",
      available: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  registerGame = async e => {
    e.preventDefault();
    const { title, players_number, available } = this.state;
    const isInfoValid = !title || !players_number ? false : true;
    if (!isInfoValid) {
      alert("Preencha todos os campos obrigatórios!")
    } else {
        try {
          const { data } = await post('http://localhost:8000/register_game', {
            title, players_number, available 
          });
          console.log(data);
          alert("Jogo cadastrado com sucesso!");
        } catch(e) {
          alert("Jogo já cadastrado!");
        }
    }
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

  render() {
    return (
      <Layout>
        <Card className="content">Jogos
        <br></br>
        <br></br>
        <div className = "form-register-game">
            <TextField
              InputProps={{ style: { color: 'white', width: '360px' }}}
              required
              name="title"
              label="Título"
              variant="outlined"
              onChange={this.handleChange}
              value={this.state.name}
              size="small" 
              />
            <br></br>
            <br></br>
            <TextField
              required
              name="players_number"
              label="Jogadores"
              variant="outlined"
              value={this.state.players_number}
              InputProps={{ style: { color: 'white', width: '120px'}}}
              size="small" 
              onChange={this.handleChange}
            />
            <br></br>
            <br></br>
            <FormControlLabel
              control={<Checkbox checked={this.state.available} onChange={this.handleChangeCB} name="available" />}
              label="Disponível para locação?"
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
              onClick={this.registerGame}>
                CADASTRAR
            </Button>
            &nbsp;&nbsp;&nbsp; 
            <Button         
              variant="contained"
              startIcon={<ArrowBack/>}
              onClick={() => window.location.href = "/games"}>
                VOLTAR
            </Button>
          </div>
        </div>
        </Card>
      </Layout>
      )
    }
  }

export default AddGame;
