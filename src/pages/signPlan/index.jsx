/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import * as S from './style';
import bg from '../../assets/images/myplan.jpg';
import UserContext from '../../contexts/userContext';
import { getProductsList } from '../../services/plan.api';
import useAuthConfig from '../../hooks/useAuth';

export default function SignPlan() {
  const { user } = useContext(UserContext);

  const headers = useAuthConfig();

  const [enabledPlanDropdown, setEnabledPlanDropdown] = useState(false);
  const [enabledDeliveryDropdown, setEnabledDeliveryDropdown] = useState(false);
  const [plan, setPlan] = useState(user.plan_type);
  const [delivery, setDelivery] = useState(user.plan_day);
  const [products, setProducts] = useState([]);
  const [isStep1, setIsStep1] = useState(true);
  const [selectedProducts, setSelectProducts] = useState({});

  useEffect(() => {
    getProductsList(headers).then((res) => {
      setProducts(res.data);
    }).catch((error) => {
      console.log(error);
    });
  }, [products, plan, delivery]);

  const togglePlanDropdown = () => {
    setEnabledPlanDropdown(!enabledPlanDropdown);
  };

  const toggleDeliveryDropdown = () => {
    setEnabledDeliveryDropdown(!enabledDeliveryDropdown);
  };

  const updateSelectedProducts = (product) => {
    if (selectedProducts.product) {
      selectedProducts.product = false;
    } else {
      selectedProducts.product = true;
    }
    setSelectProducts(...selectedProducts);
  };

  const handleSignButton = () => {
    if (isStep1) {
      //
    }
  };

  return (
    <S.PageBody>
      <S.TopContent>
        <h2>Bom te ver por aqui, @User.</h2>
        <p>“Agradecer é arte de atrair coisas boas”</p>
      </S.TopContent>
      <S.PlanContainer>
        <img src={bg} alt="background" />

        {(isStep1) ? (
          <S.Form>
            <S.Dropdown onClick={togglePlanDropdown}>
              <S.DropdownContent>
                <S.DropwdownFront>{`Plano: ${plan}`}</S.DropwdownFront>
                {enabledPlanDropdown ? (
                  <>
                    <S.DropwdownOption onClick={() => {
                      if (plan === 'Semanal') setDelivery('');
                      setPlan('Mensal');
                    }}
                    >
                      Mensal
                    </S.DropwdownOption>

                    <S.DropwdownOption onClick={() => {
                      if (plan === 'Mensal') setDelivery('');
                      setPlan('Semanal');
                    }}
                    >
                      {' '}
                      Semanal
                    </S.DropwdownOption>
                  </>
                ) : (
                  ''
                )}
              </S.DropdownContent>
            </S.Dropdown>
            <S.Dropdown onClick={toggleDeliveryDropdown}>
              <S.DropdownContent>
                <S.DropwdownFront>{`Entrega: ${delivery}`}</S.DropwdownFront>
                {enabledDeliveryDropdown ? (
                  <>
                    <S.DropwdownOption onClick={() => setDelivery((plan === 'Semanal') ? 'Segunda' : 'Dia 01')}>
                      {(plan === 'Semanal') ? 'Segunda' : 'Dia 01'}
                    </S.DropwdownOption>

                    <S.DropwdownOption onClick={() => setDelivery((plan === 'Semanal') ? 'Quarta' : 'Dia 10')}>
                      {(plan === 'Semanal') ? 'Quarta' : 'Dia 10'}
                    </S.DropwdownOption>

                    <S.DropwdownOption onClick={() => setDelivery((plan === 'Semanal') ? 'Sexta' : 'Dia 20')}>
                      {(plan === 'Semanal') ? 'Sexta' : 'Dia 20'}
                    </S.DropwdownOption>
                  </>
                ) : (
                  ''
                )}
              </S.DropdownContent>
            </S.Dropdown>

            <S.SelectBox>
              Quero Receber
              <S.SelectBoxOption>
                {products.length > 0 && products.map((p) => (
                  <label htmlFor={p.product_id}>
                    {`${p.product_name}:`}
                    <input
                      type="checkbox"
                      id={p.product_id}
                      name={p.product_name}
                      onClick={() => updateSelectedProducts(p.product_name)}
                    />
                  </label>
                ))}

                <label htmlFor="incensos">
                  Incensos:
                  <input type="checkbox" id="incensos" name="incensos" />
                </label>

                <label htmlFor="produtos-organicos">
                  Produtos orgânicos
                  <input
                    type="checkbox"
                    id="produtos-organicos"
                    name="produtos-organicos"
                  />
                </label>
              </S.SelectBoxOption>
            </S.SelectBox>
          </S.Form>
        )
          : (
            <S.Form>
              <input type="text" placeholder="Nome completo" id="nome-completo" />
              <input type="text" placeholder="Endereço de entrega" id="endereco" />
              <input type="text" placeholder="CEP" id="cep" />
              <S.Flex>
                <input type="text" placeholder="Cidade" id="cidade" />
                <input type="text" placeholder="Estado" id="Estado" />
              </S.Flex>
            </S.Form>
          )}
      </S.PlanContainer>
      <button type="button" onClick={() => setIsStep1(!isStep1)}>Assinar</button>

    </S.PageBody>
  );
}
