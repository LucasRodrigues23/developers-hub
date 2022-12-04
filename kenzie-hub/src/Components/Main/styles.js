import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    & > h2 {
        color: var(--color-grey-0);
        font-weight: 700;
        font-size: 18px;
    }

    & > p {
        color: var(--color-grey-0);
        font-weight: 400;
        font-size: 16px;
    }
`