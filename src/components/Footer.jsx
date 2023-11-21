import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css';


function Footer() {
  return (
    <>
    <div style={{ width: '100%', height: '500px',backgroundColor:' #2c4152',color:'white' }} className='d-flex mt-5 align-items-center flex-column '>
        <div className="footer mt-5  w-100">
        
        <div class="row mt-5 ms-5" >
                <div className="col-md-3">
                    <h5 className="justify-content mt-2 fs-6">Ajio</h5>
                    <div className="justify-content mt-4 ">
                    <p className='footer-link'><Link  style={{textDecoration:"none",color:'white'}}>Who We Are</Link></p>
                    <p className='footer-link'><Link  style={{textDecoration:"none",color:'white'}}>Join Our Team</Link></p>
                    <p className='footer-link'><Link  style={{textDecoration:"none",color:'white'}}>Terms & Conditions</Link></p>
                    <p className='footer-link'><Link  style={{textDecoration:"none",color:'white'}}>We Respect Your Privacy</Link></p>
                    <p className='footer-link'><Link  style={{textDecoration:"none",color:'white'}}>Fees & Payments</Link></p>
                    <p className='footer-link'><Link  style={{textDecoration:"none",color:'white'}}>Returns & Refunds Policy</Link></p>
                    <p className='footer-link'><Link  style={{textDecoration:"none",color:'white'}}>Promotions Terms & Conditions</Link></p>
                    </div>
                </div>
                <div className="col-md-3">
                    <h5 className="justify-content mt-2 fs-6">Help</h5>
                    <div className="justify-content mt-4">
                    <p className='footer-link'><Link  style={{textDecoration:"none",color:'white'}}>Track Your Order</Link></p>
                    <p className='footer-link'><Link  style={{textDecoration:"none",color:'white'}}>Frequently Asked Questions</Link></p>
                    <p className='footer-link'><Link  style={{textDecoration:"none",color:'white'}}>Returns</Link></p>
                    <p className='footer-link'><Link  style={{textDecoration:"none",color:'white'}}>Cancellations</Link></p>
                    <p className='footer-link'><Link  style={{textDecoration:"none",color:'white'}}>Payments</Link></p>
                    <p className='footer-link'><Link  style={{textDecoration:"none",color:'white'}}>Customer Care</Link></p>
                    <p className='footer-link'><Link  style={{textDecoration:"none",color:'white'}}>How Do I Redeem My Coupon</Link></p>
                    </div>
                </div>
                <div className="col-md-3">
                    <h5 className="justify-content mt-2 fs-6">Shop by</h5>
                    <div className="justify-content mt-4">
                    <p className='footer-link'><Link   style={{textDecoration:"none",color:'white'}}>Men</Link></p>
                    <p className='footer-link'><Link  style={{textDecoration:"none",color:'white'}}>Women</Link></p>
                    <p className='footer-link'><Link  style={{textDecoration:"none",color:'white'}}>Kids</Link></p>
                    <p className='footer-link'><Link  style={{textDecoration:"none",color:'white'}}>Indie</Link></p>
                    <p className='footer-link'><Link style={{textDecoration:"none",color:'white'}}>Stores</Link></p>
                    <p className='footer-link'><Link  style={{textDecoration:"none",color:'white'}}>New Arrivals</Link></p>
                    <p className='footer-link'><Link  style={{textDecoration:"none",color:'white'}}>Brand Directory</Link></p>
                    


                </div>
                </div>
                <div className="col-md-3">
                    <h5 className="justify-content mt-2 fs-6">Follow us</h5>
                    <div className="justify-content mt-4">
                    <p className='footer-link'><Link  style={{textDecoration:"none",color:'white'}}>Facebook</Link></p>
                    <p className='footer-link'><Link  style={{textDecoration:"none",color:'white'}}>Instagram-AJIOlife</Link></p>
                    <p className='footer-link'><Link  style={{textDecoration:"none",color:'white'}}>Instagram-AJIO LUXE</Link></p>
                    <p className='footer-link'><Link  style={{textDecoration:"none",color:'white'}}>Twitter</Link></p>
                    <p className='footer-link'><Link style={{textDecoration:"none",color:'white'}}>Pinterest</Link></p>
                </div>
                </div>
                
                </div>
        
        </div>
    </div>
    <hr/>
    </>
  )
}

export default Footer
