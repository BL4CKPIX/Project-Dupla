import React from "react";
import * as S from '../Styles/StyleMain'
import Bolo from '../Img/Main/BoloMain.png'
import Pizza from '../Img/Main/PizzaMain.png'
import Copo from '../Img/Main/CopoMain.png'

export default function Main(){
    return(
        <S.ContainerMain>
            <S.Title>
                <h2>LATEST RECIPE</h2>
                <div></div>
            </S.Title>
            <S.ContainerFood>
                <S.Caixa>
                    <S.ImgMain src={Bolo} alt="Torta" />
                    <S.Linha></S.Linha>
                    <p>Red Valvet Cake</p>
                </S.Caixa>
                
                <S.Caixa>
                    <S.ImgMain src={Pizza} alt="Pizza" />
                    <S.Linha></S.Linha>
                    <p>Margherita Pizza</p>
                </S.Caixa>

                <S.Caixa>
                    <S.ImgMain src={Copo} alt="Copo" />
                    <S.Linha></S.Linha>
                    <p>Peanut Smoothie</p>
                </S.Caixa>
            </S.ContainerFood>
        </S.ContainerMain>
    )
}