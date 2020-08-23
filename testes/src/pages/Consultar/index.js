import React, { useState } from 'react'

//Components:
import Menu from '../../components/Memu-Atividade/index.js'

//Class:
import Api from '../../services/meme.js'

//Instâncias:
const funcaoApi = new Api()

export default function Consultar(){

    const [registros, setRegistros] = useState([]);  

    const consultarTodos = async () => {
        let result = await funcaoApi.consultarMemes()
        setRegistros([...result])
    }

    return (
        <div id = "consultar">
            <Menu />

            <main>
                <button type = "button" 
                   className = "btn btn-primary"
                     onClick = {consultarTodos}> 
                    Listar Memes
                </button>

                <table className = "table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">AUTOR</th>
                            <th scope="col">CATEGORIA</th>
                            <th scope="col">HASHTAGS</th>
                            <th scope="col">MAIOR</th>
                            <th scope="col">IMAGEM</th>
                            <th scope="col">INCLUSÃO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registros.map((x) => 
                            <tr >
                                <td>{x.id}</td>
                                <td>{x.autor}</td>
                                <td>{x.categoria}</td>
                                <td>{x.hashtags}</td>
                                <td>{x.maior ? "sim" : "não"}</td>
                                <td>{funcaoApi.consultarImagem(x.imagem)}</td>
                                <td>{x.inclusao}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </main>

        </div>
    )
}