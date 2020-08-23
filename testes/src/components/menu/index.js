import React from 'react'

//Styles:
import './menu.css'

//Components:
import Card from '../Card/index.js'

export default function Menu(){
    
    return (
        <div className = "menu">
            <header id = "menu-cima">
                <span className = "menu-logo">
                    MMs
                </span>
            </header>
            <header id = "menu-baixo">
                <div>
                    <a href = "/">
                        Cadastrar
                    </a>
                </div>
                <div>
                    <a href = "/">
                        Consultar
                    </a>
                </div>
            </header>

            <Card />
        </div>
    );
}