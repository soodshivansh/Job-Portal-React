import React from 'react'
import logo1 from '../assets/google_PNG.png'
import logo2 from '../assets/Apple_logo_PNG1.png'
import logo3 from '../assets/Facebook_logo_PNG9.png'
import logo4 from '../assets/walmart-logo.png'
import logo5 from '../assets/Microsoft_Azure_logo_PNG2.png'
import logo6 from '../assets/Amazon_logo_PNG3.png'
import logo7 from '../assets/Adobe-Logo.png'
import logo8 from '../assets/Nvidia-Logo-700x394.webp'

const LogoSlider = () => {
  return (
    <div>
      <div class="logos">
          <div class="logos-slide">
            <img src={logo1} alt="Google"/>
            <img src={logo2} alt="Apple"/>
            <img src={logo3} alt="Facebook"/>
            <img src={logo4} alt="Walmart"/>
            <img src={logo5} alt="Microsoft"/>
            <img src={logo6} alt="Amazon"/>
            <img src={logo7} alt="Adobe"/>
            <img src={logo8} alt="Nvidia"/>
          </div>
          
          <div class="logos-slide">
            <img src={logo1} alt="Google"/>
            <img src={logo2} alt="Apple"/>
            <img src={logo3} alt="Facebook"/>
            <img src={logo4} alt="Walmart"/>
            <img src={logo5} alt="Microsoft"/>
            <img src={logo6} alt="Amazon"/>
            <img src={logo7} alt="Adobe"/>
            <img src={logo8} alt="Nvidia"/>
          </div>
    
      </div>
    </div>
  )
}

export default LogoSlider
