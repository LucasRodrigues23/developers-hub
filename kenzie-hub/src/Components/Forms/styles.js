import styled from'styled-components'

export const FormStyle = styled.form`
    width: 95%;
    max-width: 370px;
    background-color: var(--color-grey-3);
    border-radius: 4px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 42px 22px;
    gap: 22px;
    margin-top: 35px;
    margin-bottom: 50px;

    & > div {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 10px;
    }

    & > span {
        color: var(--color-grey-1);
        font-weight: 600;
        font-size: 12px;
    }

    & > h2 {
        font-weight: 700;
        font-size: 18px;
        color: var(--color-grey-0);
    }

    & > p {
        font-weight: 400;
        font-size: 12px;
        color: var(--color-negative);
    }

    & > a {
    width: 100%;
    background: var(--color-grey-1);
    border: 1px solid var(--color-grey-1);
    border-radius: 4px;
    color: var(--color-grey-0);
    text-align: center;

    padding: 10.5px;
    font-weight: 500;
    font-size: 16px;

    :hover {
        background: var(--color-grey-2);
        border: 1px solid var(--color-grey-2);
    }
}
`