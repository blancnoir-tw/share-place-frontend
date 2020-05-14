import React, { ComponentProps } from 'react'
import styled from '../../../styled'

import Box from './Box'

type Props = ComponentProps<typeof Box>

const Card: React.FC<Props> = ({ children, ...boxProps }) => {
  return <StyledBox {...boxProps}>{children}</StyledBox>
}

const StyledBox = styled(Box)`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  overflow: hidden;
`

export default Card
