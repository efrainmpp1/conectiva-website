import React from "react";
import { Box, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";
import ContactSection from "../Home/ContactSection";

const ContactPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ pt: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Button
          startIcon={<Home />}
          onClick={() => navigate("/")}
          variant="outlined"
          sx={{ mb: 4 }}
        >
          Voltar para Home
        </Button>
      </Container>
      <ContactSection />
    </Box>
  );
};

export default ContactPage;