import React from 'react';
import Button from '../../components/button';
import * as S from './style';
import bg from '../../assets/images/plan.jpg';

export default function SignPlan() {
  return (
    <S.PageBody>
      <S.TopContent>
        <h2>Bom te ver por aqui, @User.</h2>
        <p>Você ainda não assinou um plano, que tal começar agora?</p>
      </S.TopContent>
      <S.PlanContainer>
        <img src={bg} alt="background" />
        <h3>
          Você recebe um box por semana.
          Ideal para quem quer exercer a gratidão todos os dias.
        </h3>
        <Button text="Assinar" />
      </S.PlanContainer>
    </S.PageBody>
  );
}
