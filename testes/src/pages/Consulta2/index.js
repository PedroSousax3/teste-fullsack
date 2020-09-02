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

//Class:
import Api from '../../services/meme.js'

//Instâncias:
const funcaoApi = new Api()

export default function Consulta(){


    //loanding - Bar
    const ref = useRef(null);

    const [registros, setRegistros] = useState([]);  

    const consultarTodos = async () => {
        ref.current.continuousStart()
        const result = await funcaoApi.consultarMemes();
        setRegistros([...result]);
        console.log(...result)
        ref.current.complete()
    }    

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
                                    {x.autor}
                                </div>
                                <div>
                                    {x.inclusao}
                                </div>
                            </div>

                            <div className = "item-post img">
                                <img src = {funcaoApi.consultarImagem(x.imagem)} alt = "e" />
                            </div>

                            <div className = "item-post descricao">
                                <div>{x.categoria}</div>
                                <div>{x.hashtags}</div>
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