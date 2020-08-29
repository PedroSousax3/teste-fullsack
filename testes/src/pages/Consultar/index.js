//Bibliotecas:
import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import { ToastContainer, toast } from 'react-toastify'

//Styles:
import './consultar.css'
import 'react-toastify/dist/ReactToastify.css';

//Components:
import Menu from '../../components/Memu-Atividade/index.js'

//Class:
import Api from '../../services/meme.js'

//Instâncias:
const funcaoApi = new Api()

export default function Consultar(){
    
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

    return (
        <div id = "consultar">
            <LoadingBar color='#f11946' ref={ref} />

            <main>
                <Menu />

                <button onClick = {consultarTodos}>Consultar</button>

                <table className = "table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Autor</th>
                            <th>Categoria</th>
                            <th>Hashtags</th>
                            <th>Para Maiores</th>
                            <th>Imagem</th>
                            <th>Inclusao</th>
                            <th>REMOVER</th>
                            <th>ALTERAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            registros.map( x =>
                                <tr>
                                    <td>{x.id}</td>
                                    <td>{x.autor}</td>
                                    <td>{x.categoria}</td>
                                    <td>{x.hashtags}</td>
                                    <td>{x.maior ?"Sim" :"Não" }</td>
                                    <td>
                                        <img src = {funcaoApi.consultarImagem(x.imagem)} 
                                        height = "30px" 
                                            alt = "Foto"/>
                                    </td>
                                    <td>{x.inclusao}</td>
                                    <td>
                                        <button className = "btn btn-danger" 
                                                onClick = {() => removerPorId(x)}>
                                            Remover
                                        </button>
                                    </td>
                                    <td>
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
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                {/*{
                    registros.map(x =>
                        <div className = "item-card" Key = {x.id}>
                            <img src = {funcaoApi.consultarImagem(x.imagem)} height = "250px"  alt="Imagem de capa do card" />
                            <div Key = {x.id}>
                                <h5>Autor: {x.autor}</h5>
                                <p>Para Maior de Idade:{x.maior? "Sim" : "Não"}</p>
                                <p>Categorias do Meme: {x.categoria}</p>
                                <p>Hashtags: {x.hashtags}</p>

                                <button className = "btn btn-danger" onClick = {() => removerPorId(x)}>Remover</button>
                            </div>
                        </div>
                    )
                }*/}

                <ToastContainer />
            </main>
        </div>
    );
}