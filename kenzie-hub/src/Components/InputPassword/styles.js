import styled from "styled-components";

export const PasswordBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    width: 100%;
    background-color: var(--color-grey-2);
    border: 1.2182px solid var(--color-grey-2);
    border-radius: 4px;
`


export const InputPwd = styled.input`
    padding: 16px 16px;
    background-color: transparent;
    border-style: none;
    outline-style: none;
    color: var(--color-grey-0);

    ::placeholder {
        color: var(--color-grey-1);
        font-weight: 400;
        font-size: 16px;
    }

    :focus-within {
        outline-color: var(--color-grey-0);
        ::placeholder {
            color: var(--color-grey-0);
        }
    }
`

export const PwdButton = styled.button`
    background-color: transparent;
    border-style: none;
    color: var(--color-grey-1);
    margin-right: 10px;
`