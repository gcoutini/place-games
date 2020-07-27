import React, { useState } from 'react'
import './Input.css'
import logo from '../../logo2.png'

export default (props) => {
    const [login, setLogin] = useState()
    const [senha, setSenha] = useState()


    return (
        <div>
            <div className="Logo">
            <img src={logo} alt="Logo"></img>
            </div>
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
        </div>
    )
}