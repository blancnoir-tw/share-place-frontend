import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { User } from '../types'
import Avator from '../../shared/components/Avator'
import Card from '../../shared/components/Card'

const UserItem = ({ id, image, name, placeCount }: User) => {
  return (
    <List>
      <Card>
        <Link to={`/${id}/places`}>
          <Avator image={image} alt={name} size="4rem" />
          <ListInfo>
            <ListName>{name}</ListName>
            <h3>
              {placeCount} {placeCount === 1 ? 'Place' : 'Places'}
            </h3>
          </ListInfo>
        </Link>
      </Card>
    </List>
  )
}

const List = styled.li`
  width: 20rem;
  height: 6rem;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1rem;
    color: #fafafa;
    background: #333;
  }

  a:hover,
  a:active {
    background: #ec407a;
  }

  :hover h2,
  :active h2,
  :hover h3,
  :active h3 {
    color: #fafafa;
  }
`

const ListInfo = styled.div`
  margin-left: 1rem;
`

const ListName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #ec407a;
`

export default UserItem
