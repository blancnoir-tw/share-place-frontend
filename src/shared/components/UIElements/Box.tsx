import React from 'react'
import styled from '../../../styled'

type Props = { className?: string } & Spacing & Layout

type Spacing = Partial<{
  p: number | 'auto'
  px: number | 'auto'
  py: number | 'auto'
  pt: number | 'auto'
  pb: number | 'auto'
  pl: number | 'auto'
  pr: number | 'auto'
  m: number | 'auto'
  mx: number | 'auto'
  my: number | 'auto'
  mt: number | 'auto'
  mb: number | 'auto'
  ml: number | 'auto'
  mr: number | 'auto'
}>

type Layout = Partial<{
  textAlign: 'left' | 'center' | 'right'
  width: string
  minWidth: string
  maxWidth: string
  height: string
  minHeight: string
  maxHeight: string
}>

const Box: React.FC<Props> = ({
  children,
  className,
  p,
  px,
  py,
  pt,
  pb,
  pl,
  pr,
  m,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,
  textAlign,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
}) => {
  const calcSpacing = (spacing: 'auto' | number | undefined) => {
    return typeof spacing === 'number' ? spacing + 'rem' : spacing
  }

  const padding = calcSpacing(p)
  const paddingTop = calcSpacing(py) || calcSpacing(pt)
  const paddingBottom = calcSpacing(py) || calcSpacing(pb)
  const paddingLeft = calcSpacing(px) || calcSpacing(pl)
  const paddingRight = calcSpacing(px) || calcSpacing(pr)
  const margin = calcSpacing(m)
  const marginTop = calcSpacing(my) || calcSpacing(mt)
  const marginBottom = calcSpacing(my) || calcSpacing(mb)
  const marginLeft = calcSpacing(mx) || calcSpacing(ml)
  const marginRight = calcSpacing(mx) || calcSpacing(mr)

  return (
    <StyledDiv
      className={className}
      p={padding}
      pt={paddingTop}
      pb={paddingBottom}
      pl={paddingLeft}
      pr={paddingRight}
      m={margin}
      mt={marginTop}
      mb={marginBottom}
      ml={marginLeft}
      mr={marginRight}
      textAlign={textAlign}
      width={width}
      minWidth={minWidth}
      maxWidth={maxWidth}
      height={height}
      minHeight={minHeight}
      maxHeight={maxHeight}
    >
      {children}
    </StyledDiv>
  )
}

type StyledProps = Partial<{
  p: string
  pt: string
  pb: string
  pl: string
  pr: string
  m: string
  mt: string
  mb: string
  ml: string
  mr: string
}> &
  Layout

const StyledDiv = styled.div<StyledProps>`
  margin: ${props => props.m};
  margin-top: ${props => props.mt};
  margin-bottom: ${props => props.mb};
  margin-left: ${props => props.ml};
  margin-right: ${props => props.mr};
  padding: ${props => props.p};
  padding-top: ${props => props.pt};
  padding-bottom: ${props => props.pb};
  padding-left: ${props => props.pl};
  padding-right: ${props => props.pr};
  text-align: ${props => props.textAlign};
  width: ${props => props.width};
  min-width: ${props => props.minWidth};
  max-width: ${props => props.maxWidth};
  height: ${props => props.height};
  min-height: ${props => props.minHeight};
  max-height: ${props => props.maxHeight};
`

export default Box
