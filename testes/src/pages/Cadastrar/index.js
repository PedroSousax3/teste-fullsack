import React, { useState } from 'react'

//Components:
import Menu from '../../components/Memu-Atividade/index.js'

//Class:
import Api from '../../services/meme.js'

//Instâncias:
const funcaoApi = new Api()

export default function Cadastrar(){

    const [ autor, setAutor ] = useState("")
    const [ categoria, setCategoria ] = useState("")
    const [ hashtags, setHashtags ] = useState("")
    const [ maior, setMaior ] = useState()
    const [ imagem, setImagem ] = useState()


    async function CadastrarMeme() {
        /*console.log(autor)
        console.log(categoria)
        console.log(hashtags)
        console.log(maior)
        console.log(imagem)*/

        await funcaoApi.cadastrarMeme({
            autor: autor,
            categoria: categoria,
            hashtags: hashtags,
            maior: maior,
            imagem: imagem
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
                           onChange = {x => setAutor(x.target.value)}
                        />
                        
                        <label>Categoria: </label>
                        <input type = "text" 
                          className = "form-control" 
                        placeholder = "Digite a categoria do meme que deseja inserir:" 
                           onChange = {x => setCategoria(x.target.value)}
                        />
                        
                        <label>Hashtags: </label>
                        <input type = "text" 
                          className = "form-control" 
                        placeholder = "Digite a hashtags do meme que deseja inserir:"
                           onChange = {x => setHashtags(x.target.value)}
                        />

                        <label>Faixa etaria: </label>
                        <div className = "form-check form-check-inline">
                            <input type = "radio" 
                              className = "form-check-input" 
                                   name = "idade"
                               onChange = {x => setMaior(false)}/>
                            <label className = "form-check-label">
                                Recomendado para maior de 18 anos (18+).
                            </label>
                        </div>
                        <div className = "form-check form-check-inline">
                            <input type = "radio" 
                              className = "form-check-input" 
                                   name = "idade"
                               onChange = {x => setMaior(true)} />
                            <label className = "form-check-label">
                                Para Todas as idades.
                            </label>
                        </div>

                        <div className = "custom-file">
                            <input type = "file" 
                              className = "custom-file-input" 
                              onChange = {x => setImagem(x.target.files[0])} 
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