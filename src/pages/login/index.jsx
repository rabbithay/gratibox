import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button';
import * as S from './style';

export default function Login() {
  return (
    <S.PageBody>
      <S.TopContent>
        <h1>Bem vinde ao GratiBox</h1>
        <form>
          <input placeholder='Email' />
          <input placeholder='Senha' />
        </form>
      </S.TopContent>
      <S.BottomContent>
        <button type='submit'>Login</button>
        <Link to='/register'>Ainda não sou grate</Link>
      </S.BottomContent>
    </S.PageBody>
  );
}
