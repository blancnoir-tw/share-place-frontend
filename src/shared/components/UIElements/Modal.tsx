import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'

import styled from '../../../styled'
import Backdrop from './Backdrop'

type Props = {
  children: ReactNode | string
  footer: ReactNode | string
  footerAlign?: 'left' | 'right'
  header: ReactNode | string
  isShow: boolean
  onCancel: () => void
  onSubmit?: () => void
}

const ModalOverlay = (props: Props) => {
  const content = (
    <Box>
      <Header>
        <h2>{props.header}</h2>
      </Header>
      <form onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault()}>
        <Content>{props.children}</Content>
        <Footer className={`footer-${props.footerAlign}`}>{props.footer}</Footer>
      </form>
    </Box>
  )

  return ReactDOM.createPortal(content, document.getElementById('modal-hook') as Element)
}

const Modal = (props: Props) => {
  return (
    <React.Fragment>
      {props.isShow && <Backdrop onClick={props.onCancel} />}
      <CSSTransition in={props.isShow} mountOnEnter unmountOnExit timeout={200} classNames="modal">
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  )
}

const Box = styled.div`
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

const Content = styled.div`
  padding: 1rem;
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
