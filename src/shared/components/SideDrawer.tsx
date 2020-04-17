import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import styled from '../../styled'

type Props = {
  children: ReactNode
}

const SideDrawer = (props: Props) => {
  const content = <Drawer>{props.children}</Drawer>

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook') as Element)
}

const Drawer = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  height: 100vh;
  width: 70%;
  background: ${props => props.theme.color.primary.main};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`

export default SideDrawer
