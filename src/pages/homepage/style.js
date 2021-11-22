import styled from 'styled-components';

export const PageBody = styled.div`   
    width: 100vw;
    min-height: 100vh;
    height: auto;
    max-width: 550px;
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
    height: 48vh;
    position: fixed;
    bottom: 0;
    right: 0;
`;

export const BackgroundImage = styled.img`
    width: 100%;
    z-index: 1;
    max-width: 550px;
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
