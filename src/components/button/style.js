import styled from 'styled-components';

export const Button = styled.div`
    width: 202px;
    height: 45px;
    background-color: var(--primary);
    color: var(--text);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: var(--secondary);
    }
    &:active {
        background-color: var(--secondary);
        /* box-shadow: 0 5px #666; */
        transform: translateY(4px);
    }
`;

export const Content = styled.div``;
