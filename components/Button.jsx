import styled from 'styled-components'
import css from '@styled-system/css'
import {
  color,
  space,
  typography,
  border,
  shadow,
  variant,
  layout,
  position,
} from 'styled-system'
export const Button = styled('button')(
  css({
    fontFamily: 'DM Sans',
    ml: '4rem',
    mr: '1rem',
    my: '1rem',
    fontSize: '22px',
    padding: '14px 37px',
    borderRadius: '4px',
    transform: 'scale(1, 1)',
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'scale(1.05, 1.05)',
    },
  }),
  color,
  space,
  position,
  typography,
  border,
  shadow,
  layout,
  variant({
    variants: {
      primary: {
        color: 'black',
        bg: 'white',
      },
      secondary: {
        color: 'white',
        bg: 'black',
      },
    },
  })
)
