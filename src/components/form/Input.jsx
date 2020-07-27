import React, { useState } from 'react';
import './Input.css';
import logo from '../../logo2.png';
import { get } from 'axios';

export default (props) => {
    const [login, setLogin] = useState();
    const [senha, setSenha] = useState();

    const sendLogin = async e => {
        e.preventDefault();
        const { data } = await get('http://viacep.com.br/ws/03214030/json');

        console.log(data);
    }


    return (
        <div>
            <div className="Logo">
            <img src={logo} alt="Logo"></img>
            </div>
            <form onSubmit={sendLogin}>
                <div className="Login">
                    <label>Login:</label>
                    <div className="Login2">
                        <input type="text" value={login} onChange={e => setLogin(e.target.value)}/>
                    </div>
                    <div className="Senha">
                        <label>Senha:</label>
                        <input type="password" value={senha} onChange={e => setSenha(e.target.value)}/>
                    </div>
                    <input type="submit" value="Login"></input>
                </div>
            </form>
        </div>
    )
}