import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { css } from '@emotion/core'
import styled, { Theme } from '../../../styled'

type Props = (Anchor | LinkProps | Button) & Common

type Anchor = {
  href: string
}

type Button = {
  disabled?: boolean
  onClick?: () => void
  type?: 'submit' | 'reset' | 'button'
}

type Common = {
  size?: 'is-small' | 'is-large'
  color?: 'is-danger' | 'is-inverse'
}

const Button: React.FC<Props> = props => {
  if ('href' in props) {
    return (
      <StyledAnchor className={`${props.size} ${props.color}`} href={props.href}>
        {props.children}
      </StyledAnchor>
    )
  }

  if ('to' in props) {
    return (
      <StyledLink>
        <Link to={props.to} className={`${props.size} ${props.color}`}>
          {props.children}
        </Link>
      </StyledLink>
    )
  }

  return (
    <StyledButton
      className={`${props.size} ${props.color}`}
      type={props.type || 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </StyledButton>
  )
}

type StyleProps = {
  theme: Theme
}

const commonStyle = (props: StyleProps) => css`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid ${props.theme.color.secondary.main};
  border-radius: 4px;
  background: ${props.theme.color.secondary.main};
  color: ${props.theme.color.white};
  cursor: pointer;
  display: inline-block;

  :focus {
    outline: none;
  }

  :hover,
  :active {
    background: ${props.theme.color.secondary.light};
    border-color: ${props.theme.color.secondary.light};
  }

  :disabled,
  :hover:disabled,
  :active:disabled {
    background: ${props.theme.color.disabled.background};
    color: ${props.theme.color.disabled.text};
    border-color: ${props.theme.color.disabled.background};
    cursor: not-allowed;
  }

  &.is-inverse {
    background: transparent;
    color: ${props.theme.color.secondary.main};

    :hover,
    :active {
      color: ${props.theme.color.white};
      background: ${props.theme.color.secondary.main};
    }
  }

  &.is-danger {
    background: ${props.theme.color.error.dark};
    border-color: ${props.theme.color.error.dark};

    :hover,
    :active {
      background: ${props.theme.color.error.main};
      border-color: ${props.theme.color.error.main};
    }
  }

  &.is-small {
    font-size: 0.8rem;
  }

  &.is-big {
    font-size: 1.5rem;
  }
`

const StyledButton = styled.button`
  ${commonStyle}
`

const StyledLink = styled.span`
  display: inline-block;

  a {
    ${commonStyle}
    display: block
  }
`
const StyledAnchor = styled.a`
  ${commonStyle}
`

export default Button
