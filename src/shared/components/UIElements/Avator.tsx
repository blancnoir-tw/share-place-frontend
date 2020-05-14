import React from 'react'
import styled from '../../../styled'

import Box from '../UIElements/Box'

type Props = {
  image: string
  alt: string
  size?: string
}

const Avatar: React.FC<Props> = ({ image, alt, size }) => {
  return (
    <StyledBox width={size} height={size}>
      <Image src={image} alt={alt} />
    </StyledBox>
  )
}

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  display: block;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default Avatar
