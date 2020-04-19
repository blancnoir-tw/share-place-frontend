import React from 'react'

import styled from '../../styled'
import { Place } from '../types'
import PlaceItem from './PlaceItem'

type Props = {
  places: Place[]
}

const PlaceList = (props: Props) => {
  if (props.places.length === 0) {
    return (
      <div>
        <h2>No places found. Maybe create one?</h2>
        <button>Share Place</button>
      </div>
    )
  }

  return (
    <List>
      {props.places.map(place => (
        <PlaceItem
          address={place.address}
          location={place.location}
          creator={place.creator}
          description={place.description}
          id={place.id}
          imageUrl={place.imageUrl}
          key={place.id}
          title={place.title}
        />
      ))}
    </List>
  )
}

const List = styled.ul`
  margin: 1rem auto;
  max-width: 40rem;
  width: calc(100% - 2rem);
`

export default PlaceList
