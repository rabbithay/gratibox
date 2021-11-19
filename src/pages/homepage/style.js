import styled from 'styled-components';

export const PageBody = styled.div`   
    width: 100vw;
    height: 100vh;
    padding: 50px 10px 50px 20px;
    * {
       z-index: 8;
   }
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;

export const SecondBg = styled.div`
    background-color: var(--purple1);
    width: 100vw;
    height: 50vh;
    position: fixed;
    bottom: 0;
`;

export const BackgroundImage = styled.img`
    width: 100%;
    position: fixed;
    bottom: 20%;
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
    font-size: 18px;
   }

`;