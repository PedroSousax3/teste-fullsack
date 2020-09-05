import styled from 'styled-components'

export const MenuStyles = styled.div`

    /*Menu Topo*/
    header#menu-top {
        height: 60px;
        width: 100vw;
        padding: 0px 20px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        background-color: var(--blue-clear);
        border-bottom: 5px solid var(--blue-medium);

        position: fixed;
    }
    
    /*Logo Menu*/
    header#menu-top > div > div.menu-bars {
        float: left;
        margin-right: 30px;
    }
    
    header#menu-top > div > div.menu-bars > i {
        font-size: 40px;
        color: var(--blue-medium);
    }

    /*Icone Menu Bars*/
    header#menu-top > div > div.logo-menu {
        float: right;
    }
    header#menu-top > div > div.logo-menu > img {
        height: 40px;
    }

    /*Icone Menu Perfil*/
    header#menu-top > div.perfil-menu {
        
    }

    header#menu-top > div.perfil-menu > i {
        font-size: 40px;
        color: var(--blue-medium);
    }

    /*------------------------------------------------------------*/
    /*Menu Lateral*/
    header#menu-lateral {
        height: 100vh;
        width: 100vw;

        display: flex;

        position: fixed;

        right: 100vw;

        transition: all linear .8s;
    } 

    /*Container Menu Lateral*/
    header#menu-lateral > div.container-lateral {
        height: 100vh;
        width: 400px;

        display: flex;
        flex-direction: column;

        background-color: var(--blue-clear);
        border-right: 5px solid var(--blue-medium);

        position: fixed;

        overflow: auto;
    }

    /*Itens Menu Lateral */
    div.icone-lateral {
        height: px;
        padding: 0px 10px;
    }

    div.icone-lateral > div.close-menu {
        float: right;
    }

    header#menu-lateral > div.container-lateral > ul#itens-lateral {
        padding: 0px;
        margin:0px;        
    }

    header#menu-lateral > div.container-lateral > ul#itens-lateral * {
        /*Reset de lista*/
        list-style-type: none;
        /*padding: 0px;
        margin: 0px;*/
    }
    
    header#menu-lateral div.container-lateral ul#itens-lateral li a {
        padding: 8px 0px;
    }

    header#menu-lateral div.container-lateral ul#itens-lateral li a {
        display: block;
        border-bottom: 5px solid var(--blue-medium);
        font-size: 20px;
        font-weight: 700;
    }

    header#menu-lateral div.container-lateral ul#itens-lateral li ul {
        display: none;
    }

    /*li.item-lateral a {
        line-height: 40px;

        font-size: 20px;
        font-weight: 700;
        color: var(--blue-medium);
    }*/

    
    /*Icones Menu Lateral*/
    div.comeback-menu > i, div.close-menu > i {
        font-size: 40px;
        color: var(--blue-medium);
    }   
`

export const ButtonLink = styled.a `

`
