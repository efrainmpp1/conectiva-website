import React from "react";
import { Box } from "@mui/material";
import ContactSection from "../Home/ContactSection";
import BackHomeButton from "../../libs/components/BackHomeButton";

const ContactPage: React.FC = () => {
  return (
    <Box sx={{ pt: { xs: 6, md: 8 } }}>
      <ContactSection topAction={<BackHomeButton />} />
    </Box>
  );
};

export default ContactPage;
