import React from 'react'

import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/utils/validator'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import Form from '../../shared/components/FormElements/Form'
import { useForm } from '../../shared/hooks/form-hook'

const NewPlace = () => {
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
    <Form onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        type="text"
        label="Title"
        element="input"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="description"
        label="Description"
        element="textarea"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 charaters)."
        onInput={inputHandler}
      />
      <Input
        id="address"
        type="text"
        label="Address"
        element="input"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </Form>
  )
}

export default NewPlace
