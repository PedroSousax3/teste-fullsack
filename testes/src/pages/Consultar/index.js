import React, { useState } from 'react'

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
        const result = await funcaoApi.consultarMemes();
        setRegistros([...result]);
        console.log(...result)
    }

    const removerPorId = async (meme) => {
        console.log(meme)
        await funcaoApi.removerMemes(meme.id);

        this.consultarTodos();
    }

    return (
        <div id = "consultar">
        <main>
            <Menu />

            <button onClick = {consultarTodos}>Consultar</button>

            {/*<table className = "table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Autor</th>
                        <th>Categoria</th>
                        <th>Hashtags</th>
                        <th>Maior</th>
                        <th>Imagem</th>
                        <th>Inclusao</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        registros.map( x =>
                            <tr>
                                <th>{x.id}</th>
                                <th>{x.autor}</th>
                                <th>{x.categoria}</th>
                                <th>{x.hashtags}</th>
                                <th>{x.maior ?"Sim" :"Não" }</th>
                                <th>
                                    <img src = {funcaoApi.consultarImagem(x.imagem)} height = "30px" />
                                </th>
                                <th>{x.inclusao}</th>
                            </tr>
                        )
                    }
                </tbody>
            </table>*/}
            {
                registros.map(x =>
                    <div className="card" Key = {x.id}>
                        <img className = "card-img-top" src = {funcaoApi.consultarImagem(x.imagem)} height = "250px"  alt="Imagem de capa do card" />
                        <div className="card-body"  Key = {x.id}>
                            <h5 className="card-title">Autor: {x.autor}</h5>
                            <p className="card-text">Para Maior de Idade:{x.maior? "Sim" : "Não"}</p>
                            <p className="card-text">Categorias do Meme: {x.categoria}</p>
                            <p className="card-text">Hashtags: {x.hashtags}</p>

                            <button className = "btn btn-danger" onClick = {() => removerPorId(x)}>Remover</button>
                        </div>
                    </div>
                )
            }
        </main>
        </div>
    );
}