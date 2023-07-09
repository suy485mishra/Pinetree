import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <section className='f-wrapper'>
        <div className='paddings innerWidth flexCenter f-container'>
            {/* left section */}
            <div className='flexColStart f-left'>
                <img src='logo_pine-removebg.png' alt='' width={180}></img>
                <span className='secondaryText'>
                    Come join us in our mission <br/>
                    to make luxury affordable
                </span>
            </div>
            {/* roght section */}
            <div className='flexColStart f-right'>
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>145 New York, FL 457</span>
            <div className='flexCenter f-menu'>
                <span>Property</span>
                <span>Services</span>
                <span>Product</span>
                <span>About Us</span>
            </div>
            </div>
        </div>
    </section>
    
  )
}

export default Footer