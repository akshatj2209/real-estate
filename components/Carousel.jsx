import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import styled from 'styled-components'

const handleDragStart = (e) => e.preventDefault()

const Image = styled.img`
  min-width: 100%;
`

const items = [
  <Image src="/bg-1.png" onDragStart={handleDragStart} />,
  <Image src="/bg-1.png" onDragStart={handleDragStart} />,
  <Image src="/bg-1.png" onDragStart={handleDragStart} />,
]

export const Carousel = () => {
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      disableDotsControls="true"
      disableButtonsControls="true"
    />
  )
}
