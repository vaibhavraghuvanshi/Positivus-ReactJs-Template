import React from 'react';
import Banner from '../components/Banner';
import Client from '../components/Client';
import Services from '../components/Services';
import Cta from '../components/Cta';
import CaseStudies from '../components/CaseStudies';
import Team from '../components/Team';

const Home = () => {
  return (
    <div className='container'>
      <section id="home">
        <Banner />
      </section>
      <section id="client">
        <Client />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="cta">
        <Cta />
      </section>
      <section id="caseStudies">
        <CaseStudies />
      </section>
      <section id="team">
        <Team />
      </section>
    </div>
  );
}

export default Home;
