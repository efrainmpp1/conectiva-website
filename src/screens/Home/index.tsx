import React from 'react';
import { Box } from '@mui/material';
import HeroSection from './HeroSection';
import AboutPreview from './AboutPreview';
import PricingSection from './PricingSection';
import FeatureCards from './components/FeatureCards';
import AiProcessIllustration from './components/AiProcessIllustration';

const Home: React.FC = () => {
  return (
    <Box>
      <HeroSection />
      <FeatureCards />
      {/* Visual explanation of how our AI works */}
      <AiProcessIllustration />
      <AboutPreview />
      <PricingSection />
    </Box>
  );
};

export default Home;
