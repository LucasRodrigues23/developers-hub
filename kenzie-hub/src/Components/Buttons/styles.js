import styled, { css } from'styled-components'

export const ButtonStyled = styled.button`
    
    border-radius: 4px;
    color: var(--color-grey-0);

    

    ${({btstyle}) => {
        switch(btstyle){
            case 'primary':
                return css`
                    background: var(--color-primary);
                    border: 1px solid var(--color-primary);
                    :hover {
                             background: var(--color-primary-focus);
                             border: 1px solid var(--color-primary-focus);
                     }

                    :disabled {
                             background: var(--color-primary-negative);
                             border: 1px solid var(--color-primary-negative);
                     } 
                `
            case 'grey':
                return css`
                    background: var(--color-grey-1);
                    border: 1px solid var(--color-grey-1);
                    :hover {
                             background: var(--color-grey-2);
                             border: 1px solid var(--color-grey-2);
                     }
                ` 
                        }
    }}

    ${({btsize}) => {
        switch(btsize){
            case 'lg':
                return css`
                width: 100%;
                padding: 10.5px;
                font-weight: 500;
                font-size: 16px;
                `
            case 'md':
                return css`
                padding: 1.5px 16px;
                font-weight: 600;
                font-size: 12px;
                `    
        }
    }}

`