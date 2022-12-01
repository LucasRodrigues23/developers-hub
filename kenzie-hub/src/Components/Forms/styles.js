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

    & > div {
        display: flex;
        flex-direction: column;
        width: 95%;
        gap: 10px;
    }

    & > span {
        color: var(--color-grey-1);
    }
`