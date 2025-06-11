import React from 'react';
import { Box } from '@mui/material';
import HeroSection from './HeroSection';
import AboutPreview from './AboutPreview';
import PricingSection from './PricingSection';
import FeatureCards from './components/FeatureCards';
import FeatureIcons from './components/FeatureIcons';

const Home: React.FC = () => {
  return (
    <Box>
      <HeroSection />
      <FeatureCards />
      <FeatureIcons />
      <AboutPreview />
      <PricingSection />
    </Box>
  );
};

export default Home;
