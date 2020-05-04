import React, { useCallback, useReducer } from 'react'
import styled from '../../styled'

import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/utils/validator'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'

type InputId = 'title' | 'description'

type State = {
  inputs: {
    [inputId in InputId]: {
      value: string
      isValid: boolean
    }
  }
  isValid: boolean
}

type Action = {
  type: 'INPUT_CHANGE'
  inputId: string
  isValid: boolean
  value: string
}

const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true
      const inputIdArray = Object.keys(state.inputs) as InputId[]
      inputIdArray.forEach(inputId => {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid
        }
      })

      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      }
    default:
      return state
  }
}

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    isValid: false,
  })

  const inputHandler = useCallback((id: string, value: string, isValid: boolean) => {
    dispatch({ type: 'INPUT_CHANGE', value, isValid, inputId: id })
  }, [])

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

const Form = styled.form`
  position: relative;
  list-style: none;
  margin: 0 auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
  background: white;
`

export default NewPlace
