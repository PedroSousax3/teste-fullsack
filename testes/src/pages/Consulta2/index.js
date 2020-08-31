import React, { useState } from 'react'
import styled, { css } from 'styled-components'

//styles:
import './consulta2.css'

//Components:
import Menu from '../../components/Memu-Atividade/index.js'

const Post = styled.div `
    background-color: black;
    width: 500px;
    min-height: 5   |  00px;
`
export default function Consulta(){
    return(
        <div id = "consulta">
            <Menu />

            <main className = "container-meio">
                <Post>
                    Teste
                </Post>
            </main>
        </div>
    )
}