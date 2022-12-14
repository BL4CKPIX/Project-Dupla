import React from "react";
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`

 
export default function App(){

  return(
    <div>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer/>
    </div>
  )

}

