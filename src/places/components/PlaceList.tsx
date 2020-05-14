import React from 'react'
import styled from '../../styled'

import { Place } from '../types'
import PlaceItem from './PlaceItem'
import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/FormElements/Button'

type Props = {
  places: Place[]
}

const PlaceList: React.FC<Props> = ({ places }) => {
  if (places.length === 0) {
    return (
      <Card p={1} textAlign="center" maxWidth="20rem" mx="auto">
        <CardTitle>No places found. Maybe create one?</CardTitle>
        <Button to="/places/new">Share Place</Button>
      </Card>
    )
  }

  return (
    <List>
      {places.map(place => (
        <PlaceItem
          address={place.address}
          location={place.location}
          creator={place.creator}
          description={place.description}
          placeId={place.placeId}
          imageUrl={place.imageUrl}
          key={place.placeId}
          title={place.title}
        />
      ))}
    </List>
  )
}

const CardTitle = styled.h2`
  font-weight: bold;
  margin-bottom: 1rem;
`

const List = styled.ul`
  margin: 0 auto;
  max-width: 40rem;
  width: calc(100% - 2rem);
`

export default PlaceList
