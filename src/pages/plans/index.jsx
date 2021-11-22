import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import bg from '../../assets/images/plan.jpg';
import UserContext from '../../contexts/userContext';

export default function Plans() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function goToCreateNewPlan(planType) {
    setUser({ ...user, plan_type: planType, plan_day: '' });
    navigate('/sign-plan');
  }

  return (
    <S.PageBody>
      <S.TopContent>
        <h2>
          Bom te ver por aqui,
          {' '}
          {user.name}
          .
        </h2>
        <p>Você ainda não assinou um plano, que tal começar agora?</p>
      </S.TopContent>
      <S.PlanContainer>
        <h3>Plano semanal</h3>
        <img src={bg} alt="background" />
        <h4>Ideal para quem quer exercer a gratidão todos os dias.</h4>
        <button type="button" onClick={() => goToCreateNewPlan('Semanal')}>Assinar</button>
      </S.PlanContainer>

      <S.PlanContainer>
        <h3>Plano mensal</h3>
        <img src={bg} alt="background" />
        <h4>Ideal para quem está começando agora.</h4>
        <button type="button" onClick={() => goToCreateNewPlan('Mensal')}>Assinar</button>
      </S.PlanContainer>

    </S.PageBody>
  );
}
