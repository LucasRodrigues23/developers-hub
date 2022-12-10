import styled from'styled-components'

export const InputBox = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 10px;
`
export const LabelStyle = styled.label`
    color: var(--color-grey-0);
    font-weight: 400;
    font-size: 12px;
    align-self: flex-start;
`
export const InputStyle = styled.input`
    padding: 16px 16px;
    width: 100%;
    background-color: var(--color-grey-2);
    border: 1.2182px solid var(--color-grey-2);
    border-radius: 4px;
    color: var(--color-grey-0);

    ::placeholder {
        color: var(--color-grey-1);
        font-weight: 400;
    font-size: 16px;
    }

    :focus {
        outline-color: var(--color-grey-0);
        ::placeholder {
            color: var(--color-grey-0);
        }
    }
`

export const SelectStyle = styled.select`
    padding: 16px 16px;
    width: 100%;
    background-color: var(--color-grey-2);
    border: 1.2182px solid var(--color-grey-2);
    border-radius: 4px;;
    color: var(--color-grey-1);
    font-weight: 400;
    font-size: 16px;
  

    :focus {
        outline-color: var(--color-grey-0);
        color: var(--color-grey-0);
    }
`