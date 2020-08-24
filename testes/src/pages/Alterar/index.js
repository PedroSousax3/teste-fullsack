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
        /*console.log(props.location.state.id)
        console.log(autor)
        console.log(categoria)
        console.log(hashtags)
        console.log(maior)
        console.log(imagem)*/

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

                        <label>Faixa etaria: </label>
                        <div className = "form-check form-check-inline">
                            <input type = "radio" 
                              className = "form-check-input" 
                                   name = "idade"
                               onChange = {x => setMaior(false)} 
                            />
                            <label className = "form-check-label">
                                Recomendado para maior de 18 anos (18+).
                            </label>
                        </div>
                        <div className = "form-check form-check-inline">
                            <input type = "radio" 
                              className = "form-check-input" 
                                   name = "idade"
                               onChange = {x => setMaior(true)} 
                               />
                            <label className = "form-check-label">
                                Para Todas as idades.
                            </label>
                        </div>

                        <div className = "custom-file">
                            <input type = "file" 
                              className = "custom-file-input" 
                              onChange = {x => setImagem(x.target.files[0])}
                              value = {imagem.fileName}
                            />
                            <label className = "custom-file-label">
                                Escolher arquivo...
                            </label>
                        </div>
                    </div>

                    <button type = "button" 
                       className = "btn btn-success"
                         onClick = {CadastrarMeme}>
                            Cadastrar
                    </button>
                </form>
            </main>
        </div>
    )
}