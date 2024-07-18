import React from 'react'
import cta from "../assets/cta.png"

const Cta = () => {
  return (
    <section className='cta bg-gary'>
        <div className="cta-wrapper">
            <div className="cta-content">
                <h3>Let’s make things happen</h3>
                <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                <div className="cta_btn">
                <button className='btn btn-primary'>Get your free proposal</button>
            </div>
            </div>
            <div className="cta-img">
                <img src={cta} alt="CTA Image" className='img-fluid'/>
            </div>
        </div>
      
    </section>
  )
}

export default Cta
