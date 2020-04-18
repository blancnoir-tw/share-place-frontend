import React from 'react'
import styled from '../../../styled'

type Props = {
  image: string
  alt: string
  size?: string
}

const Avatar = ({ image, alt, size }: Props) => {
  return (
    <Box size={size}>
      <Image src={image} alt={alt} />
    </Box>
  )
}

const Box = styled.div<{ size?: string }>`
  width: ${props => props.size || '100%'};
  height: ${props => props.size || '100%'};
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
