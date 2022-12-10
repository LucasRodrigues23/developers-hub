import React from 'react'
import { useOutClick } from '../../Hooks/useOutClick'
import { CloseModalButton, ModalBox, ModalTitleBox, ModalWrapper } from './styles'

export const Modal = ({children, title, setShowModal}) => {
  const modalRef = useOutClick(() => setShowModal(false))

  return (
    <ModalWrapper>
        <ModalBox  ref={modalRef}>
            <ModalTitleBox>
                <h2>{title}</h2>
                <CloseModalButton onClick={() => setShowModal(false)}>X</CloseModalButton>
            </ModalTitleBox>
            {children}
        </ModalBox>
    </ModalWrapper>
  )
}
