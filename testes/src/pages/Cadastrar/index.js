import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

//Components:
import Menu from '../../components/Memu-Atividade/index.js'

//Styles:
import 'react-toastify/dist/ReactToastify.css';

//Class:
import Api from '../../services/meme.js'

//Instâncias:
const funcaoApi = new Api()

export default function Cadastrar(){

    const [ autor, setAutor ] = useState("")
    const [ categoria, setCategoria ] = useState("")
    const [ hashtags, setHashtags ] = useState("")
    const [ maior, setMaior ] = useState(false)
    const [ imagem, setImagem ] = useState()


    async function CadastrarMeme() {
        console.log(autor)
        console.log(categoria)
        console.log(hashtags)
        console.log(maior)
        console.log(imagem)

        await funcaoApi.cadastrarMeme({
            autor: autor,
            categoria: categoria,
            hashtags: hashtags,
            maior: maior,
            imagem: imagem
        })

        toast.dark('✅ Meme cadastrado com sucesso')
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

                        <div className="form-check">
                            <input className = "form-check-input" 
                                    type = "checkbox"
                                onChange = {() => setMaior(!maior)}
                            />
                            <label className="form-check-label">
                                Recomendado apenas para maiores de idade
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

            <ToastContainer />
        </div>
    )
}