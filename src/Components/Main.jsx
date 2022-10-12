import React from "react";
import * as S from '../Styles/StyleMain'
import Bolo from '../Img/Main/BoloMain.png'
import Pizza from '../Img/Main/PizzaMain.png'
import Copo from '../Img/Main/CopoMain.png'
import Colher from '../Img/Main/ImgColherMain.png'

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
            <S.Section2>
                <S.Img2 src={Colher} alt="Colher" />
                <S.Texto2>ABOUT</S.Texto2>
                <S.Linha3></S.Linha3>
                <S.lorem>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.</S.lorem>
            </S.Section2>

            <S.Section3>
            <S.Sub>SUBSCRIBE</S.Sub>
                <S.Sing>Sign up for newsletter</S.Sing>
                <S.Email type="email" name="email" id="email" placeholder="Digite seu email!" />
                <S.Butao>SUBMIT</S.Butao>
            </S.Section3>
        </S.ContainerMain>
        
    )
}