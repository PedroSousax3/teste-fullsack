import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//Styles:
import './consultar.css'

//Components:
import Menu from '../../components/Memu-Atividade/index.js'

//Class:
import Api from '../../services/meme.js'

//Instâncias:
const funcaoApi = new Api()

export default function Consultar(){

    const [registros, setRegistros] = useState([]);  

    const consultarTodos = async () => {
        const result = await funcaoApi.consultarMemes()
        setRegistros([...result])
    }

    const removerPorId = async (meme) => {
        await funcaoApi.removerMemes(meme.id)
    }

    return (
        <div id = "consultar">
            <Menu />
            <button
                onClick = {consultarTodos}
            > 
                Listar Memes
            </button>

            <table className = "table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>AUTOR</th>
                        <th>CATEGORIA</th>
                        <th>HASHTAGS</th>
                        <th>MAIOR</th>
                        <th>IMAGEM</th>
                        <th>INCLUSÃO</th>
                        <th>ALTERAR</th>
                        <th>REMOVER</th>
                    </tr>
                </thead>
                <tbody>
                    {registros.map(x => 
                        <tr key = {x.id}>
                            <td>{x.id}</td>
                            <td>{x.autor}</td>
                            <td>{x.categoria}</td>
                            <td>{x.hashtags}</td>
                            <td>{x.maior}</td>
                            <td>{x.imagem}</td>
                            <td>{x.inclusao}</td>
                            <td>
                                <Link className="btn btn-warning" to = {
                                    {
                                        pathname: "/Alterar",
                                        state: {
                                            id: x.id,
                                            autor: x.autor,
                                            categoria: x.categoria,
                                            hashtags: x.hashtags,
                                            maior: x.maior,
                                            imagem: x.imagem
                                        }
                                    }
                                }>
                                    Alterar
                                </Link>
                            </td>
                            <td>
                                <button onClick = {removerPorId(x)}>Remover</button>
                            </td>
                            {console.log(x)}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}