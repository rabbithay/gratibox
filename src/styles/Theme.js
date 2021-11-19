import { createGlobalStyle } from 'styled-components';

const Theme = createGlobalStyle`
    :root {
        //from darker to lighter
        --purple1: #4d65a8; //bg2
        --purple2: #566bb8;
        --purple3: #6072cb;
        --purple4: #6d7ce4; //background
        --purple5: #8c97ea;
        --purple56: #9DA0EB;
        --purple6: #ece2f4;

        --cream1: #e5cdb3;

        --green1:
        --green2:
        --green3:
        --green4:



        --primary: #9c6cea ; //button purple
        --secondary: #5d43a7 ; //dark purple
        --tertiary: #ece2f4 ; //light purple
        --detail: #E63C80 ; //pink 
        --background: #852fe4 ;
        --text: #ffffff ;
        --darkText: #604848 ; 
    }

    body {
        font-family: 'Roboto';
    }

    html {
        background: var(--purple4);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 28px;
        line-height: 33px;
        text-align: center;
        color: var(--text);
    }

    h2 {
        font-style: normal;
        font-weight: bold;
        font-size: 26px;
        line-height: 30px;
        color: var(--text);
    }

    h3 {
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        line-height: 26px;
        color: var(--purple2);
    }
    h4 {
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: var(--purple1);
    }

    p {
        font-style: normal;
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
        color: var(--text);
    }
 
    a {
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: var(--text);
        &:hover {
            color: var(--purple6);
            cursor: pointer;
        }
    }

    input {
        height: 64px;
        background: #FFFFFF;
        border: 1px solid #604848;
        border-radius: 10px;
        padding: 17px;
        font-weight: 500;
        font-size: 24px;
        width: 100%;
        margin: 4px;
        color: var(--darkText);
    }

    button {
        width: 202px;
        height: 45px;
        background-color: var(--purple5);
        color: var(--text);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        cursor: pointer;

        &:hover {
            background-color: var(--purple56);
        }
        &:active {
            background-color: var(--purple56);
            transform: translateY(4px);
        }
    }

`;

export default Theme;
