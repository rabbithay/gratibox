import styled from 'styled-components';

export const PageBody = styled.div`   
    width: 100vw;
    height: 100vh;
    padding: 100px 8px 20px 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
`;

export const TopContent = styled.div`  
    display: inline-flex;
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    p{
        text-align: left;
    }
`;

export const PlanContainer = styled.div`
    height: 100vw;
    width: 100%;
    border-radius: 25px;
    position: relative;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
    background-color: #e1d8ab;
    padding: 16px;
    gap: 30px;
    img {
        position: absolute;
        top: 0;
        width: 100%;
    }
    button {
        font-size: 24px;
    }
`;
