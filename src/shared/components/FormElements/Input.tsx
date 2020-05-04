import React, { useReducer, useEffect } from 'react'
import { css } from '@emotion/core'
import styled, { Theme } from '../../../styled'

import { validate, Validator } from '../../utils/validator'

type Props = {
  element: string
  id: string
  label: string
  placeholder?: string
  rows?: number
  type?: string
  errorText?: string
  validators: Validator[]
  onInput: (id: string, value: string, isvalid: boolean) => void
}

type State = {
  value: string
  isValid: boolean
  isTouched: boolean
}

type Action =
  | {
      type: 'CHANGE'
      val: string
      validators: Validator[]
    }
  | {
      type: 'TOUCH'
    }

const inputReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'CHANGE':
      return { ...state, value: action.val, isValid: validate(action.val, action.validators) }
    case 'TOUCH':
      return { ...state, isTouched: true }
    default:
      return state
  }
}

const Input = ({ id, label, element, placeholder, type, rows, errorText, validators, onInput }: Props) => {
  const [inputState, dispatch] = useReducer(inputReducer, { value: '', isValid: false, isTouched: false })

  const { value, isValid } = inputState
  useEffect(() => {
    onInput(id, value, isValid)
  }, [id, value, isValid])

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({ type: 'CHANGE', val: event.target.value, validators })
  }

  const touchHandler = () => {
    dispatch({ type: 'TOUCH' })
  }

  const input =
    element === 'input' ? (
      <StyledInput
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <StyledTextarea
        id="id"
        rows={rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    )

  return (
    <Box className={`${!inputState.isValid && inputState.isTouched && 'is-invalid'}`}>
      <Label htmlFor={id}>{label}</Label>
      {input}
      {!inputState.isValid && inputState.isTouched && <p>{errorText}</p>}
    </Box>
  )
}

type StyleProps = {
  theme: Theme
}

const commonStyle = (props: StyleProps) => css`
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid ${props.theme.color.gray.main};
  background: ${props.theme.color.white};
  padding: 0.15rem 0.25rem;

  :focus {
    outline: none;
    background: ${props.theme.color.gray.light};
    border-color: ${props.theme.color.primary.light};
  }
`

const Box = styled.div`
  margin: 1rem 0;

  &.is-invalid {
    input,
    textarea {
      border-color: ${props => props.theme.color.error.main};
      background: ${props => props.theme.color.white};
      margin-bottom: 0.5rem;
    }

    label,
    p {
      color: red;
    }
  }
`

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`

const StyledInput = styled.input`
  ${commonStyle}
`

const StyledTextarea = styled.textarea`
  ${commonStyle}
`

export default Input