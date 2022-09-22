import React from "react";
import * as S from '../Styles/StyleHeader'
export default function Header(){
    return(
        <S.Fundo>
            <S.ContainerHome>
                <h2>RC</h2>
                <nav>
                    <S.UlHome>
                        <li>ABOUT</li>
                        <li>RECIPES</li>
                        <li>SUBSCRIBE</li>
                    </S.UlHome>
                </nav>
            </S.ContainerHome>
            <S.H1>RECIPES</S.H1>
        </S.Fundo>
    )
}
