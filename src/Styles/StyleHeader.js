import styled from "styled-components";
import BackGround from '../Img/Header/BackGroundHeader.png'
import Responsivo from '../Img/Header/Responsivo.png'

export const Fundo = styled.div`
    background-image: url(${BackGround});
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: 100%;
    height: 100vh;
    @media (max-width: 768px){
    background-image:url(${Responsivo});

    }
`

export const ContainerHome = styled.section`
    display: flex;
    height: 20vh;
    justify-content: space-around;
    align-items: center;
`

export const UlHome = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 45vw;
    list-style: none;
    font-size: 1.5rem;
    @media(max-width: 768px){
        display:none;
    }
    

    li{
        width: 15vw;
        text-align: center;
        cursor: pointer;
        :hover{
            border:solid 3px;
        }
    }
`

export const H1 = styled.h1`
    position: absolute;
    top: 50%;
    right:40%;
    font-size: 5rem;
    @media (max-width: 768px){
        display:none;
    }
`