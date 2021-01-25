import React, { Component } from 'react';
import Card from '../components/layout/Card';
import "./Login.css"
import { post } from 'axios';
import logo from '../logo2.png';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }


  sendLogin = async e => {
    e.preventDefault();
    console.log(this.state);
    const { login, password } = this.state;
    const { data } = await post('http://localhost:8000/login', {
      login, password
    });
    console.log(data);
    return window.location.href = "/main"
  }

  sendSignup = async e => {
    e.preventDefault();
    const { login, password } = this.state;
    const { data } = await post('http://localhost:8000/signup', {
      login, password
    });
    if(data) alert("Usuário cadastrado com sucesso!")
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // routeChange = () => {
  //   let path = `/main/`;
  //   this.history.push(path);
  // }

  render() {
    return (       
      <div className="Login">
        <Card>
          <div className="card-login">
            <div className="Logo">
              <img src={logo} alt="Logo"></img>
            </div>
            <div className="Login2">
              <label>Login:</label>
              <input type="text" name="login" value={this.state.login} onChange={this.handleChange}/>

              <label>Senha:</label>
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
              <div className="buttons">              
                <input type="button" value="Login" onClick={this.sendLogin}></input>
                <div className="divider"></div>
                <input type="button" value="Cadastrar" onClick={this.sendSignup}></input>
              </div>
            </div>
          </div>
        </Card>
      </div>
    )
  }

}

export default Login;