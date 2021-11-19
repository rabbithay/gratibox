import { createGlobalStyle } from 'styled-components';

const Theme = createGlobalStyle`
    :root {
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
        background: var(--background);
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
        font-size: 18px;
        line-height: 21px;
        color: var(--secondary);
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
            color: var(--primary);
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

`;

export default Theme;
