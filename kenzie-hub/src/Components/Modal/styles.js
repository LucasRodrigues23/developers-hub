import styled from 'styled-components';

export const ModalWrapper = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    
    inset: 0; 
    width: 100%;
    height: 100vh;
    z-index: 99;
    background: rgba(18, 18, 20, 0.5);
    
    animation: animationModal 400ms ease forwards;

    @keyframes animationModal{
    0% {
        transform: translateY(20px);
        opacity: 0%;
    }
    100% {
        transform: translateY(0px);
        opacity: 100%;
    }
}
` 

export const ModalBox = styled.div`
    background: var(--color-grey-3);
    width: 95%;
    max-width: 369px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
`
export const ModalTitleBox = styled.div`
    width: 100%;
    background-color: var(--color-grey-2);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    gap: 10px;
    border-radius: 4px 4px 0 0;

    & > h2 {
    font-weight: 700;
    font-size: 14px;
    color: var(--color-grey-0);
    }
    
`
export const CloseModalButton = styled.button`
    background-color: transparent;
    border-style: none;
    padding: 5px;
    font-weight: 700;
    font-size: 14px;
    color: var(--color-grey-0);
`