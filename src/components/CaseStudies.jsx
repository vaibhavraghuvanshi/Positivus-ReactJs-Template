import React from 'react'
import iconGreen from "../assets/iconGreen.png"
import {motion} from "framer-motion"

const animateText = {
  hidden:{
    y:100,
    opacity: 0
  },
  show : {
    y:0,
    opacity: 1,
    transition:{
      ease: "easeInOut",
      delay: 0.4,
      duration: 1
    },
  },
}

const CaseStudies = () => {
  return (
    <section className='services container mt-lg-3' id='caseStudies'>
    <div className='heading'>
        <motion.h2 className='service-h'
        variants={animateText}
        initial="hidden"
        whileInView="show"
        viewport={ {once: true, amount:0.4} }
        >
        Case Studies
        </motion.h2>

        <motion.p className='h-text'
        variants={animateText}
        initial="hidden"
        whileInView="show"
        animate={{delay: 0.6}}
        viewport={ {once: true, amount:0.4} }
        >Explore Real-Life Examples of Our Proven Digital Marketing<br/> Success through Our Case Studies</motion.p>
    </div>
    <div className="case-studies">

        <motion.div className="case_study_content"
        variants={animateText}
        whileInView="show"
        initial="hidden"
        viewport={{once: true, amount:0.4}}
        >
            <p className='text-white'>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
           <div className="btn-green">
           <button className='button_learn_more'>Learn More <span><img src={iconGreen} alt="" className='img-fluid'/></span></button>
           </div>           
        </motion.div>
        <motion.div className="case_study_content"
        variants={animateText}
        whileInView="show"
        initial="hidden"
        viewport={{once: true, amount:0.4}}
        >
            <p className='text-white'>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
           <div className="btn-green">
           <button className='button_learn_more'>Learn More <span><img src={iconGreen} alt="" className='img-fluid'/></span></button>
           </div>           
        </motion.div>
        <motion.div className="case_study_content"
        variants={animateText}
        whileInView="show"
        initial="hidden"
        viewport={{once: true, amount:0.4}}
        >
            <p className='text-white'>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
           <div className="btn-green">
           <button className='button_learn_more'>Learn More <span><img src={iconGreen} alt="" className='img-fluid'/></span></button>
           </div>           
        </motion.div>
        
    </div>
    
</section>
  )
}

export default CaseStudies
