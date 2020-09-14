//Bibliotecas:
import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import { ToastContainer, toast } from 'react-toastify'

//styles:
import './consulta2.css'
import 'react-toastify/dist/ReactToastify.css';

//Components:
import Menu from '../../components/Memu-Atividade/index.js'

//Funções Api:
import Api from '../../services/meme.js'
import { consultarComentario, cadastrarComentario } from '../../services/comentario.js'

//Instâncias:
const funcaoApi = new Api()

export default function Consulta(){


    //loanding - Bar
    const ref = useRef(null);

    //Dados do Meme
    const [registros, setRegistros] = useState([]);
    //Dados dos Comentarios
    const [dadoscoment, setDadosComent] = useState([]);
    //Valor do input de comentario
    const [comentario, setComentario] = useState("");

    //Consuta todos os comentarios
    const consultComentario = async () => {
        let dados = await consultarComentario();
        setDadosComent([...dados])
        console.log(dadoscoment)
    } 

    //Adiconar um comentario ao meme
    const adicionarComentario = async (meme) => {
        console.log(meme.idMemelation)
        
        await cadastrarComentario(
            {
                meme : meme.idMemelation,
                comentario
            }
        )

        consultarTodos()

        toast.dark("✅ Comentario Adicionado com sucesso!!")
    }

    //Consulta todos os meme
    const consultarTodos = async () => {
        ref.current.continuousStart()
        const result = await funcaoApi.consultarMemes();
        setRegistros([...result]);
        ref.current.complete()
        console.log(...registros)
        consultComentario();
    } 
    
    //Adiciona Curtida ao meme
    const adicionarCurtida = async (meme) => {
        await funcaoApi.AlterarCurtidas(meme.idMemelation)

        consultarTodos();
    }

    //Remove um meme
    const removerPorId = async (meme) => {
        await funcaoApi.removerMemes(meme.id)
        consultarTodos();

        toast.dark("❌ Meme removido com sucesso!!!")
    }

    return(

        
        <div id = "consulta">
            

            <LoadingBar color='#f11946' ref={ref} />
            
            <Menu />

            <main className = "container-meio">
                <button onClick = {consultarTodos} className="btn btn-primary">
                    Consultar
                </button>
                {
                    registros.map(x => 
                        <div className = "post">
                            <div className = "item-post titulo">
                                <div>
                                    {x.nmAutor}
                                </div>
                                <div>
                                    {x.dtInclusao}
                                </div>
                            </div>

                            <div className = "item-post img">
                                <img src = {funcaoApi.consultarImagem(x.imgMeme)} alt = "e" />
                            </div>

                            <div className = "item-post descricao">
                                {dadoscoment.map(y =>
                                    y.meme === x.idMemelation && 
                                    <div>
                                        {y.comentario}
                                    </div>
                                )}
                            </div>
                            <div className = "item-post descricao">
                                <div>Categoria: {x.dsCategoria}</div>
                                <div>Hashtags: {x.dsHashtags}</div>
                                <div onClick = {() => adicionarCurtida(x)}>
                                    {x.nrCurtidas} <i className="fas fa-heart"></i>
                                </div>
                                <label>Comentario</label>
                                <input type = "text" onChange = {(y) => setComentario(y.target.value)} />
                                <button onClick = {() => adicionarComentario(x)}>Enviar</button>
                            </div>
                            <div className = "item-post descricao">
                                <div>
                                    <button className = "btn btn-danger" 
                                            onClick = {() => removerPorId(x)}>
                                        Remover
                                    </button>
                                </div>
                                <div>
                                    <Link to = {
                                        {
                                            state: {
                                                id: x.id,
                                                autor: x.autor,
                                                categoria: x.categoria,
                                                hashtags: x.hashtags,
                                                maior: x.maior,
                                                imagem: x.imagem
                                            },
                                            pathname: "/Alterar"
                                        }
                                    }>
                                        Alterar
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </main>

            <ToastContainer />
        </div>
    )
}