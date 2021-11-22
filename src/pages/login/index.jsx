/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { login } from '../../services/user.api';
import * as S from './style';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailIsValid, setEmailIsValid] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setEmailIsValid(
      !!email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      ),
    );
  }, [email]);

  function submitLogin(e) {
    e.preventDefault();
    if (emailIsValid) {
      setIsLoading(true);

      const body = {
        email, password,
      };
      login(body).then((res) => {
        if (res.data.plan_status) navigate('/plan-detail');
        else navigate('/plans');
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
          <input type="text" placeholder="Email" onChange={(e) => setEmail(e.currentTarget.value)} />
          <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.currentTarget.value)} />
        </form>
      </S.TopContent>
      <S.BottomContent>
        <button type="submit" onClick={submitLogin}>
          {(isLoading)
            ? <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
            : 'Login'}
        </button>
        {' '}
        <Link to="/register">Ainda não sou grate</Link>
      </S.BottomContent>
    </S.PageBody>
  );
}
