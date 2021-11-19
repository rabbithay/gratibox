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
    align-items: center;
    background-color: var(--cream1);
    padding: 28px 16px;
    gap: 15px;
    img {
        border-radius: 25px;
        width: 100%;
    }
    button {
        font-size: 24px;
    }
`;
