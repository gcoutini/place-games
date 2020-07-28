import React, { useState } from 'react';
import './Input.css';
import logo from '../../logo2.png';
import { post } from 'axios';
import { useHistory } from 'react-router-dom';
export default (props) => {


    const [login, setLogin] = useState();
    const [password, setPassword] = useState();

    const sendLogin = async e => {
        e.preventDefault();
        const { data } = await post('http://localhost:8000/login', {
            login, password
        });
        console.log(data);
        return routeChange();
    }

    const sendSignup = async e => {
        e.preventDefault();
        const { data } = await post('http://localhost:8000/signup', {
            login, password
        });
        console.log(data);
    }

        const history = useHistory();
        const routeChange = () => {
            let path = `/main/`;
            history.push(path);
        }

    return (
        
        <div className="card-login">
            <div className="Logo">
            <img src={logo} alt="Logo"></img>
            </div>
                <div className="Login">
                    <label>Login:</label>
                    <input type="text" value={login} onChange={e => setLogin(e.target.value)}/>
                    <label>Senha:</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <input type="button" value="Login" onClick={sendLogin}></input>
                    <div className="divider"></div>
                    <input type="button" value="Cadastrar" onClick={sendSignup}></input>
                    </div>
        </div>
    )
}