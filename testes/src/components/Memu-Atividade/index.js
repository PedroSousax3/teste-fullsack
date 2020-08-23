import React from 'react'
import { Link } from 'react-router-dom'

//Styles:
import './menu-atividade.css'

export default function MenuAtividade(){
    return (
        <div id = "menu-atividade">
            <header id = "menu-top">
                <h1>MMs</h1>
            </header>

            <header id = "menu-bottom">
                <Link to = "/">Consultar</Link>
                <Link to = "/Cadastrar">Cadastrar</Link>
            </header>
        </div>
    )   
}