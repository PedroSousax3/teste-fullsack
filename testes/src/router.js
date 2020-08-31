import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//Paginas:
import Cadastrar from './pages/Cadastrar/index.js'
//import Consultar from './pages/Consultar/index.js'
import Consultar from './pages/Consulta2/index.js'
import Alterar from './pages/Alterar/index.js'
import Teste from './pages/Teste/index.js'
import Spotify from './pages/Spotify'

export default function Rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact = {true} component = {Consultar} />
                <Route path = "/Cadastrar" component = {Cadastrar} />
                <Route path = "/Alterar" component = {Alterar} />
                <Route path = "/Teste" component = {Teste} />
                <Route path = "/spotify" component = {Spotify} />
            </Switch>
        </BrowserRouter>
    )
}