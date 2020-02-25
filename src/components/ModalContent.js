import React from 'react'
import styled from 'styled-components'

const ModalStyled = styled.div`
  position: relative;
  width: 450px;
  padding: 20px;
  border-radius: 5px;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,0.5);
`

const ModalConent = ({children}) => {
  return(
    <ModalStyled>{children}</ModalStyled>
  )
}

export default ModalConent