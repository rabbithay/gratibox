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
    padding: 20px;
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
   
`;

export const Date = styled.div`     
    h4{
        color: var(--detail);
    }
    margin-left: 40px;    
`;

export const Products = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    p{ 
        color: var(--detail);
        font-size: 18px;
        line-height: 21px;
        font-weight: 400;
    };
`;
