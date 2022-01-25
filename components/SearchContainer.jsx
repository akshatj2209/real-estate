import React from 'react'
import styled from 'styled-components'
import { Box } from './Box.jsx'
import { Button } from './Button.jsx'

const Title = styled.h2`
  font-size: 50px;
  line-height: 50px;
  max-width: 900px;
  display: block;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.white};
`

const RadioButton = styled.input`
  margin: auto 2rem auto 15px;
`
const RadioButtonLabel = styled.label`
  margin: auto 2rem auto 0;
`

const SearchBar = styled.input`
  min-width: 45%;
  height: 100%;
  margin-right: 30px;
  font-size: 1.5rem;
  border: none;
  color: ${({ theme }) => theme.colors.grey2};
`
const Icon = styled.img`
  margin-right: 30px;
`
export const SearchContainer = () => (
  <Box textAlign="center" mx="auto" py="8rem">
    <Title>
      Find the Best Smart Real Estate. You&apos;ll Love it !!
    </Title>
    <Box
      textAlign="left"
      mx="6rem"
      bg="white"
      p="16px"
      my="4rem"
      display="flex"
    >
      <RadioButton
        type="radio"
        id="buy"
        name="fav_language"
        value="buy"
      />
      <RadioButtonLabel for="buy">Buy</RadioButtonLabel>
      <RadioButton
        type="radio"
        id="sell"
        name="fav_language"
        value="sell"
      />
      <RadioButtonLabel for="sell">Sell</RadioButtonLabel>
      <RadioButton
        type="radio"
        id="rent"
        name="fav_language"
        value="rent"
      />
      <RadioButtonLabel for="rent">Rent</RadioButtonLabel>
      <RadioButton
        type="radio"
        id="showHomeValue"
        name="fav_language"
        value="showHomeValue"
      />
      <RadioButtonLabel for="showHomeValue">
        Show Home Value
      </RadioButtonLabel>

      <Box ml="auto">
        <SearchBar
          type="text"
          placeholder="Search for a location"
        />
        <Icon src="./Search.svg" alt="Search" />
        <Icon src="./burger.svg" alt="Burger" />
        <Button variant="secondary" ml="auto" my="0">
          Search
        </Button>
      </Box>
    </Box>
  </Box>
)
