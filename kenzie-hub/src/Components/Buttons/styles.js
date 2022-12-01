import styled from'styled-components'

export const ButtonPrimary = styled.button`
    width: 100%;
    background: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-radius: 4px;
    padding: 10.5px;
    font-weight: 500;
    font-size: 16px;
    color: var(--color-grey-0);

    :hover {
        background: var(--color-primary-focus);
        border: 1px solid var(--color-primary-focus);
    }

    :disabled {
        background: var(--color-primary-negative);
        border: 1px solid var(--color-primary-negative);
    }
`

export const ButtonGrey = styled.button`
    width: 100%;
    background: var(--color-grey-1);
    border: 1px solid var(--color-grey-1);
    border-radius: 4px;
    padding: 10.5px;
    font-weight: 500;
    font-size: 16px;
    color: var(--color-grey-0);

    :hover {
        background: var(--color-grey-2);
        border: 1px solid var(--color-grey-2);
    }

`
