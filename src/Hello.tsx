import * as React from 'react'
import styled from 'styled-components'

const StyledHello = styled.h1`
  color: red;
`
const Hello: React.FC = () => (
  <>
    <StyledHello>Hello World!</StyledHello>
  </>
)

export default Hello
