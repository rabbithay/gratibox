import React from 'react';
import * as S from './style';

export default function Register() {
  return (
    <S.PageBody>
      <S.TopContent>
        <h1>Bem vinde ao GratiBox</h1>
        <form>
          <input placeholder='Nome' />
          <input placeholder='Email' />
          <input placeholder='Senha' />
          <input placeholder='Confirmar senha' />
        </form>
      </S.TopContent>
      <S.BottomContent>
        <button type='submit'>Cadastrar</button>
      </S.BottomContent>
    </S.PageBody>
  );
}
