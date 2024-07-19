import React from 'react';
import banner from "../assets/banner.png";
import { motion } from 'framer-motion';

const Banner = () => {

  return (
    <section className="banner" id="home">
      <div className="container">
      <motion.div className="row">
        <motion.div
          className="col-sm-12 col-lg-6 col-sm-12 p-0"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeIn", delay: 0.3, duration: 1 }}
        >
          <div className="content-banner">
            <h1>Navigating the digital landscape for success</h1>
            <p>
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
          </div>
          <div className="cta_btn">
            <button className="btn btn-primary">Book a consultation</button>
          </div>
        </motion.div>

        <motion.div
          className="col-sm-12 col-lg-6 col-sm-12 p-0"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeIn", duration: 1 }}
        >
          <div className="img-wrapper text-center">
            <img src={banner} alt="Banner Img"/>
          </div>
        </motion.div>

      </motion.div>
      </div>
    </section>
  );
};

export default Banner;
