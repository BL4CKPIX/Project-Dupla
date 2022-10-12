import styled from "styled-components";

export const sectiontoda = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    color: #F2F4F1;
    height: 35vh;
    @media (max-width: 768px){
        flex-direction: column;
        height: 50vh;
    }
`

export const Icones2 = styled.div`
    width: 40%;
    display:flex;
    justify-content: center;
    flex-wrap:wrap;
    @media (max-width: 768px){
        width: 60%;
        position: relative;
        top: 25vh;
    }
`
export const Icons = styled.figure`
    width: 12%;
    @media (max-width: 768px){
        width: 25%;
    }
    img{
        width: 3vw;
        @media (max-width: 768px){
            width: 12vw;
        }
    }
`
export const NavFooter = styled.nav`
    @media (max-width: 768px){
        position: relative;
        bottom: 18vh;
        left: 8vw;
    }
`

export const About = styled.ul`
    display:flex;
    font-size: 1.4rem;
    list-style:none;
    font-weight: 400;
    justify-content:space-around;
    width: 40vw;
    color:black;
    @media (max-width: 768px){
        flex-direction: column;
        line-height: 8vh;
    }
`