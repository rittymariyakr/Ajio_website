import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css';

function Banner() {
  return (
    <>
     <div>
     <Carousel data-bs-theme="light" style={{marginTop:'100px'}}>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{width:'100%'}}
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-Ajiomania-golive-17112023-MainBanner%20(2).gif"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-20112023-MainBannerDailyChanging-Z1-P2-Winterfest-3060.jpg"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-20112023-MainBannerDailyChanging-Z1-P5-avaasadnmx-min60.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-20112023-MainBannerDailyChanging-Z1-P7-sojanyaAnubhutee-flat55.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-20112023-MainBannerDailyChanging-Z1-P4-SuperdryGAP-min30.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-20112023-MainBannerDailyChanging-Z1-P3-ClearanceSale-Flat80.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-20112023-MainBannerDailyChanging-Z1-P6-Jockey-Vanheusen-Min50.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
      </div>
      </>
   
  )
}

export default Banner
