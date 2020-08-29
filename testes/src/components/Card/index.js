import React from 'react'

import './card.css'

import img_teste from '../../assets/118a5793bab8bf70230cf602cb394c0a.png'
export default function Card() {

    function mostrarItens(){
        const item = document.getElementsByClassName('item-omissao')[0];
        item.style.display = "none"
    }

    return (
        <div className = "card-item">
            <div className = "imagem">
                <img src = {img_teste} alt = "Meme"/>
            </div>
            <div className = "titulo item-card">Autor</div>
            <div className = "descricao item-card">hashtags</div>
            <div className = "categoria item-card">Categoria</div>
            <div className = "data item-card">Data</div>
            <div>
                <button>Alterar</button>
                <button>Remover</button>
            </div>
        </div>
    );
}