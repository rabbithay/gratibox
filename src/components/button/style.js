import styled from 'styled-components';

export const Button = styled.button`
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
        background-color: var(--purple6);
    }
    &:active {
        background-color: var(--purple6);
        transform: translateY(4px);
    }
`;

export const Content = styled.div``;
