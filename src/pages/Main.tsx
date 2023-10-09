import React from 'react';
import WhyUs from '../components/WhyUs';
import Services from '../components/Services';
import OurProjects from '../components/OurProjects';
import ContactUs from '../components/ContactUs';
import Brief from '../components/Brief';
import FAQ from '../components/FAQ';
import Widget from '../components/Widget';


const Main: React.FC = () => {
  return (
    <>
      <WhyUs/>
      <Services/>
      <OurProjects/>
      <ContactUs/>
      <Brief/>
      <FAQ/>
      <Widget/>
    </>
  );
};

export default Main;