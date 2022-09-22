import styled from "styled-components"

export const ContainerMain = styled.div`
    background-color: #F2F4F1;
    height: 200vh;
`
export const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40vh;
    line-height: 10vh;

    div{
        
        background-color: black;
        height: 0.5vh;
        width: 5vw;
    }
`

export const ContainerFood = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const Caixa = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 60vh;
    box-shadow: 0px 2px 2px 0 gray ;
    p{
        font-weight: bold;
    }
`

export const ImgMain = styled.img`
    width: 25vw;
    :hover{
        transition: ease-in-out 0.5s;
        width: 27vw;
    }
`

export const Linha = styled.div`
    background-color: black;
    height: 0.5vh;
    width: 5vw;
`