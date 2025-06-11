import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Box
      id="home"
      sx={{
        background: theme.palette.gradients.bluePurple,
        pt: { xs: 15, md: 20 },
        pb: { xs: 8, md: 12 },
        minHeight: { md: '80vh' },
        overflow: 'hidden',
        position: 'relative',
        color: '#fff',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: `radial-gradient(circle at 30% 30%, rgba(123,47,242,0.25), transparent 40%), radial-gradient(circle at 70% 60%, rgba(243,87,168,0.2), transparent 45%)`,
        }}
      />
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
                  fontSize: { xs: '2.8rem', sm: '3.4rem', md: '4rem' },
                  mb: 2,
                  textShadow: '0 2px 4px rgba(0,0,0,0.4)',
                }}
              >
                Impulsione seus Leads com{' '}
                <Box
                  component="span"
                  sx={{
                    background: theme.palette.gradients.purplePink,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  IA
                </Box>
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
                Geração de clientes em escala com automação inteligente.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <MotionButton
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowRight />}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/cadastro")}
                  sx={{
                    py: 1.5,
                    px: 3,
                    fontWeight: 600,
                    borderRadius: theme.shape.borderRadius * 2,
                    background: theme.palette.gradients.purplePink,
                    boxShadow: theme.customShadows.neon,
                    color: '#fff',
                  }}
                >
                  Start Free Trial
                </MotionButton>

                <ScrollLink
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <MotionButton
                    variant="outlined"
                    size="large"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    sx={{
                      ml: 2,
                      py: 1.5,
                      px: 3,
                      fontWeight: 600,
                      borderRadius: theme.shape.borderRadius * 2,
                      color: '#fff',
                      border: '2px solid transparent',
                      background:
                        `linear-gradient(${theme.palette.background.paper}, ${theme.palette.background.paper}) padding-box, ${theme.palette.gradients.purplePink} border-box`,
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
              <Cpu
                size={220}
                color={theme.palette.primary.light}
                style={{ filter: 'drop-shadow(0 0 10px rgba(123,47,242,0.6))' }}
              />

              {/* Decorative Elements */}
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: -10, md: -20 },
                  right: { xs: 10, md: 40 },
                  width: { xs: '6.25rem', md: '7.5rem' },
                  height: { xs: '6.25rem', md: '7.5rem' },
                  background: theme.palette.gradients.purplePink,
                  borderRadius: '50%',
                  opacity: 0.4,
                  zIndex: 0,
                  filter: 'blur(2px)',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: { xs: -10, md: -30 },
                  left: { xs: 10, md: 30 },
                  width: { xs: '9rem', md: '9.375rem' },
                  height: { xs: '9rem', md: '9.375rem' },
                  background: theme.palette.gradients.bluePurple,
                  borderRadius: '50%',
                  opacity: 0.3,
                  filter: 'blur(3px)',
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
