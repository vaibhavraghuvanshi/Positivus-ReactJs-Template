import React from 'react';
import amazon from "../assets/amazon.png";
import dribble from "../assets/dribble.png";
import notion from "../assets/notion.png";
import netflix from "../assets/netflix.png";
import hubspot from "../assets/hubspot.png";
import zoom from "../assets/zoom.png";
import { motion } from 'framer-motion';

const fadeInAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Client = () => {
  return (
    <div className='client'>
      <div className="client_logo">
        {[amazon, dribble, hubspot, notion, netflix, zoom].map((logo, index) => (
          <motion.img
            key={index}
            src={logo}
            alt="Client logo"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
            className='img-fluid'
          />
        ))}
      </div>
    </div>
  );
};

export default Client;
