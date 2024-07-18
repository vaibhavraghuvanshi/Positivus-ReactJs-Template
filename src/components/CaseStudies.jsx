import React from 'react'
import iconGreen from "../assets/iconGreen.png"

const CaseStudies = () => {
  return (
    <section className='services container mt-lg-3' id='caseStudies'>
    <div className='heading'>
        <h2 className='service-h'>Case Studies</h2>
        <p className='h-text'>Explore Real-Life Examples of Our Proven Digital Marketing<br/> Success through Our Case Studies</p>
    </div>
    <div className="case-studies">

        <div className="case_study_content">
            <p className='text-white'>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
           <div className="btn-green">
           <button className='button_learn_more'>Learn More <span><img src={iconGreen} alt="" className='img-fluid'/></span></button>
           </div>           
        </div>
        <div className="case_study_content">
            <p className='text-white'>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
           <div className="btn-green">
           <button className='button_learn_more'>Learn More <span><img src={iconGreen} alt="" className='img-fluid'/></span></button>
           </div>           
        </div>
        <div className="case_study_content">
            <p className='text-white'>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
           <div className="btn-green">
           <button className='button_learn_more'>Learn More <span><img src={iconGreen} alt="" className='img-fluid'/></span></button>
           </div>           
        </div>
        
    </div>
    
</section>
  )
}

export default CaseStudies
