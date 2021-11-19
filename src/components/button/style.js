import styled from 'styled-components';

export const Button = styled.button`
    width: 202px;
    height: 45px;
    background-color: var(--primary);
    color: var(--text);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        background-color: var(--background);
    }
    &:active {
        background-color: var(--background);
        /* box-shadow: 0 5px #666; */
        transform: translateY(4px);
    }
`;

export const Content = styled.div``;
