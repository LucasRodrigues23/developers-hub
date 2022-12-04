import styled from "styled-components";

export const NavBar = styled.div`
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;

    & > div > a {
    background: var(--color-grey-2);
    border: 1px solid var(--color-grey-2);
    border-radius: 4px;
    color: var(--color-grey-0);
    text-align: center;

    padding: 5.5px 16px;
    font-weight: 600;
    font-size: 12px;

    :hover {
        background: var(--color-grey-1);
        border: 1px solid var(--color-grey-1);
    }
}
`