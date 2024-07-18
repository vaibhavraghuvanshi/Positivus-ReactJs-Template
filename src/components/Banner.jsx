import React from 'react'
import banner from "../assets/banner.png"
const Banner = () => {
  return (
    <section className="banner container" id='home'>
    <div className="row">
        <div className="col-md-6 col-sm-12 p-0">
            <div className="content-banner">
                <h1>Navigating the digital landscape for success</h1>
                <p>Our digital marketing agency helps businesses grow and succeed
                    online through a range of services including SEO, PPC, social
                    media marketing, and content creation.</p>
            </div>
            <div className="cta_btn">
                <button className='btn btn-primary'>Book a consultation</button>
            </div>

        </div>
        <div className="col-md-6 col-sm-12">
            <div className="img-wrapper">
                <img src={banner} alt="Banner Img" className='img-fluid' />
            </div>
        </div>
    </div>
</section>
  )
}

export default Banner
