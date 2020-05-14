import React from 'react'
import styled from '../../../styled'

const MainHeader: React.FC = ({ children }) => {
  return <Header>{children}</Header>
}

const Header = styled.header`
  align-items: center;
  background: ${props => props.theme.color.primary.main};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  height: 3.5rem;
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
