import React from 'react'
import logo from "../assets/footer-logo.png"
import facebook from "../assets/facebookIcon.png"
import twitter from "../assets/twitter.png"
import linkedin from "../assets/linkedin.png"


const Footer = () => {
  return (
    <section className='footer'>
      <div className="container">
        <div className="row mb-4 align-items-center">
            <div className="col-3 col-lg-3">
                <img src={logo} alt="LOGO" className='img-fluid footer_logo' />
            </div>
            <div className="col-6 col-lg-6">
                <ul className="navList">
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Use Cases</a>
                    </li>
                    <li>
                        <a href="#">Team</a>
                    </li>
                </ul>
            </div>
            <div className="col-3 col-lg-3">
                <div className="social-icon">
                    <a href="#">
                        <img src={facebook} alt="Facebook" />
                    </a>
                    <a href="#">
                        <img src={twitter} alt="Facebook" />
                    </a>
                    <a href="#">
                        <img src={linkedin} alt="Facebook" />
                    </a>
                </div>
            </div>
        </div>
        {/* contact detail with form */}
        <div className="row mt-4 pb-4">
            <div className="col-6 col-lg-5">
            <div className='heading w-50'>
                <h2 className='service-h'>Contact Us</h2>
                <ul className="address_detail">
                    <li>Email: info@positivus.com</li>
                    <li>Phone: 555-567-8901</li>
                    <li>Address: 1234 Main St<br/>
                    Moonstone City, Stardust State 12345</li>
                </ul>
           </div>
            </div>
            <div className="col-6 col-lg-7">
                <div className="newsletter">
                    <input type="email" id="email" className='form-control custom_input' placeholder='Email....' />
                    <button className='btn btn-primary'>Submit</button>
                </div>
            </div>
        </div>
        <div className="credits">
            <div className="copyright">
                <p>© 2023 Positivus. All Rights Reserved.</p>
            </div>
            <div className="privacy_link">
                <a href="/" className="link"> Privacy Policy</a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
