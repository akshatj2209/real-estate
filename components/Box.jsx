import styled from 'styled-components'
import {
  color,
  space,
  typography,
  border,
  shadow,
  layout,
  flexbox,
  grid,
  background,
  position,
} from 'styled-system'

export const Box = styled.div`
  ${grid}
  ${flexbox}
  ${layout}
  ${position}
  
  ${space}
  ${border}
  ${shadow}
  ${color}
  ${typography}
  ${background}
`
