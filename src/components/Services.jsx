import React from 'react'
import serviceOne from "../assets/serviceOne.png"
import serviceTwo from "../assets/serviceTwo.png"
import arrow from "../assets/icon-arrow.png"
import serviceThree from "../assets/serviceThree.png"
import serviceFour from "../assets/serviceFour.png"
import serviceFive from "../assets/serviceFive.png"
import serviceSix from "../assets/serviceSix.png"
import {  motion } from 'framer-motion'

const boxContainer = {
    hidden:{
        opacity: 0,
        y: 50,
    },
    visible :(i) =>({
        opacity: 1,
        y: 0,
        transition:{
            delay: i * 0.6,
            duration: 0.7,
            ease: "easeInOut"
        },
    }),
}

const headingAnimate = {
    hidden:{
        y: 50,
        opacity: 0,
    },
    visible: (i) =>({
        y:0,
        opacity: 1,
        transition:{
            ease: "easeInOut",
            delay: i * 0.5,
            duration: 0.6
        }

    })

}


const Services = () => {
    return (
        <section className='services container' id='services'>
            <div className='heading'>
                <motion.h2 
                variants={headingAnimate}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className='service-h'>
                Services
                </motion.h2>
                <motion.p 
                variants={headingAnimate}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.3}}
                className='h-text'>
                    At our digital marketing agency, we offer a range of services to 
                    <br /> help businesses grow and succeed online. These services include:
                </motion.p>
            </div>
            <div className='banner_container mb-4'>
                <motion.div className='item-left seo'
                variants={boxContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                >
                    <div className='s-content'>
                        <div>
                        <h3 className='service-h'>Search engine </h3>
                        <h3 className='service-h second-h '>optimization</h3>
                        </div>
                        <div className='s-button'>
                            <img className='arrow-icon' src={arrow} alt="" />Learn More
                        </div>
                    </div>
                    <div className='s-img'>
                        <img className='img-fluid' src={serviceOne} alt="" />
                    </div>
                </motion.div>
                <motion.div className='item-right ppc'
                variants={boxContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                >
                <div className='s-content'>
                        <div>
                        <h3 className='service-w'>Pay-per-click </h3>
                        <h3 className='service-w second-h '>advertising</h3>
                        </div>
                        <div className='s-button'>
                            <img className='arrow-icon' src={arrow} alt="" />Learn More
                        </div>
                    </div>
                    <div className='s-img'>
                        <img className='img-fluid' src={serviceTwo} alt="" />
                    </div>
                </motion.div>
            </div>

            <div className='banner_container mb-4'>
            <motion.div className='item-right ppc'
            variants={boxContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            >
                <div className='s-content'>
                        <div>
                        <h3 className='service-w'>Pay-per-click </h3>
                        <h3 className='service-w second-h '>advertising</h3>
                        </div>
                        <div className='s-button'>
                            <img className='arrow-icon' src={arrow} alt="" />Learn More
                        </div>
                    </div>
                    <div className='s-img'>
                        <img className='img-fluid' src={serviceThree} alt="" />
                    </div>
                </motion.div>
                <motion.div className='item-left seo smm'
                variants={boxContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                >
                    
                    <div className='s-content'>
                        <div>
                        <h3 className='service-h'>Search engine </h3>
                        <h3 className='service-h second-h '>optimization</h3>
                        </div>
                        <div className='s-button'>
                            <img className='arrow-icon' src={arrow} alt="" />Learn More
                        </div>
                    </div>
                    <div className='s-img'>
                        <img className='img-fluid' src={serviceFour} alt="" />
                    </div>
                </motion.div>
               
            </div>

            <div className='banner_container mb-4'>
                <motion.div className='item-left seo'
                variants={boxContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                >
                    <div className='s-content'>
                        <div>
                        <h3 className='service-h'>Search engine </h3>
                        <h3 className='service-h second-h '>optimization</h3>
                        </div>
                        <div className='s-button'>
                            <img className='arrow-icon' src={arrow} alt="" />Learn More
                        </div>
                    </div>
                    <div className='s-img'>
                        <img className='img-fluid' src={serviceFive} alt="" />
                    </div>
                </motion.div>
                <motion.div className='item-right ppc'
                variants={boxContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                >
                <div className='s-content'>
                        <div>
                        <h3 className='service-w'>Pay-per-click </h3>
                        <h3 className='service-w second-h '>advertising</h3>
                        </div>
                        <div className='s-button'>
                            <img className='arrow-icon' src={arrow} alt="" />Learn More
                        </div>
                    </div>
                    <div className='s-img'>
                        <img className='img-fluid' src={serviceSix} alt="" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Services
