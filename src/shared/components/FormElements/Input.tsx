import React, { useReducer, useEffect, ComponentProps } from 'react'
import { css } from '@emotion/core'
import styled, { Theme } from '../../../styled'

import { validate, Validator } from '../../utils/validator'
import Box from '../UIElements/Box'

type Props = {
  element: string
  inputId: string
  label: string
  placeholder?: string
  rows?: number
  type?: string
  errorText?: string
  validators: Validator[]
  onInput: (id: string, value: string, isvalid: boolean) => void
  initialValue?: string
  initialValid?: boolean
} & ComponentProps<typeof Box>

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

const Input: React.FC<Props> = ({
  element,
  inputId,
  label,
  placeholder,
  rows,
  type,
  errorText,
  validators,
  onInput,
  initialValue,
  initialValid,
  ...boxProps
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue || '',
    isValid: initialValid || false,
    isTouched: false,
  })

  const { value, isValid } = inputState
  useEffect(() => {
    onInput(inputId, value, isValid)
  }, [inputId, value, isValid, onInput])

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({ type: 'CHANGE', val: event.target.value, validators })
  }

  const touchHandler = () => {
    dispatch({ type: 'TOUCH' })
  }

  const inputElement =
    element === 'input' ? (
      <StyledInput
        id={inputId}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <StyledTextarea
        id={inputId}
        rows={rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    )

  return (
    <StyledBox isInvalid={!inputState.isValid && inputState.isTouched} {...boxProps}>
      <Label htmlFor={inputId}>{label}</Label>
      {inputElement}
      {!inputState.isValid && inputState.isTouched && <p>{errorText}</p>}
    </StyledBox>
  )
}

type StyleProps = {
  theme: Theme
}

const commonStyle = ({ theme }: StyleProps) => css`
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid ${theme.color.gray.main};
  background: ${theme.color.white};
  padding: 0.15rem 0.25rem;

  :focus {
    outline: none;
    background: ${theme.color.gray.light};
    border-color: ${theme.color.primary.light};
  }
`

const StyledBox = styled(Box)<{ isInvalid?: boolean }>`
  input,
  textarea {
    background: ${props => props.isInvalid && props.theme.color.white};
    border-color: ${props => props.isInvalid && props.theme.color.error.main};
    margin-bottom: 0.5rem;
  }

  label,
  p {
    color: ${props => props.isInvalid && props.theme.color.error.main};
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
