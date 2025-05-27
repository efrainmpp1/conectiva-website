import React from "react";
import { Box } from "@mui/material";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import AboutPreview from "./AboutPreview";
import PricingSection from "./PricingSection";

const Home: React.FC = () => {
  return (
    <Box>
      <HeroSection />
      <AboutPreview />
      <ServicesSection />
      <PricingSection />
    </Box>
  );
};

export default Home;