import React from 'react';
import * as S from './style';
import bg from '../../assets/images/myplan.jpg';

const PlanDetail = function () {
  return (
    <S.PageBody>
      <S.TopContent>
        <h2>Bom te ver por aqui, @User.</h2>
        <p>“Agradecer é arte de atrair coisas boas”</p>
      </S.TopContent>
      <S.PlanContainer>
        <h3>Detalhes da sua assinatura</h3>
        <img src={bg} alt="background" />
        <h4>
          Plano:
          {' '}
          <span>@tipo_de_plano</span>
        </h4>
        <h4>
          Data de assinatura:
          {' '}
          <span>dd/mm/aa</span>
        </h4>
        <h4>Próximas entregas:</h4>
        <S.Date><h4>dd/mm/aa</h4></S.Date>
        <S.Date><h4>dd/mm/aa</h4></S.Date>
        <S.Date><h4>dd/mm/aa</h4></S.Date>
        <S.Products>
          <p>Chás</p>
          <p>Produtos organicos</p>
          <p>Incensos</p>
        </S.Products>
      </S.PlanContainer>
    </S.PageBody>
  );
};
export default PlanDetail;
