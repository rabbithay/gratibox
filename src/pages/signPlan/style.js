import styled from 'styled-components';

export const PageBody = styled.div`   
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    padding: 80px 8px 40px 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 40px;
`;

export const TopContent = styled.div`  
    display: inline-flex;
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    max-width: 350px;
    p{
        text-align: left;
    }
`;

export const PlanContainer = styled.div`
    height: auto;
    width: 100%;
    max-width: 550px;
    border-radius: 25px;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-start;
    background-color: var(--text);
    img {
        border-radius: 25px;
        width: 100%;
    }
    button {
        font-size: 24px;
    }
    span {
        color: var(--detail);
    }
    select {
        width: 100%;
    }
   
`;

export const Form = styled.div`
    padding: 0 37px 11px 27px;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: 7px;
    border-radius: 5px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #4D65A8;
    input {
        height: 44px;
        background: rgb(224, 209, 237);    
        padding: 9px 12px;
        display: flex;
        align-items: center;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: #4D65A8;
    }
`;

export const Dropdown = styled.div`
    height: 44px;
    background: rgb(224, 209, 237);
    border-radius: 5px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #4D65A8; 
    width: 100%;
`;

export const DropdownButton = styled.div`
    display: flex;
    border: none;
    justify-content: space-between;
`;

export const DropdownContent = styled.div`
    height: auto;
    background: rgb(224, 209, 237);
    border-radius: 5px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #4D65A8; 
    width: 100%;

`;
export const DropwdownFront = styled.div`
    height: 44px;
    background: rgb(224, 209, 237);    
    padding: 9px 12px;
    display: flex;
    align-items: center;
`;

export const DropwdownOption = styled.div`
    height: 44px;
    background: rgb(224, 209, 237);
    padding: 9px 12px;
    display: flex;
    align-items: center;
    z-index: 900;
    position: sticky;
`;

export const SelectBox = styled.div`
    width: 100%;
    height: auto;
    background: rgb(224, 209, 237);
    border-radius: 5px; 
    padding: 15px 12px;
`;

export const SelectBoxOption = styled.div`
    input{
        width: 20px;
        height: 20px;
        background: #FFFFFF;
        border: none;
    }
    label {
        font-weight: normal;
    }
    div {
        display: flex;
    }
`;

export const Flex = styled.div`
    display: inline-flex;
    flex-direction: row;
    gap: 13px;
`;

export const StateDropdown = styled.div`
    height: 44px;
    background: rgb(224, 209, 237);    
    padding: 9px 12px;
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #4D65A8;
    width: 110px;
    border-radius: 10px;
`;
