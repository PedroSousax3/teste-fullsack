//Bibliotecas
import React, { useState } from 'react'

//Class:
import Api from '../../services/spotify.js'

//Instancias:
const funcaoApi = new Api();

export default function Spotify(){

    const [musica, setMusica] = useState('')

    const alterarMusica = async () => {
        await funcaoApi.Alterar(
            {
                musicauri : musica
            }
        )
    }

    return (
        <div id = "spotify">
            <label>Código da Música</label>
            <input type = "text" 
               onChange = {x => setMusica(x.target.value)}
                  value = {musica}
            placeholder = "Digite o código da música que deseja tocar: "
            />
            <br />
            <button className = "btn btn-primary"
                      onClick = {alterarMusica}>Tocar</button>
        </div>
    )
}