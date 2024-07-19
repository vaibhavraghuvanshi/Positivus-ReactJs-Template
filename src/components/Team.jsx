import React from 'react';
import { motion } from 'framer-motion';

import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";
import team5 from "../assets/team5.png";
import team6 from "../assets/team6.png";
import linkedIn from "../assets/social-icon.png";

// Define the variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Adjust delay for staggered effect
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

const teamMembers = [
  { image: team1, name: 'John Smith', role: 'CEO and Founder' },
  { image: team2, name: 'Jane Doe', role: 'Marketing Specialist' },
  { image: team3, name: 'Michael Johnson', role: 'Lead Developer' },
  { image: team4, name: 'Emily Davis', role: 'UX Designer' },
  { image: team5, name: 'Sarah Brown', role: 'Content Strategist' },
  { image: team6, name: 'David Wilson', role: 'SEO Expert' },
];

const Team = () => {
  return (
    <section className='services team container' id='team'>
      <div className='heading'>
        <h2 className='service-h'>Our Team</h2>
        <p className='h-text'>
          Meet the skilled and experienced team behind our<br />
          successful digital marketing strategies
        </p>
      </div>

      <div className="row">
        {teamMembers.map((member, index) => (
          <div className="col-6 col-lg-4" key={index}>
            <motion.div
              className="card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="card-header">
                <img src={member.image} alt={member.name} />
                <div className="team_member">
                  <h4 className='m-0'>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
                <div className="social_icon">
                  <a href="#">
                    <img src={linkedIn} alt="LinkedIn Icon" />
                  </a>
                </div>
              </div>
              <div className="card-body">
                <p className="card-text">
                  10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy.
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
