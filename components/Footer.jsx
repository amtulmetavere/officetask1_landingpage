import React from 'react'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerelem'>
        <div className='footer-c column1'>
            <h5>About Us</h5>
            <p>LSW, a leading and trusted LPO company, provides quality legal outsourcing solutions, strategic control & dramatic cost-savings to law firms, attorneys and corporates worldwide. We believe in seamless integration with your goals and can serve as an extension of your legal division for your increased operational efficiency.</p>
        </div>
        <div className='footer-c column2'>
            <h5>Quick Links</h5>
            <ul>
                <li>
                About LSW
                </li>
                <li>
                Why LSM?
                </li>
                <li>
              FAQ
                </li>
                <li>
                Our Pricing Model
                </li>
                <li>
                Contact Us
                </li>
            </ul>
        </div>
        <div className='footer-c column3'>
            <h5>Services</h5>
            <ul>
                <li>
                Litigation Support Services
                </li>
                <li>
                Contract Management Services
                </li>
                <li>
                Paralegal Support Services
                </li>
                <li>
                Legal Research and Drafting
                </li>
                <li>
                Personal Injury Legal Services
                </li>
                <li>
                Managed Document Review Services
                </li>
            </ul>
        </div>
        <div className='footer-c column4'>
            <h5>Contact Us</h5>
            <p>
                <b>Phone:</b> <br/> USA: +1 (914) 863 9894  <br/>
Canada: +1 (905) 581- 7375  <br/>
UK: +44 20 33717486  <br/>
Australia: +61 286078983
            </p>
            <p>
            <b>Email:</b><br/>
            info@legalsupportworld.com
            </p>
            <ul className='social'>
                <li><a href="#"><img src="/facebook.png" alt="Facebook" /></a></li>
                <li><a href="#"> <img src="/x-twitter-icon-1.png" alt="Twitter" /></a></li>
                <li><a ><img src="/yelp.png" alt="Yelp" /></a></li>
                <li><a href="#"><img src="/linkedin.png" alt="LinkedIn" /></a></li>
                 </ul>
        </div>
        </div>
    <div className='footerinner'>
       <div className='footerinner1'>
       <p>© 2025 - Legal Support World  </p>
        <a href="#">| Web Property of Cogneesol</a>
        <a href="#">Sitemap</a>
        <a href="#">Partner with Us</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
     
    </div>
    </div>
    </div>
  )
}

export default Footer
