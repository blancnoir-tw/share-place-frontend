import React, { useState, useContext } from 'react'

import styled from '../../styled'
import Form from '../../shared/components/FormElements/Form'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/utils/validator'
import { useForm } from '../../shared/hooks/form-hook'
import { AuthContext } from '../../shared/context/auth-context'

const Auth: React.FC = () => {
  const auth = useContext(AuthContext)
  const [isLoginMode, setIsLoginMode] = useState(true)
  const { formState, inputHandler, setFormData } = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  )

  const switchModeHandler = () => {
    if (isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false,
          },
        },
        false
      )
    } else {
      const { name, ...rest } = formState.inputs
      setFormData(rest, formState.inputs.email.isValid && formState.inputs.password.isValid)
    }

    setIsLoginMode(prevState => !prevState)
  }

  const authSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()
    console.log(formState.inputs)
    auth.login()
  }

  return (
    <Box>
      <Form onSubmit={authSubmitHandler}>
        <FormTitle>Login Rquired</FormTitle>
        <hr />
        {!isLoginMode && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name."
            onInput={inputHandler}
          />
        )}
        <Input
          id="email"
          element="input"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address."
          onInput={inputHandler}
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password at least 5 characters."
          onInput={inputHandler}
        />
        <ButtonBox>
          <Button type="submit" disabled={!formState.isValid}>
            {isLoginMode ? 'LOGIN' : 'SIGNUP'}
          </Button>
          <Button color="is-inverse" onClick={switchModeHandler}>
            SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
          </Button>
        </ButtonBox>
      </Form>
    </Box>
  )
}

const Box = styled.div`
  text-align: center;
`

const FormTitle = styled.h2`
  font-weight: bold;
  font-size: 1.2rem;
  padding: 1rem 0;
`

const ButtonBox = styled.div`
  a,
  button {
    margin: 0 0.5rem;
  }
`

export default Auth
