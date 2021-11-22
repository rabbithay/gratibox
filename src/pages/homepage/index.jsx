import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import bg from '../../assets/images/homepage.jpg';

const HomePage = function () {
  return (
    <>
      <S.PageBody>
        <S.TopContent>
          <h1>Bem vindo ao GratiBox</h1>
          <p>Receba em casa um box com chás, produtos organicos, incensos e muito mais...</p>
        </S.TopContent>

        <S.BottomContent>
          <Link to="/register"><button type="submit">Quero começar</button></Link>
          <Link to="/login">Já sou grate</Link>
        </S.BottomContent>
      </S.PageBody>

      <S.SecondBg>
        <S.BackgroundImage src={bg} />
      </S.SecondBg>
    </>
  );
};
export default HomePage;
