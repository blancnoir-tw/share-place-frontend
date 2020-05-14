import React from 'react'
import styled from '../../styled'
import { Link } from 'react-router-dom'

import { User } from '../types'
import Avator from '../../shared/components/UIElements/Avator'
import Box from '../../shared/components/UIElements/Box'
import Card from '../../shared/components/UIElements/Card'

const UserItem: React.FC<User> = ({ id, image, name, placeCount }) => {
  return (
    <Item>
      <Card>
        <Link to={`/${id}/places`}>
          <Avator image={image} alt={name} size="4rem" />
          <Box ml={1}>
            <AvatorName>{name}</AvatorName>
            <h3>
              {placeCount} {placeCount === 1 ? 'Place' : 'Places'}
            </h3>
          </Box>
        </Link>
      </Card>
    </Item>
  )
}

const Item = styled.li`
  width: 20rem;
  height: 6rem;

  a {
    display: flex;
    align-items: center;
    padding: 1rem;
    color: ${props => props.theme.color.black};
  }

  a:hover,
  a:active {
    background: ${props => props.theme.color.secondary.light};
  }

  :hover h2,
  :active h2,
  :hover h3,
  :active h3 {
    color: ${props => props.theme.color.white};
  }
`

const AvatorName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.color.secondary.main};
`

export default UserItem
