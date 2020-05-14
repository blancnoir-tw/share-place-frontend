import React from 'react'

import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/utils/validator'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import Box from '../../shared/components/UIElements/Box'
import Card from '../../shared/components/UIElements/Card'
import { useForm } from '../../shared/hooks/form-hook'

const NewPlace: React.FC = () => {
  const { formState, inputHandler } = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
      address: {
        value: '',
        isValid: false,
      },
    },
    false
  )

  const placeSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formState.inputs) // TODO: send backend
  }

  return (
    <Card p={1} mx="auto" maxWidth="40rem">
      <form onSubmit={placeSubmitHandler}>
        <Input
          inputId="title"
          type="text"
          label="Title"
          element="input"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
          mb={0.5}
        />
        <Input
          inputId="description"
          label="Description"
          element="textarea"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (at least 5 charaters)."
          onInput={inputHandler}
          mb={0.5}
        />
        <Input
          inputId="address"
          type="text"
          label="Address"
          element="input"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid address."
          onInput={inputHandler}
          mb={0.5}
        />
        <Box textAlign="right">
          <Button type="submit" disabled={!formState.isValid}>
            ADD PLACE
          </Button>
        </Box>
      </form>
    </Card>
  )
}

export default NewPlace
