import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

const HeroSection: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      id="home"
      sx={{
        background: "linear-gradient(135deg, #1a237e 0%, #0d1b2a 100%)",
        pt: { xs: 15, md: 20 },
        pb: { xs: 8, md: 12 },
        overflow: "hidden",
        position: "relative",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: { xs: "center", md: "left" },
                mb: { xs: 4, md: 0 },
              }}
            >
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 800,
                  textTransform: "uppercase",
                  fontSize: { xs: "2.8rem", sm: "3.4rem", md: "4rem" },
                  background:
                    "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 2,
                }}
              >
                Turbine seus leads com IA
              </Typography>

              <Typography
                variant="h5"
                color="rgba(255,255,255,0.8)"
                paragraph
                sx={{
                  mb: 4,
                  maxWidth: { md: "80%" },
                  mx: { xs: "auto", md: 0 },
                }}
              >
                Automatize a prospeção e conquiste clientes de forma inteligente
                com nossa plataforma de IA.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <MotionButton
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<ArrowRight />}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    sx={{
                      py: 1.5,
                      px: 3,
                      fontWeight: 600,
                      borderRadius: "50px",
                      boxShadow: `0 8px 20px ${alpha(theme.palette.primary.main, 0.4)}`,
                    }}
                  >
                    Comece Gratuitamente
                  </MotionButton>
                </ScrollLink>

                <ScrollLink
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <MotionButton
                    variant="outlined"
                    color="secondary"
                    size="large"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    sx={{
                      ml: 2,
                      py: 1.5,
                      px: 3,
                      fontWeight: 600,
                      borderRadius: "50px",
                      color: "#fff",
                      borderColor: "rgba(255,255,255,0.6)",
                    }}
                  >
                    Ver Funcionalidades
                  </MotionButton>
                </ScrollLink>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Cpu size={220} color="#ffffff" />

              {/* Decorative Elements */}
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: -10, md: -20 },
                  right: { xs: 10, md: 40 },
                  width: "100px",
                  height: "100px",
                  background:
                    "linear-gradient(45deg, #6a11cb 0%, #2575fc 100%)",
                  borderRadius: "50%",
                  opacity: 0.4,
                  zIndex: 0,
                  filter: "blur(2px)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: { xs: -10, md: -30 },
                  left: { xs: 10, md: 30 },
                  width: "150px",
                  height: "150px",
                  background:
                    "linear-gradient(45deg, #2575fc 0%, #6a11cb 100%)",
                  borderRadius: "50%",
                  opacity: 0.3,
                  filter: "blur(3px)",
                  zIndex: 0,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
