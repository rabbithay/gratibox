import styled from 'styled-components';

export const PageBody = styled.div`   
    width: 100vw;
    height: 100vh;
    padding: 100px 25px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;

export const TopContent = styled.div`  
    display: inline-flex;
    flex-direction: column;
    text-align: center;
    gap: 2rem;
`;

export const BottomContent = styled.div`
    display: inline-flex;
   flex-direction: column;
   align-items: center;
   gap: 0.8rem;
   button {
       width: 240px;
       height: 56px;
       font-size: 36px;
   }
`;
