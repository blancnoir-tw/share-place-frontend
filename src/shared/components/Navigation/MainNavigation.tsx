import React, { useState } from 'react'
import styled from '../../../styled'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

import MainHeader from './MainHeader'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'
import BackDrop from '../UIElements/Backdrop'

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)

  const openDrawerHandler = () => {
    setDrawerIsOpen(true)
  }

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false)
  }

  return (
    <React.Fragment>
      {drawerIsOpen && <BackDrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <NavLinks />
      </SideDrawer>
      <MainHeader>
        <Button onClick={openDrawerHandler}>
          <FaBars color="#fafafa" size="1.4rem" />
        </Button>
        <Title>
          <Link to="/">Share Place Demo</Link>
        </Title>
        <Nav>
          <NavLinks />
        </Nav>
      </MainHeader>
    </React.Fragment>
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

export default MainNavigation
