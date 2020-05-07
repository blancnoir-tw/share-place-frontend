import { useCallback, useReducer } from 'react'

type Inputs = {
  [inputId in string]: {
    value: string
    isValid: boolean
  }
}

type State = {
  inputs: Inputs
  isValid: boolean
}

type Action =
  | {
      type: 'INPUT_CHANGE'
      inputId: string
      isValid: boolean
      value: string
    }
  | {
      type: 'SET_DATA'
      inputs: Inputs
      isValid: boolean
    }

const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid
        } else {
          formIsValid = formIsValid && state.inputs[inputId]?.isValid
        }
      }

      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      }
    case 'SET_DATA':
      return { ...state, inputs: action.inputs, isValid: action.isValid }
    default:
      return state
  }
}

export const useForm = (intialInputs: Inputs, initialFormValidity: boolean) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: intialInputs,
    isValid: initialFormValidity,
  })

  const inputHandler = useCallback((id: string, value: string, isValid: boolean) => {
    dispatch({ type: 'INPUT_CHANGE', value, isValid, inputId: id })
  }, [])

  const setFormData = useCallback((inputs: Inputs, isValid: boolean) => {
    dispatch({
      type: 'SET_DATA',
      inputs,
      isValid,
    })
  }, [])

  return { formState, inputHandler, setFormData }
}
