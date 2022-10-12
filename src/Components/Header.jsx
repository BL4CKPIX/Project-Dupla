import React from "react";
import * as S from '../Styles/StyleHeader'
import Menu from '../Img/Header/Menu.png'
export default function Header(){
    return(
        <S.Fundo>
            <S.ContainerHome>
                <S.H2Home>RC</S.H2Home>
                <S.Menu src={Menu} alt='Menu' />
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
