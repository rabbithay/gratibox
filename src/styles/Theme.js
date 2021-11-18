import { createGlobalStyle } from 'styled-components';

const Theme = createGlobalStyle`
    :root {
        --primary: #8C97EA ; //button purple
        --secondary: #4D65A8 ; //dark purple
        --tertiary: #E0D1ED ; //light purple
        --detail: #E63C80 ; //pink 
        --background: #6d7ce4 ;
        --text: #ffffff ;
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
            color: var(--primary)
        }
    }


`;

export default Theme;
