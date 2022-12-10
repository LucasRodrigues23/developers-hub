import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 118px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-grey-0);

    & > div {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    & > div > p {
        color: var(--color-grey-1);
    }
`
