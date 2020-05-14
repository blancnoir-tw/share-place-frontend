import React, { useContext } from 'react'
import styled from '../../../styled'
import { NavLink } from 'react-router-dom'

import { AuthContext } from '../../context/auth-context'

const NavLinks = () => {
  const auth = useContext(AuthContext)

  return (
    <List>
      <Item>
        <NavLink to="/" exact>
          All Users
        </NavLink>
      </Item>
      {auth.isLoggedIn && (
        <Item>
          <NavLink to="/u1/places">My Places</NavLink>
        </Item>
      )}
      {auth.isLoggedIn && (
        <Item>
          <NavLink to="/places/new">Add Place</NavLink>
        </Item>
      )}
      {!auth.isLoggedIn && (
        <Item>
          <NavLink to="/auth">Authenticate</NavLink>
        </Item>
      )}
      {auth.isLoggedIn && (
        <Item>
          <Logout color="is-inverse" onClick={auth.logout}>
            LOGOUT
          </Logout>
        </Item>
      )}
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
  }

  a:hover,
  a.active {
    border-bottom-color: ${props => props.theme.color.secondary.main};
  }

  @media (min-width: 768px) {
    margin: 0 0.5rem;
  }
`

const Logout = styled.button`
  border: 1px solid transparent;
  color: ${props => props.theme.color.white};
  padding: 0.5rem;
  text-decoration: none;
  font-size: 1rem;
  background: ${props => props.theme.color.primary.main};

  :hover {
    border-bottom-color: ${props => props.theme.color.secondary.main};
  }
`

export default NavLinks
