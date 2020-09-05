import React from 'react'
import { Link } from 'react-router-dom'

//Styles:
import { MenuStyles, ButtonLink } from './style.js'

//Assets:
import logo_nsa from '../../assets/logo_nsa.jpg'
                
function openMenuLateral() {

    const menu_lateral = document.getElementById("menu-lateral");
    
    menu_lateral.style.right = 0;
}

function closeMenuLateral() {
    
    const menu_lateral = document.getElementById("menu-lateral");
    
    menu_lateral.style.right = "100vw";
}

function openItensModulo(posicao = 0, itemaparecer = 0, nome){  
    let item = document.getElementsByClassName(nome)[posicao].getElementsByTagName("ul")[itemaparecer];
    
    if(item.style.display === "block")
        item.style.display = "none";
    else 
        item.style.display = "block";
        
    console.log(item) 
    console.log(posicao, itemaparecer, nome)
    
}

export default function Menu(){

    return (
        <MenuStyles>
            <header id = "menu-top">{/*Inicio Menu Top*/}
                <div>
                    <div className = "menu-bars">
                        <i className="fas fa-bars" onClick = {openMenuLateral}></i>
                    </div>

                    <div className = "logo-menu">
                        <img src = {logo_nsa} alt = "NSA-Logo" />
                    </div>
                </div>
                <div className = "perfil-menu">
                    <i className="far fa-user-circle"></i>
                </div>
            </header>{/*Fim Menu Top*/}

            <header id = "menu-lateral">{/*Inicio Menu Lateral*/}
                <div className = "container-lateral">
                    <div className = "icone-lateral">
                        <div className = "close-menu">
                            <i className="fas fa-times" onClick = {closeMenuLateral}></i>
                        </div>
                    </div>


                    <ul id = "itens-lateral">
                        <li className = "modulo">
                            <ButtonLink onClick = {() => openItensModulo(0, 0, "modulo")}>DISCENTE</ButtonLink>
                            <ul className = "submodulo">
                                <li>
                                    <ButtonLink onClick = {() => openItensModulo(0, 0, "submodulo")}>DISCIPLINAS</ButtonLink>
                                    <ul>
                                        <li>
                                            <Link to = "/">TRANSFERÊNCIA</Link>
                                        </li>
                                        <li>
                                            <Link to = "/">DESISTÊNCIA</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className = "modulo">
                            <ButtonLink onClick = {() => openItensModulo(1, 0, "modulo")}>DOCENTE</ButtonLink>
                            <ul className = "submodulo">
                                <li>
                                    <ButtonLink onClick = {() => openItensModulo(1, 0, "submodulo")}>DIÁRIO</ButtonLink>
                                    <ul>
                                        <li>
                                            <Link to = "/">MÉDIA E FALTAS</Link>
                                        </li>

                                        <li>
                                            <Link to = "/">MARCAR FREQUÊNCIA</Link>
                                        </li>

                                        <li>
                                            <Link to = "/">CONTEÚDO</Link>
                                        </li>

                                        <li>
                                            <Link to = "/">MARCAR FREQUÊNCIA (TODOS)</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className = "modulo">
                            <ButtonLink onClick = {() => openItensModulo(2, 0, "modulo")}>COORDENAÇÃO</ButtonLink>
                            <ul className = "submodulo">
                                <li>
                                    <ButtonLink onClick = {() => openItensModulo(2, 0, "submodulo")}>DISCIPLINAS</ButtonLink>
                                    <ul>
                                        <li>
                                            <Link to = "/">CADASTRAR</Link>
                                        </li>
                                        <li>
                                            <Link to = "/">CONSULTAR</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ButtonLink onClick = {() => openItensModulo(2, 1, "submodulo")}>CURSOS</ButtonLink>
                                    <ul>
                                        <li>
                                            <Link to = "/">CADASTRAR</Link>
                                        </li>
                                        <li>
                                            <Link to = "/">CONSULTAR</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ButtonLink onClick = {() => openItensModulo(2, 2, "submodulo")}>PROFESSORES</ButtonLink>
                                    <ul>
                                        <li>
                                            <Link to = "/">CADASTRAR</Link>
                                        </li>
                                        <li>
                                            <Link to = "/">CONSULTAR</Link>
                                        </li>
                                        <li>
                                            <Link to = "/">ENVIAR DIÁRIO</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ButtonLink onClick = {() => openItensModulo(2, 3, "submodulo")}>SALAS</ButtonLink>
                                    <ul>
                                        <li>
                                            <Link to = "/">CADASTRAR</Link>
                                        </li>
                                        <li>
                                            <Link to = "/">CONSULTAR</Link>
                                        </li>
                                        <li>
                                            <Link to = "/">VESTIBULAR</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className = "modulo">
                            <ButtonLink onClick = {() => openItensModulo(3, 0, "modulo")}>VESTIBULAR</ButtonLink>
                            <ul className = "submodulo">
                                <li>
                                    <ButtonLink onClick = {() => openItensModulo(3, 0, "submodulo")}>ANO LETIVO</ButtonLink>
                                    <ul>
                                        <li>
                                            <Link to = "/">CADASTRAR</Link>
                                        </li>
                                        <li>
                                            <Link to = "/">CONSULTAR</Link>
                                        </li>
                                        <li>
                                            <Link to = "/">GRADE SEMANAL</Link>
                                        </li>
                                        <li>
                                            <Link to = "/">CALENDÁRIO</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ButtonLink onClick = {() => openItensModulo(3, 1, "submodulo")}>INCRIÇÕES</ButtonLink>
                                    <ul>
                                        <li>
                                            <Link to = "/">PRÉ TRIAGEM</Link>
                                        </li>
                                        <li>
                                            <Link to = "/">NOVO</Link>
                                        </li>
                                        <li>
                                            <Link to = "/">CONSULTAR</Link>
                                        </li>
                                        <li>
                                            <Link to = "/">EFETUAR PAGAMENTO</Link>
                                        </li>
                                        <li>
                                            <Link to = "/">REGISTRAR NOTA</Link>
                                        </li>
                                        <li>
                                            <Link to = "/">APROVADOS</Link>
                                        </li>
                                        <li>
                                            <Link to = "/">DISTRIBUIR</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ButtonLink onClick = {() => openItensModulo(3, 2, "submodulo")}>MATRÍCULAS</ButtonLink>
                                    <ul>
                                        <li>
                                            <Link to = "/">NOVO</Link>
                                        </li>
                                        <li>
                                            <Link to = "/">NOVO - ESPERA</Link>
                                        </li>
                                        <li>
                                            <Link to = "/">CONSULTAR</Link>
                                        </li>
                                        <li>
                                            <Link to = "/">MENSALIDADES</Link>
                                        </li>
                                        <li>
                                            <Link to = "/">ENVIO DE E-MAIL</Link>
                                        </li>
                                        <li>
                                            <Link to = "/">DIPLOMAS/ CERTIFICADO.</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className = "modulo">
                            <Link to = "/">RELATÓRIOS</Link>
                        </li>
                        <li className = "modulo">
                            <Link to = "/">ADMIN</Link>
                        </li>
                    </ul>


                </div>
            </header>{/*Fim Menu Lateral*/}
        </MenuStyles>
    )
}