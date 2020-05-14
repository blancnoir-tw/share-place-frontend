import React from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import styled from '../../../styled'

type Props = {
  onClick: () => void
  show: boolean
}

const SideDrawer: React.FC<Props> = ({ show, onClick, children }) => {
  const content = (
    <CSSTransition in={show} timeout={200} classNames="slide-in-left" mountOnEnter unmountOnExit>
      <Drawer onClick={onClick}>{children}</Drawer>
    </CSSTransition>
  )

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook') as Element)
}

const Drawer = styled.aside`
  background: ${props => props.theme.color.primary.main};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 70%;
  z-index: 100;

  &.slide-in-left-enter {
    transform: translateX(-100%);
  }

  &.slide-in-left-enter-active {
    transform: translateX(0);
    opacity: 1;
    transition: all 200ms;
  }

  &.slide-in-left-exit {
    transform: translateX(0%);
    opacity: 1;
  }

  &.slide-in-left-exit-active {
    transform: translateX(-100%);
    opacity: 0;
    transition: all 200ms;
  }
`

export default SideDrawer
