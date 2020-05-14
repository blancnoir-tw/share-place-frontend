import React from 'react'
import styled from '../../styled'

import { User } from '../types'
import UserItem from './UserItem'

type Props = {
  users: User[]
}

const UserList: React.FC<Props> = ({ users }) => {
  if (users.length === 0) {
    return (
      <NoUsers>
        <h2>No users found.</h2>
      </NoUsers>
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

const NoUsers = styled.div`
  display: flex;
  justify-content: center;

  h2 {
    font-weight: bold;
    font-size: 1.2rem;
  }
`

const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem;
`

export default UserList
