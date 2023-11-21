import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function FifthBanner() {
  return (
    <>
    <div>
    <Carousel data-bs-theme="light" >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-21112023-DailyBanner-1-Z7-Fig-Rio-Starting199.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-21112023-DailyBanner-2-Z7-Fila-Arbunore-Min40r.jpg"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-21112023-DailyBanner-3-Z7-Zeta-Underarmour-Upto50.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-21112023-DailyBanner-4-Z7-Portico-Upto50.jpg
          "
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-21112023-Dailybanner-5-Z7-Puma-Min40.jpg"
          alt="Second slide"
        />
       
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  )
}

export default FifthBanner
