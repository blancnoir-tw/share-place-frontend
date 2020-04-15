import React from 'react'

import { User as TUser } from '../types'
import UsersList from '../components/UsersList'

const User = () => {
  const USERS: TUser[] = [{ id: 'u1', image: 'https://source.unsplash.com/random', name: 'Tatsuya', placeCount: 3 }]

  return <UsersList users={USERS} />
}

export default User
