import React from 'react'
import styled from '../../../styled'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
  return (
    <List>
      <Item>
        <NavLink to="/" exact>
          All Users
        </NavLink>
      </Item>
      <Item>
        <NavLink to="/u1/places">My Places</NavLink>
      </Item>
      <Item>
        <NavLink to="/places/new">Add Place</NavLink>
      </Item>
      <Item>
        <NavLink to="/auth">Authenticate</NavLink>
      </Item>
    </List>
  )
}

const List = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const Item = styled.li`
  margin: 1rem;

  a {
    border: 1px solid transparent;
    color: ${props => props.theme.color.white};
    padding: 0.5rem;
    text-decoration: none;
  }

  a:hover,
  a.active {
    border-bottom-color: ${props => props.theme.color.secondary.main};
  }

  @media (min-width: 768px) {
    margin: 0 0.5rem;
  }
`

export default NavLinks
