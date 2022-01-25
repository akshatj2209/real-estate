import React from 'react'
import styled from 'styled-components'
import { Box } from './Box.jsx'
import { Properties } from './Properties.jsx'

const Image = styled.img``

const Header = styled.h4`
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.grey2};
  margin-bottom: 0;
`
const Name = styled.p`
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.white};
`

const Price = styled.p`
  font-size: 20px;
  line-height: 28px;
  margin-left: auto;
  color: ${({ theme }) => theme.colors.white};
`
const Icon = styled.img`
  margin-right: 10px;
`
const IconLeft = styled.p`
  margin-right: 60px;
  color: ${({ theme }) => theme.colors.grey2};
`
export const PropertyCard = (props) => (
  <Box my="50px">
    <Image src={props.imgSrc} alt="Property Image" />
    <Box width="100%">
      <Header>Buy</Header>
      <Box display="flex">
        <Name>{props.name}</Name>
        <Price>$13,000</Price>
      </Box>
      <Box display="flex">
        <Icon src="/Search.svg" alt="Search" />
        <IconLeft>4 Beds</IconLeft>
        <Icon src="/Search.svg" alt="Search" />
        <IconLeft>2 Bath</IconLeft>
        <Icon src="/Search.svg" alt="Search" />
        <IconLeft>1400sqft</IconLeft>
      </Box>
    </Box>
  </Box>
)
