import React from 'react';
import * as S from './style';
import bg from '../../assets/images/plan.jpg';

const Plans = function () {
  return (
    <S.PageBody>
      <S.TopContent>
        <h2>Bom te ver por aqui, @User.</h2>
        <p>Você ainda não assinou um plano, que tal começar agora?</p>
      </S.TopContent>
      <S.PlanContainer>
        <h3>Plano semanal</h3>
        <img src={bg} alt="background" />
        <h4>Ideal para quem quer exercer a gratidão todos os dias.</h4>
        <button type="submit">Assinar</button>
      </S.PlanContainer>

      <S.PlanContainer>
        <h3>Plano mensal</h3>
        <img src={bg} alt="background" />
        <h4>Ideal para quem está começando agora.</h4>
        <button type="submit">Assinar</button>
      </S.PlanContainer>

    </S.PageBody>
  );
};
export default Plans;
