import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function ThirdBanner() {
  return (
    <>
    <div>
    <Carousel data-bs-theme="light" style={{marginTop:'50px'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-20112023-TopBrandBanner-Z3-P6-Clarks-Min50.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-20112023-TopBrandBanner-Z3-P2-RelianceJewels-Malabar-Upto50.jpg"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-20112023-TopBrandBanner-Z3-P3-kianajompers-min60.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-20112023-TopBrandBanner-Z3-P4-Campus-Go21-Min40.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-20112023-TopBrandBanner-Z3-P5-USPA-Arrow-Min50.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/2023_AJIO_MIN50OFF_Desktop_w1024ph672px.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
    </div>
    </>
    
  )
}

export default ThirdBanner
