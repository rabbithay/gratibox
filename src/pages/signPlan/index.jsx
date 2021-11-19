import React, { useState } from 'react';
import * as S from './style';
import bg from '../../assets/images/myplan.jpg';

export default function SignPlan() {

  const [enabledPlanDropdown, setEnabledPlanDropdown] = useState(false)
  const [enabledDeliveryDropdown, setEnabledDeliveryDropdown] = useState(false)

  const togglePlanDropdown = () => {
		setEnabledPlanDropdown(!enabledPlanDropdown)
	};

  const toggleDeliveryDropdown = () => {
		setEnabledDeliveryDropdown(!enabledDeliveryDropdown)
	};
  return (
    <S.PageBody>
      <S.TopContent>
        <h2>Bom te ver por aqui, @User.</h2>
        <p>“Agradecer é arte de atrair coisas boas”</p>
      </S.TopContent>
      <S.PlanContainer>
        <img src={bg} />
        <S.Form>
        <S.Dropdown onClick={togglePlanDropdown} >
          <S.DropdownContent >
            <S.DropwdownFront >
              Plano
            </S.DropwdownFront>
            { 
               (enabledPlanDropdown)  
               ?
                <>              
                <S.DropwdownOption onClick={() => alert('mensal')}>
                  Mensal
                </S.DropwdownOption>

                <S.DropwdownOption onClick={() => alert('semanal')}>
                  Semanal
                </S.DropwdownOption>		
                </>  
              : ''            
            }			
          </S.DropdownContent>          
				</S.Dropdown>
        <S.Dropdown onClick={toggleDeliveryDropdown} >
          <S.DropdownContent >
            <S.DropwdownFront >
              Entrega
            </S.DropwdownFront>
            { 
               (enabledDeliveryDropdown)  
               ?
                <>              
                <S.DropwdownOption onClick={() => alert('mensal')}>
                  Mensal
                </S.DropwdownOption>

                <S.DropwdownOption onClick={() => alert('semanal')}>
                  Semanal
                </S.DropwdownOption>		
                </>  
              : ''            
            }			
          </S.DropdownContent>          
				</S.Dropdown>

          <S.SelectBox>
          Quero Receber
          <S.SelectBoxOption>
            <div>
              <input type="checkbox" id="chas" name="chas" />
              <label for="chas">Chás</label>
            </div>
            <div>
              <input type="checkbox" id="incensos" name="incensos" />
              <label for="incensos">Incensos</label>
            </div>
            <div>
              <input type="checkbox" id="produtos-organicos" name="produtos-organicos"/>
              <label for="produtos-organicos">Produtos orgânicos</label>
            </div>
          </S.SelectBoxOption>
          
        </S.SelectBox>
       
        </S.Form>

        <S.Form>
            <input type="text" placeholder="Nome completo" id="nome-completo" />
            <input type="text" placeholder="Endereço de entrega" id="endereco" />
            <input type="text" placeholder="CEP" id="cep" />
          <S.Flex>
            <input type="text" placeholder="Cidade" id="cidade" />
            <S.StateDropdown >
            <S.DropwdownFront >
              Estado
            </S.DropwdownFront>            	
          </S.StateDropdown>   
          </S.Flex>     
        </S.Form>
      </S.PlanContainer>
      

    </S.PageBody>
  );
}
