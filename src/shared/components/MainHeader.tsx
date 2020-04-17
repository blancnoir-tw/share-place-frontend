import React, { ReactNode } from 'react'
import styled from '../../styled'

type Props = {
  children: ReactNode
}

const MainHeader = (props: Props) => {
  return <Header>{props.children}</Header>
}

const Header = styled.header`
  align-items: center;
  background: ${props => props.theme.color.primary.main};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  height: 4rem;
  left: 0;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`

export default MainHeader
