import axios from 'axios'

const api = axios.create(
    {
        baseURL: 'http://localhost:5000/Comentario'
    }
)

/*export const ConsultarApi = async () => {
    const result = await api.get('/')
    return result.data
}*/

export const cadastrarComentario = async (comentario) => {
    console.log(comentario)
    const result = await api.post('/', comentario);
}

export const consultarComentario = async () => {
    const result = await api.get('/Listar');

    return result.data;
}

export default class Comentario {
    async Listar(id) {
        const result = await api.get(`?idmeme=${id}`)

        return result.data;
    }
}