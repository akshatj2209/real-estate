import React from 'react'
import styled from 'styled-components'
import { Box } from './Box.jsx'

const Title = styled.h1`
  font-size: 40px;
  line-height: 50px;
  color: ${({ theme }) => theme.colors.white};
`

const Content = styled.p`
  font-size: 20px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.grey2};
`

export const Hero = () => (
  <Box textAlign="center" maxWidth="1000px" mx="auto" py="4rem">
    <Title>Cottonwood Creek Apartments</Title>
    <Content>
      Dream interpretation has many forms; it can be done be done
      for the sake of fun, hobby or can be taken up as a serious
      career. odio dignissimos ducimus qui blanditiis praesentium
      voluptatum deleniti
    </Content>
  </Box>
)
