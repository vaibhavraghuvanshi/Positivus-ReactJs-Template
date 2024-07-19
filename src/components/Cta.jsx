import React from 'react'
import cta from "../assets/cta.png"
import { LazyMotion, m, domAnimation } from 'framer-motion'

const Cta = () => {

  const delayAnimation = {
    hidden:{x:-100, opacity:0},
    show:{x:0,opacity:1, transition:{
      ease:"easeInOut",
      delay: 0.4,
      duration:1
    }}
  }

  return (
    <LazyMotion features={domAnimation} strict>
    <m.section className='cta bg-gary'
    variants={delayAnimation}
    initial="hidden"
    whileInView="show"
    viewport={ {once: true, amount: 0.3}}
    >
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
    </m.section>
    </LazyMotion>
  )
}

export default Cta
