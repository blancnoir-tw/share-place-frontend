import React from 'react'
import ReactDOM from 'react-dom'
import styled from '../../../styled'

type Props = {
  onClick: () => void
}

const Backdrop: React.FC<Props> = ({ onClick }) => {
  const content = <Box onClick={onClick}></Box>
  return ReactDOM.createPortal(content, document.getElementById('backdrop-hook') as Element)
}

const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
`

export default Backdrop
