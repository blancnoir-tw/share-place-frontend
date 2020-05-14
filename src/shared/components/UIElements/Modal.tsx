import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'

import styled from '../../../styled'
import Backdrop from './Backdrop'
import Box from './Box'

type Props = {
  footer: ReactNode | string
  footerAlign?: 'left' | 'right'
  header: ReactNode | string
  isShow: boolean
  onCancel: () => void
  onSubmit?: () => void
}

const ModalOverlay: React.FC<Props> = ({ children, footer, footerAlign, header, onSubmit }) => {
  const content = (
    <ModalContent>
      <Header>
        <h2>{header}</h2>
      </Header>
      <form onSubmit={onSubmit ? onSubmit : event => event.preventDefault()}>
        <Box p={1}>{children}</Box>
        <Footer className={`footer-${footerAlign}`}>{footer}</Footer>
      </form>
    </ModalContent>
  )

  return ReactDOM.createPortal(content, document.getElementById('modal-hook') as Element)
}

const Modal: React.FC<Props> = props => {
  const { onCancel, isShow } = props
  return (
    <React.Fragment>
      {isShow && <Backdrop onClick={onCancel} />}
      <CSSTransition in={isShow} mountOnEnter unmountOnExit timeout={200} classNames="modal">
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  )
}

const ModalContent = styled.div`
  background: ${props => props.theme.color.white};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 2rem);
  z-index: 100;

  &.modal-enter {
    transform: translate(-50%, -10rem);
    opacity: 0;
  }

  &.modal-enter-active {
    transform: translate(-50%, -50%);
    opacity: 1;
    transition: all 400ms;
  }

  &.modal-exit {
    transform: translate(-50%, -50%);
    opacity: 1;
  }

  &.modal-exit-active {
    transform: translate(-50%, -10rem);
    opacity: 0;
    transition: all 400ms;
  }

  @media (min-width: 768px) {
    width: 40rem;
  }
`

const Header = styled.header`
  width: 100%;
  padding: 1rem;
  background: ${props => props.theme.color.primary.light};
  color: ${props => props.theme.color.white};
`

const Footer = styled.footer`
  padding: 1rem;
  text-align: center;

  &.footer-left {
    text-align: left;
  }

  &.footer-right {
    text-align: right;
  }
`

export default Modal
