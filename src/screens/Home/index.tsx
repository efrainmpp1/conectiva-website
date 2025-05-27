import React from "react";
import { Box } from "@mui/material";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import AboutPreview from "./AboutPreview";

const Home: React.FC = () => {
  return (
    <Box>
      <HeroSection />
      <AboutPreview />
      <ServicesSection />
    </Box>
  );
}

export default Home;