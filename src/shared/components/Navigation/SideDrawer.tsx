import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import styled from '../../../styled'

type Props = {
  children: ReactNode
  onClick: () => void
  show: boolean
}

const SideDrawer = (props: Props) => {
  const content = (
    <CSSTransition in={props.show} timeout={200} classNames="slide-in-left" mountOnEnter unmountOnExit>
      <Drawer onClick={props.onClick}>{props.children}</Drawer>
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
`

export default SideDrawer
