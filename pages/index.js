import styled from 'styled-components'
import { Navbar } from '../components/Navbar'
import { Carousel } from '../components/Carousel'
import { Hero } from '../components/Hero'
import { SearchContainer } from '../components/SearchContainer'
import { Properties } from '../components/Properties'
import { QuotationBox } from '../components/QuotationBox'

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Hero />
      <SearchContainer />
      <Properties />
      <QuotationBox />
    </>
  )
}
