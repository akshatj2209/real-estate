import React from 'react'
import styled from 'styled-components'
import { Box } from './Box.jsx'
import { PropertyCard } from './PropertyCard.jsx'

const Header = styled.h2`
  font-weight: 400;
  font-size: 38px;
  line-height: 54px;
  color: ${({ theme }) => theme.colors.white};
`
const Content = styled.p`
  font-size: 18px;
  line-height: 32px;
  max-width: 1000px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.grey2};
`

export const Properties = () => (
  <>
    <Box textAlign="center">
      <Header>Explore Good Places</Header>
      <Content>
        Nunc, turpis sit porttitor nascetur viverra viverra
        feugiat diam. Rutrum tincidunt nulla amet lectus diam
        vestibulum, velit enim, tempor. Parturient urna, ac eu
        sagittis malesuada rhoncus molestie faucibus arcu.
      </Content>
    </Box>
    <Box
      display="grid"
      gridTemplateColumns="auto auto"
      alignItems="center"
      justifyContent="center"
      gridColumnGap="10%"
      mt="30px"
    >
      <PropertyCard
        name="American Electric Lofts Apartment"
        imgSrc="/pimg-1.png"
      />
      <PropertyCard name="Baby Monitor" imgSrc="/pimg-2.png" />
      <PropertyCard
        name="American Electric Lofts Apartment"
        imgSrc="/pimg-3.png"
      />
      <PropertyCard name="Baby Monitor" imgSrc="/pimg-4.png" />
      <PropertyCard
        name="American Electric Lofts Apartment"
        imgSrc="/pimg-5.png"
      />
      <PropertyCard name="Baby Monitor" imgSrc="/pimg-6.png" />
      <PropertyCard
        name="American Electric Lofts Apartment"
        imgSrc="/pimg-7.png"
      />
      <PropertyCard name="Baby Monitor" imgSrc="/pimg-8.png" />
    </Box>
  </>
)
