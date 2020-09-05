import axios from 'axios'

const api = axios.create (
    { baseURL: 'http://localhost:5000/Memelation'}
)

export default class MemeApi {
    async cadastrarMeme(meme) {
        
        let formtData = new FormData()
        formtData.append('Autor', meme.autor)
        formtData.append('Categoria', meme.categoria)
        formtData.append('Hashtags', meme.hashtags)
        formtData.append('Maior', meme.maior)
        formtData.append('Imagem', meme.imagem)
        
        const result = await api.post('/', formtData, {
          headers: {'content-type': 'multipart/form-data'}
        });
        
        return result.data
    }

    async consultarMemes() { 
        const result = await api.get('/')
        return result.data
    }

    consultarImagem(nome) {
        const local = api.defaults.baseURL + '/foto/' + nome;
        return local
    }

    async AlterarMeme(id, meme){

        let formtData = new FormData()
        formtData.append('Autor', meme.autor)
        formtData.append('Categoria', meme.categoria)
        formtData.append('Hashtags', meme.hashtags)
        formtData.append('Maior', meme.maior)
        formtData.append('Imagem', meme.imagem)

        await api.put(`/${id}`, formtData, {
            headers: {'content-type': 'multipart/form-data'}
        })
    }

    async AlterarCurtidas(idmeme){
        await api.put(`/curtidas/${idmeme}`)
    }

    async removerMemes(id) {
        await api.delete(`/${id}`)
        this.consultarMemes();
    }
}