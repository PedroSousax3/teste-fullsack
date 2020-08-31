import axios from 'axios'

//Api base
const api = axios.create (
    {
        baseURL: 'https://nsf-lista-negra.herokuapp.com/spotifyplayer'
    }
)

export default class Spotify {
    async Alterar(musica) {
        await api.put('', musica)
    }
}