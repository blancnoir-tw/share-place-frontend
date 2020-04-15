import React from 'react'
import styled from '@emotion/styled'

import { User } from '../types'
import UserItem from './UserItem'

type Props = {
  users: User[]
}

const UserList = ({ users }: Props) => {
  if (users.length === 0) {
    return (
      <div>
        <h2>No users found.</h2>
      </div>
    )
  }

  return (
    <List>
      {users.map(user => (
        <UserItem key={user.id} id={user.id} image={user.image} name={user.name} placeCount={user.placeCount} />
      ))}
    </List>
  )
}

const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem;
`

export default UserList
