import React from 'react'
import styled from 'styled-components'
import { Box } from './Box.jsx'

const QuotationMarks = styled.p`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.white};
`
const Quotation = styled.h3`
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: 400;
  font-size: 2rem;
  line-height: 3rem;
  color: ${({ theme }) => theme.colors.white};
`
const Author = styled.h4`
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colors.white};
`
const Description = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.grey2};
`

export const QuotationBox = () => (
  <Box textAlign="center">
    <QuotationMarks>&ldquo;</QuotationMarks>
    <Quotation>
      Your best life begins with a home that inspires you
    </Quotation>
    <Author>Angel Lubin</Author>
    <Description>Joblify</Description>
  </Box>
)
