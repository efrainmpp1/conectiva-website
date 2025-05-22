import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <Box
      id="home"
      sx={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #e4e8ef 100%)",
        pt: { xs: 15, md: 20 },
        pb: { xs: 8, md: 12 },
        overflow: "hidden",
        position: "relative",
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
                  fontWeight: 700,
                  fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                  background:
                    "linear-gradient(90deg, #1976D2 0%, #0D47A1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 2,
                }}
              >
                Turbine seus leads com IA
              </Typography>

              <Typography
                variant="h5"
                color="text.secondary"
                paragraph
                sx={{
                  mb: 4,
                  maxWidth: { md: "80%" },
                  mx: { xs: "auto", md: 0 },
                }}
              >
                A Conectiva transforma a maneira como as empresas geram leads e
                adquirem clientes usando nossa plataforma avançada com
                tecnologia de IA.
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
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<ArrowRight />}
                    sx={{
                      py: 1.5,
                      px: 3,
                      fontWeight: 600,
                      borderRadius: "50px",
                      boxShadow: "0 8px 20px rgba(25, 118, 210, 0.3)",
                    }}
                  >
                    Saiba mais
                  </Button>
                </ScrollLink>

                <ScrollLink
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    sx={{
                      ml: 2,
                      py: 1.5,
                      px: 3,
                      fontWeight: 600,
                      borderRadius: "50px",
                    }}
                  >
                    Nossos Serviços
                  </Button>
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
              <Box
                component="img"
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
                alt="AI Business Solutions"
                sx={{
                  width: "100%",
                  maxWidth: "550px",
                  height: "auto",
                  borderRadius: "20px",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  position: "relative",
                  zIndex: 1,
                  border: "8px solid white",
                }}
              />

              {/* Decorative Elements */}
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: -10, md: -20 },
                  right: { xs: 10, md: 40 },
                  width: "100px",
                  height: "100px",
                  background:
                    "linear-gradient(45deg, #00796B 0%, #009688 100%)",
                  borderRadius: "50%",
                  opacity: 0.3,
                  zIndex: 0,
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
                    "linear-gradient(45deg, #1976D2 0%, #42A5F5 100%)",
                  borderRadius: "50%",
                  opacity: 0.2,
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
