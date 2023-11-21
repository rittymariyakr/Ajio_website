import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function FourthBanner() {
  return (
    <>
    <div>
    <Carousel data-bs-theme="light" style={{marginTop:'50px'}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-03102023-AllianceStripsStatic-Z1-ShopEarn2.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-22092023-WalletOffer-InviteYourFriend.jpg"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.ajio.com/cms/AJIO/WEB/2192023-PLPStrip-RelianceOne-Points-1440x128.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  )
}

export default FourthBanner
