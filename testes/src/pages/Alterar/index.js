import React, { useState } from 'react'

//Components:
import Menu from '../../components/Memu-Atividade/index.js'

//Class:
import Api from '../../services/meme.js'

//Instâncias:
const funcaoApi = new Api()

export default function Alterar(props){

    const [ autor, setAutor ] = useState(props.location.state.autor)
    const [ categoria, setCategoria ] = useState(props.location.state.categoria)
    const [ hashtags, setHashtags ] = useState(props.location.state.hashtags)
    const [ maior, setMaior ] = useState(props.location.state.maior)
    const [ imagem, setImagem ] = useState(props.location.state.imagem)

    async function CadastrarMeme() {
        console.log(props.location.state.id)
        console.log(autor)
        console.log(categoria)
        console.log(hashtags)
        console.log(maior)
        console.log(imagem)

        await funcaoApi.AlterarMeme(props.location.state.id, {
            autor,
            categoria,
            hashtags,
            maior,
            imagem
        })
    }

    return (
        <div className = "cadastrar">
            <Menu />

            <main>
                <form>
                    <div className = "form-group">

                        <label>Autor: </label>
                        <input type = "text" 
                          className = "form-control" 
                        placeholder = "Digite o nome do autor:" 
                              value = {autor}
                           onChange = {x => setAutor(x.target.value)}
                        />
                        
                        <label>Categoria: </label>
                        <input type = "text" 
                          className = "form-control" 
                        placeholder = "Digite a categoria do meme que deseja inserir:" 
                           onChange = {x => setCategoria(x.target.value)}
                              value = {categoria}
                        />
                        
                        <label>Hashtags: </label>
                        <input type = "text" 
                          className = "form-control" 
                        placeholder = "Digite a hashtags do meme que deseja inserir:"
                           onChange = {x => setHashtags(x.target.value)}
                              value = {hashtags}
                        />

                        <div className="form-check">
                            <input className = "form-check-input" 
                                    type = "checkbox"
                                onChange = {x => setMaior(!maior)}
                            />
                            <label className="form-check-label">
                                Recomendado apenas para maiores de idade
                            </label>
                        </div>
                    </div>

                    <button type = "button" 
                       className = "btn btn-success"
                         onClick = {CadastrarMeme}>
                            Alterar
                    </button>
                </form>
            </main>
        </div>
    )
}