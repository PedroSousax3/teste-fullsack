import React from 'react'

import './card.css'

export default function Card() {

    function mostrarItens(){
        const item = document.getElementsByClassName('item-omissao')[0];
        item.style.display = "none"
    }

    return (
        <div className = "card">
            <div className = "item-omissao" onClick = {mostrarItens}>
                <p>Meme apenas para maiores de 18 anos (+18).</p>
            </div>
            <div className = "item-media">
                inclusao
            </div>
            <div className = "titulo">Titulo</div>
            <div className = "item">categoria</div>
            <div className = "item">hashtags</div>
        </div>
    );
}