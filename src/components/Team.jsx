import React from 'react'

import team1 from "../assets/team1.png"
import team2 from "../assets/team2.png"
import team3 from "../assets/team3.png"
import team4 from "../assets/team4.png"
import team5 from "../assets/team5.png"
import team6 from "../assets/team6.png"
import linkedIn from "../assets/social-icon.png"

const Team = () => {
    return (
        <section className='services team container' id='team'>
            <div className='heading'>
                <h2 className='service-h'>Our Team</h2>
                <p className='h-text'>Meet the skilled and experienced team behind our<br />
                    successful digital marketing strategies</p>
            </div>

            <div className="row">
              <div className="col-md-4">
              <div className="card">   
                    <div className="card-header">
                        <img src={team1} alt="" />
                        <div className="team_member">
                            <h4 className='m-0'>John Smith</h4>
                            <p>CEO and Founder</p>
                        </div>
                        <div className="social_icon">
                            <a href="#">
                            <img src={linkedIn} alt="LinkedIn Icon" />
                            </a>                            
                        </div>                    
                    </div>               
                    <div className="card-body">
                        <p className="card-text">10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
                    </div>
                </div>
              </div>
                {/* Card 2 */}
                <div className="col-md-4">
                <div className="card">   
                    <div className="card-header">
                        <img src={team2} alt="" />
                        <div className="team_member">
                            <h4 className='m-0'>John Smith</h4>
                            <p>CEO and Founder</p>
                        </div>
                        <div className="social_icon">
                            <a href="#">
                            <img src={linkedIn} alt="LinkedIn Icon" />
                            </a>                            
                        </div>                    
                    </div>               
                    <div className="card-body">
                        <p className="card-text">10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
                    </div>
                </div>
                </div>
                {/* Card 3 */}
                <div className="col-md-4">
                <div className="card">   
                    <div className="card-header">
                        <img src={team3} alt="" />
                        <div className="team_member">
                            <h4 className='m-0'>John Smith</h4>
                            <p>CEO and Founder</p>
                        </div>
                        <div className="social_icon">
                            <a href="#">
                            <img src={linkedIn} alt="LinkedIn Icon" />
                            </a>                            
                        </div>                    
                    </div>               
                    <div className="card-body">
                        <p className="card-text">10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
                    </div>
                </div>
                </div>
                {/* card 4 */}
                <div className="col-md-4">
                <div className="card">   
                    <div className="card-header">
                        <img src={team4} alt="" />
                        <div className="team_member">
                            <h4 className='m-0'>John Smith</h4>
                            <p>CEO and Founder</p>
                        </div>
                        <div className="social_icon">
                            <a href="#">
                            <img src={linkedIn} alt="LinkedIn Icon" />
                            </a>                            
                        </div>                    
                    </div>               
                    <div className="card-body">
                        <p className="card-text">10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
                    </div>
                </div>
                </div>
                {/* card 5 */}
                <div className="col-md-4">
                <div className="card">   
                    <div className="card-header">
                        <img src={team5} alt="" />
                        <div className="team_member">
                            <h4 className='m-0'>John Smith</h4>
                            <p>CEO and Founder</p>
                        </div>
                        <div className="social_icon">
                            <a href="#">
                            <img src={linkedIn} alt="LinkedIn Icon" />
                            </a>                            
                        </div>                    
                    </div>               
                    <div className="card-body">
                        <p className="card-text">10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
                    </div>
                </div>
                </div>
                {/* card 6 */}
                <div className="col-md-4">
                <div className="card">   
                    <div className="card-header">
                        <img src={team6} alt="" />
                        <div className="team_member">
                            <h4 className='m-0'>John Smith</h4>
                            <p>CEO and Founder</p>
                        </div>
                        <div className="social_icon">
                            <a href="#">
                            <img src={linkedIn} alt="LinkedIn Icon" />
                            </a>                            
                        </div>                    
                    </div>               
                    <div className="card-body">
                        <p className="card-text">10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy</p>
                    </div>
                </div>
                </div>
              
            </div>
        </section>
    )
}

export default Team
