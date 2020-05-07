import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Place } from '../types'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import Form from '../../shared/components/FormElements/Form'
import Card from '../../shared/components/UIElements/Card'
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/utils/validator'
import { useForm } from '../../shared/hooks/form-hook'
import styled from '../../styled'

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
    title: '東京タワー2',
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

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { placeId } = useParams()

  const { formState, inputHandler, setFormData } = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    false
  )

  const identifiedPlace = PLACES.find(place => place.id === placeId)

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      )
    }
    setIsLoading(false)
  }, [setFormData, identifiedPlace])

  const placeUpdateSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formState.inputs) // TODO: send backend
  }

  if (!identifiedPlace) {
    return (
      <Box>
        <Card>
          <CardTitle>Could not find place!</CardTitle>
        </Card>
      </Box>
    )
  }

  if (isLoading) {
    return (
      <Box>
        <h2>Loading...</h2>
      </Box>
    )
  }

  return (
    <Form onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        validators={[VALIDATOR_REQUIRE()]}
        label="Title"
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        validators={[VALIDATOR_MINLENGTH(5)]}
        label="Description"
        errorText="Please enter a valid description (min 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </Form>
  )
}

const Box = styled.div`
  text-align: center;
`

const CardTitle = styled.h2`
  font-weight: bold;
  padding: 1rem 0;
`

export default UpdatePlace
