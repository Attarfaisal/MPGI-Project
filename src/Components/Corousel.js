import React from 'react'
import { Carousel } from 'react-bootstrap'
import c1 from '../Assets/Images/C1.webp'
import c2 from '../Assets/Images/C2.webp'
import c3 from '../Assets/Images/C3.webp'
import '../Assets/CSS/NavBar.css'
const Corousel = () => {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block  corousel-image"
          src={c1} alt="First slide"
        />
        <Carousel.Caption>
          <h3>Matoshree Pratishtan </h3>
          <p>College of Engineering</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block corousel-image"
          src={c2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block  corousel-image"
          src={c3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Corousel
