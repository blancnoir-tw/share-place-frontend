import React from 'react'
import { useParams } from 'react-router-dom'

import PlaceList from '../components/PlaceList'
import { Place } from '../types'

const PLACES: Place[] = [
  {
    id: 'p1',
    title: '東京タワー',
    description:
      '1958年に竣工された高さ333mの電波塔。東京のシンボルとして知られ、高さ150mと250mの2つの展望台と飲食施設を備える。',
    imageUrl:
      'https://images.unsplash.com/photo-1452832258356-035b4d90096e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2852&q=80',
    address: '日本、〒105-0011 東京都港区芝公園４丁目２−８',
    location: {
      lat: 35.6585848,
      lng: 139.7432442,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: '東京タワー',
    description:
      '1958年に竣工された高さ333mの電波塔。東京のシンボルとして知られ、高さ150mと250mの2つの展望台と飲食施設を備える。',
    imageUrl:
      'https://images.unsplash.com/photo-1452832258356-035b4d90096e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2852&q=80',
    address: '日本、〒105-0011 東京都港区芝公園４丁目２−８',
    location: {
      lat: 35.6585848,
      lng: 139.7432442,
    },
    creator: 'u2',
  },
]

const UserPlaces = () => {
  const { userId } = useParams()
  const loadedPlaces = PLACES.filter(place => place.creator === userId)

  return <PlaceList places={loadedPlaces} />
}

export default UserPlaces
