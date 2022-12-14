import styled from 'styled-components';

export const RegisterBoxLogo = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;
    width: 95%;
    max-width: 370px;
    margin-top: 50px;

    & > a {
    background: var(--color-grey-2);
    border: 1px solid var(--color-grey-2);
    border-radius: 4px;
    color: #F8F9FA;
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