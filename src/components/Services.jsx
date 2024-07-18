import React from 'react'
import serviceOne from "../assets/serviceOne.png"
import serviceTwo from "../assets/serviceTwo.png"
import arrow from "../assets/icon-arrow.png"
import serviceThree from "../assets/serviceThree.png"
import serviceFour from "../assets/serviceFour.png"
import serviceFive from "../assets/serviceFive.png"
import serviceSix from "../assets/serviceSix.png"


const Services = () => {
    return (
        <section className='services container' id='services'>
            <div className='heading'>
                <h2 className='service-h'>Services</h2>
                <p className='h-text'>At our digital marketing agency, we offer a range of services to <br /> help businesses grow and succeed online. These services include:</p>
            </div>
            <div className='banner_container mb-4'>
                <div className='item-left seo'>
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
                </div>
                <div className='item-right ppc'>
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
                </div>
            </div>

            <div className='banner_container mb-4'>
            <div className='item-right ppc'>
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
                </div>
                <div className='item-left seo smm'>
                    
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
                </div>
               
            </div>

            <div className='banner_container mb-4'>
                <div className='item-left seo'>
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
                </div>
                <div className='item-right ppc'>
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
                </div>
            </div>
        </section>
    )
}

export default Services
