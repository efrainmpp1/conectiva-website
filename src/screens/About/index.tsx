import React from "react";
import { Box } from "@mui/material";
import AboutSection from "../Home/AboutSection";

const AboutPage: React.FC = () => {
  return (
    <Box sx={{ pt: { xs: 8, md: 10 } }}>
      <AboutSection />
    </Box>
  );
};

export default AboutPage;