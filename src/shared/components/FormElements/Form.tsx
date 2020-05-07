import React from 'react'
import styled from '../../../styled'

type Props = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  children: React.ReactNode
}

const Form = (props: Props) => {
  return <StyledForm onSubmit={props.onSubmit}>{props.children}</StyledForm>
}

const StyledForm = styled.form`
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

export default Form
