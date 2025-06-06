import React from "react";
import { Box } from "@mui/material";
import AboutSection from "../Home/AboutSection";
import BackHomeButton from "../../libs/components/BackHomeButton";

const AboutPage: React.FC = () => {

  return (
    <Box sx={{ pt: { xs: 8, md: 10 } }}>
      <AboutSection topAction={<BackHomeButton />} />
    </Box>
  );
};

export default AboutPage;
