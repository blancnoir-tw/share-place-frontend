import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

type Props = {
  children: ReactNode
}

const Card = ({ children }: Props) => {
  return <Box>{children}</Box>
}

const Box = styled.div`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  overflow: hidden;
  background: #fafafa;
`

export default Card
