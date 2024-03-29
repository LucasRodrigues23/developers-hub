import styled from 'styled-components';

export const Main = styled.main`
    width: 95%;
    max-width: 800px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0, 0.5);
    
    & > h2 {
        color: var(--color-grey-0);
        font-weight: 700;
        font-size: 18px;
    }
`