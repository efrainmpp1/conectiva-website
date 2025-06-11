import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Cpu } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const MotionButton = motion(Button);
const MotionBox = motion(Box);

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  return (
    <MotionBox
      id="home"
      sx={{
        background: theme.palette.gradients.bluePurple,
        pt: { xs: 15, md: 20 },
        pb: { xs: 8, md: 12 },
        minHeight: { md: '80vh' },
        overflow: 'hidden',
        position: 'relative',
        color: theme.palette.common.white,
      }}
        initial={{ opacity: 0, y: reduceMotion ? 0 : 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: theme.animations.durationLong, ease: theme.animations.easing }}
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
            <MotionBox
              sx={{
                textAlign: { xs: "center", md: "left" },
                mb: { xs: 4, md: 0 },
              }}
              initial={{ opacity: 0, x: reduceMotion ? 0 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: theme.animations.durationBase, ease: theme.animations.easing }}
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
                Impulsione Leads com{' '}
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
                paragraph
                sx={{
                  mb: 4,
                  maxWidth: { md: "80%" },
                  mx: { xs: "auto", md: 0 },
                  color: alpha(theme.palette.common.white, 0.8),
                }}
              >
                Automatize a geração de clientes com IA.
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
                  transition={{ duration: theme.animations.durationShort, ease: theme.animations.easing }}
                  onClick={() => navigate("/cadastro")}
                  sx={{
                    py: 1.5,
                    px: 3,
                    fontWeight: 600,
                    borderRadius: theme.shape.borderRadius * 2,
                    background: theme.palette.gradients.purplePink,
                    boxShadow: theme.customShadows.neon,
                    color: theme.palette.common.white,
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
                    transition={{ duration: theme.animations.durationShort, ease: theme.animations.easing }}
                    sx={{
                      ml: 2,
                      py: 1.5,
                      px: 3,
                      fontWeight: 600,
                      borderRadius: theme.shape.borderRadius * 2,
                      color: theme.palette.common.white,
                      border: '2px solid transparent',
                      background:
                        `linear-gradient(${theme.palette.background.paper}, ${theme.palette.background.paper}) padding-box, ${theme.palette.gradients.purplePink} border-box`,
                    }}
                  >
                    Explore Features
                  </MotionButton>
                </ScrollLink>
              </Box>
            </MotionBox>
          </Grid>

          <Grid item xs={12} md={6}>
            <MotionBox
              sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
              initial={{ opacity: 0, x: reduceMotion ? 0 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: theme.animations.durationBase, ease: theme.animations.easing }}
            >
              <Cpu
                size={220}
                color={theme.palette.primary.light}
                style={{
                  filter: `drop-shadow(0 0 10px ${alpha(
                    theme.palette.primary.light,
                    0.6
                  )})`,
                }}
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
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </MotionBox>
  );
};

export default HeroSection;
