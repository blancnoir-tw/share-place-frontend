import React from 'react'
import styled from '../../styled'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

import MainHeader from './MainHeader'
import NavLinks from './NavLinks'

const MainNavigation = () => {
  return (
    <MainHeader>
      <Button>
        <FaBars color="#fafafa" size="1.4rem" />
      </Button>
      <Title>
        <Link to="/">Share Place Demo</Link>
      </Title>
      <Nav>
        <NavLinks />
      </Nav>
    </MainHeader>
  )
}

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: center;
  height: 3rem;
  justify-content: center;
  margin-right: 2rem;
  outline: none;
  width: 3rem;

  @media (min-width: 768px) {
    display: none;
  }
`

const Title = styled.h1`
  color: ${props => props.theme.color.white};
  font-size: 1.4rem;

  a {
    color: ${props => props.theme.color.white};
    text-decoration: none;
  }
`

const Nav = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`

const Drawer = styled.div`
  height: 100%;
`

export default MainNavigation
