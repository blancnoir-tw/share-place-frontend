import React from 'react'

import styled from '../../styled'
import { Place } from '../types'
import PlaceItem from './PlaceItem'
import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/FormElements/Button'

type Props = {
  places: Place[]
}

const PlaceList = (props: Props) => {
  if (props.places.length === 0) {
    return (
      <Box>
        <Card>
          <CardTitle>No places found. Maybe create one?</CardTitle>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </Box>
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

const Box = styled.div`
  text-align: center;
`

const CardTitle = styled.h2`
  font-weight: bold;
  padding: 1rem 0;
`

const List = styled.ul`
  margin: 1rem auto;
  max-width: 40rem;
  width: calc(100% - 2rem);
`

export default PlaceList
