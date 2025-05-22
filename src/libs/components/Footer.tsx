import React from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  Grid,
  IconButton,
  Divider,
} from "@mui/material";
import { Github, Linkedin } from "lucide-react";
import { WhatsApp } from "@mui/icons-material";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.dark",
        color: "white",
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Conectiva
            </Typography>
            <Typography variant="body2" sx={{ maxWidth: "80%", mb: 2 }}>
              Revolucionando a geração de leads e a aquisição de clientes com o
              poder da inteligência artificial.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton color="inherit" size="small" aria-label="twitter">
                <WhatsApp fontSize="small" />
              </IconButton>
              <IconButton color="inherit" size="small" aria-label="linkedin">
                <Linkedin size={20} />
              </IconButton>
              <IconButton color="inherit" size="small" aria-label="github">
                <Github size={20} />
              </IconButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#home" color="inherit" display="block" sx={{ mb: 1 }}>
              Home
            </Link>
            <Link href="#about" color="inherit" display="block" sx={{ mb: 1 }}>
              About Us
            </Link>
            <Link
              href="#services"
              color="inherit"
              display="block"
              sx={{ mb: 1 }}
            >
              Services
            </Link>
            <Link href="#faq" color="inherit" display="block" sx={{ mb: 1 }}>
              FAQ
            </Link>
            <Link href="#contact" color="inherit" display="block">
              Contact
            </Link>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Entre em Contato
            </Typography>
            <Typography variant="body2" gutterBottom>
              Natal, RN
            </Typography>
            <Typography variant="body2" gutterBottom>
              info@conectiva.com
            </Typography>
            <Typography variant="body2">(84) 99975-0179</Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: "rgba(255, 255, 255, 0.2)" }} />

        <Typography variant="body2" align="center">
          © {currentYear} Conectiva. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
