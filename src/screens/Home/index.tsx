import React from 'react';
import { Box } from '@mui/material';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import FAQSection from './FAQSection';
import ContactSection from './ContactSection';

const Home: React.FC = () => {
  return (
    <Box>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FAQSection />
      <ContactSection />
    </Box>
  );
};

export default Home;