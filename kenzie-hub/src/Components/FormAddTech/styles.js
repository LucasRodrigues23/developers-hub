import styled from "styled-components";

export const FormTechStyled = styled.form`
    width: 90%;
    background-color: var(--color-grey-3);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 0;
    gap: 22px;

    & > span {
        color: var(--color-grey-1);
        font-weight: 600;
        font-size: 12px;
    }

    & > p {
        font-weight: 400;
        font-size: 12px;
        color: var(--color-negative);
    }
`