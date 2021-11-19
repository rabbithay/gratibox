import React from 'react';
import * as S from './style';
import bg from '../../assets/images/homepage.jpg'
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <S.PageBody>
        <S.TopContent>
          <h1>Bem vindo ao GratiBox</h1>
          <p>Receba em casa um box com chás, produtos organicos, incensos e muito mais...</p>
        </S.TopContent>

        <S.BottomContent>
          <button type="submit">Quero começar</button>
          <Link to='/login'>Já sou grate</Link>
        </S.BottomContent>
      </S.PageBody>

      <S.SecondBg>
        <S.BackgroundImage src={bg}/>
      </S.SecondBg>
    </>
  );
}
