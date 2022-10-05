import React from 'react'
import * as S from '../Styles/StyleFooter'
import Face from '../Img/Footer/Face.png'
import Insta from '../Img/Footer/Insta.png'
import Pinterest from '../Img/Footer/Pinterest.png'
import Twitter from '../Img/Footer/Twitter.png'



export default function StyleFooter() {
  return (
   <S.sectiontoda>
    <S.Icones2>
      <S.Icons><img src={Insta} alt="" /></S.Icons>
      <S.Icons><img src={Twitter} alt="" /></S.Icons>
      <S.Icons><img src={Face} alt="" /></S.Icons>
      <S.Icons><img src={Pinterest} alt="" /></S.Icons>
    </S.Icones2>
    <nav>
      <S.About>
        <li>ABOUT</li>
        <li>RECIPES</li>
        <li>SUBSCRIBE</li>
      </S.About>
    </nav>
   </S.sectiontoda>
  )
}
