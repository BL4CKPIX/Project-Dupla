import styled from "styled-components";

export const ContainerMain = styled.div`
  background-color: #f2f4f1;
  height: 260vh;
  @media(max-width: 768px){
    
  }
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
  line-height: 10vh;
  @media (max-width: 768px){
    font-size:28px;
    color:#373737;

  }

  div {
    background-color: black;
    height: 0.5vh;
    width: 5vw;
    @media (max-width: 768px){
      width:10vh;
    background-color:#373737;
    }
  }
`;

export const ContainerFood = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media(max-width: 768px){
    display:flex;
    flex-direction:column;
    
  }
`;

export const Caixa = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 60vh;
  box-shadow: 0px 2px 2px 0 gray;
  p {
    font-weight: bold;
    font-family: "Caros Soft", sans-serif;
    @media (max-width: 768px){
      width: 40vh;
    }
  }
`;

export const ImgMain = styled.img`
  width: 25vw;
  @media (max-width: 768px){
    width:80%;
    p{
      margin-right:15vh;
    }
    :hover{
      transition: ease-in-out 1s;
   
    }
  }
  :hover {
    transition: ease-in-out 0.5s;
    width: 27vw;
  }
  
`;

export const Linha = styled.div`
  background-color: black;
  height: 0.5vh;
  width: 5vw;
`;
export const Section2 = styled.section`
  margin-top: 12vw;
  display: flex;
`;
export const Img2 = styled.img`
  width: 100vh;
  height: 36.8vw;
`;

export const Texto2 = styled.h2`
  position: relative;
  left: 22vw;
  top: 10vh;
`;
export const lorem = styled.p`
  width: 30%;
  height: 10px;
  font-size: 13.5px;
  margin-top: 13vw;
  margin-left: 0vw;
  font-family: "Caros Soft", sans-serif;
`;
export const Linha3 = styled.div`
  background-color: #373737;
  height: 0.5vh;
  width: 4vw;
  position: relative;
  top: 8vw;
  left: 34vh;
`;
export const Section3 = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #dfe4de;
  width: 100%;
  height: 60vh;
  border:solid;
  align-items:center;
  justify-content:space-evenly;
`;

export const Sub = styled.h4`
  justify-content: center;
  font-size: 30px;
  color: #373737;
  font-family: "Caros Soft", sans-serif;
  font-weight: 300;
  text-align: center;
  line-height:5vh;
`;
export const Sing = styled.p`
  font-family: "Caros Soft", sans-serif;
  justify-content: center;
  font-size: 27px;
  font-weight: 200;

`;

export const Email = styled.input`
  display: flex;
  width: 30vw;
  height: 10vh;
  border-radius: 1px;
  border: none;
  justify-content: center;
  
  
`;

export const Butao = styled.button`
  width: 20vh;
  height: 8vh;
  z-index: 2;
  color: #373737;
  opacity: 1;
  border: 5px solid #373737;
  
`;
