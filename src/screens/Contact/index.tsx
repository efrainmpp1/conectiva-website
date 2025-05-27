import React from "react";
import { Box } from "@mui/material";
import ContactSection from "../Home/ContactSection";

const ContactPage: React.FC = () => {
  return (
    <Box sx={{ pt: { xs: 8, md: 10 } }}>
      <ContactSection />
    </Box>
  );
};

export default ContactPage;