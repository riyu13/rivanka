import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
import image1 from '../image/image1.JPG'
import image2 from '../image/image2.JPG'
import image3 from '../image/image3.JPG'

const Welcome = () => {
  return (
    <div>
    <Carousel>
        <CarouselItem>
            <img src={image1} className='d-block w-100 h-80' alt='First Slide' />
            <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
            <img src={image2} className='d-block w-100 h-80' alt='Second Slide' />
            <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </CarouselItem>
        <CarouselItem>
            <img src={image3} className='d-block w-100 h-80' alt='Third Slide' />
            <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </CarouselItem>
    </Carousel>
    </div>
  )
}

export default Welcome
