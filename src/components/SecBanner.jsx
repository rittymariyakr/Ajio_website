import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function SecBanner() {
  return (
    <>
    <div>
    <Carousel data-bs-theme="dark" style={{marginTop:'2px'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/Rupay-1440x128%202.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/1440X128%20Prime%20(1)111.png"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/Fi%20Credit%20Cards-1440x128.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/1440X128%20Prime%20(1)111.png"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/Mobikwik-1440x128%202.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-03102023-AllianceStripsStatic-Z1-payupto1.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/1440X128%20(1)111.png"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  )
}

export default SecBanner
