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
export const Section2 = styled.section`
margin-top:12vw;
display:flex;
`
export const Img2 = styled.img`
width:90vh;
height:36.8vw;

`

export const Texto2 = styled.h2`
position: relative;
left: 22vw;
top: 10vh

`
export const lorem = styled.p`
width:30%;
height:10px;
font-size:13.5px;
margin-top:13vw;
margin-left:0vw;
border:solid
`
export const Linha3 = styled.div`
    background-color: #373737;
    height: 0.5vh;
    width: 4vw;
    position:relative;
    top:8vw;
    left:34vh;

`
export const Section3 = styled.section`
background-color:#DFE4DE;
width: 99.1vw;
height:60vh;


`