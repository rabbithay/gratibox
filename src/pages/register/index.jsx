/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import * as S from './style';
import { createNewUser } from '../../services/user.api';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setEmailIsValid(
      !!email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      ),
    );

    // senha deve ser maior que 8 e menor que 15 caracteres.
    // deve ter letras maiusculas e minusculas, caractere numerico e caractere especial.
    setPasswordIsValid(password.length >= 8 && password.length <= 15 && !!password.match(/[A-Z]/) && !!password.match(/[a-z]/) && !!password.match(/[0-9]/) && !!password.match(/\W/));

    setPasswordsMatch(!!(password === repeatPassword));
  }, [email, password, repeatPassword]);

  function submitLogin(e) {
    e.preventDefault();
    if (!!name && emailIsValid && passwordIsValid && passwordsMatch) {
      setIsLoading(true);

      const body = {
        name, email, password,
      };
      createNewUser(body).then((res) => {
        console.log(res);
        navigate('/');
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        setIsLoading(false);
      });
    }
  }

  return (
    <S.PageBody>
      <S.TopContent>
        <h1>Bem vinde ao GratiBox</h1>
        <form>
          <input type="text" placeholder="Como quer ser chamade" onChange={(e) => setName(e.currentTarget.value)} />
          <input type="text" placeholder="Email" onChange={(e) => setEmail(e.currentTarget.value)} />
          <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.currentTarget.value)} />
          <input type="password" placeholder="Confirmar senha" onChange={(e) => setRepeatPassword(e.currentTarget.value)} />
        </form>
      </S.TopContent>
      <S.BottomContent>
        <button type="submit" onClick={submitLogin}>
          {(isLoading)
            ? <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
            : 'Cadastrar'}
        </button>
      </S.BottomContent>
    </S.PageBody>
  );
}
