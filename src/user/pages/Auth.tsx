import React, { useState, useContext } from 'react'
import styled from '../../styled'

import Box from '../../shared/components/UIElements/Box'
import Card from '../../shared/components/UIElements/Card'
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
    <Box width="480px" mx="auto" textAlign="center">
      <Card>
        <Form onSubmit={authSubmitHandler}>
          <FormTitle>Login Rquired</FormTitle>
          <Divider />
          {!isLoginMode && (
            <Input
              element="input"
              inputId="name"
              type="text"
              label="Your Name"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a name."
              onInput={inputHandler}
              mb={0.5}
            />
          )}
          <Input
            inputId="email"
            element="input"
            type="email"
            label="E-Mail"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address."
            onInput={inputHandler}
            mb={0.5}
          />
          <Input
            inputId="password"
            element="input"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid password at least 5 characters."
            onInput={inputHandler}
            mb={0.5}
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
      </Card>
    </Box>
  )
}

const Form = styled.form`
  padding: 0.5rem;
`

const FormTitle = styled.h2`
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0.5rem;
`

const Divider = styled.hr`
  background: ${props => props.theme.color.gray.dark};
  margin: 0.5rem;
`

const ButtonBox = styled.div`
  padding: 1rem 0.5rem 0.5rem;

  a,
  button {
    margin: 0 0.5rem;
  }
`

export default Auth
