import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

// Importa a imagem do mapa com conexões
import heroBackground from '../../assets/hero_image.png';

const MotionButton = motion.create(Button);
const MotionBox = motion.create(Box);

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  return (
    <MotionBox
      id="home"
      sx={{
        backgroundImage: `url(${heroBackground}), ${theme.palette.gradients.bluePurple}`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
        color: theme.palette.common.white,
      }}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: theme.animations.durationLong, ease: theme.animations.easing }}
    >
      {/* Overlay para manter o gradiente e dar contraste ao texto */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.3)', // leve escurecimento
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          {/* TEXTO */}
          <Grid item xs={12} md={6}>
            <MotionBox
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                mb: { xs: 4, md: 0 },
              }}
              initial={{ opacity: 0, x: reduceMotion ? 0 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: theme.animations.durationBase,
                ease: theme.animations.easing,
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
                  textShadow: '0 2px 6px rgba(0,0,0,0.6)',
                }}
              >
                Localize Empresas Alvo com{' '}
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
                  maxWidth: { md: '80%' },
                  mx: { xs: 'auto', md: 0 },
                  color: alpha(theme.palette.common.white, 0.85),
                }}
              >
                A Inteligência Artificial Que Busca por Você
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                <MotionButton
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowRight />}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    duration: theme.animations.durationShort,
                    ease: theme.animations.easing,
                  }}
                  onClick={() => navigate('/cadastro')}
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

                <ScrollLink to="services" spy={true} smooth={true} offset={-70} duration={500}>
                  <MotionButton
                    variant="outlined"
                    size="large"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{
                      duration: theme.animations.durationShort,
                      ease: theme.animations.easing,
                    }}
                    sx={{
                      ml: 2,
                      py: 1.5,
                      px: 3,
                      fontWeight: 600,
                      borderRadius: theme.shape.borderRadius * 2,
                      color: theme.palette.common.white,
                      border: '2px solid transparent',
                      background: `linear-gradient(${theme.palette.background.paper}, ${theme.palette.background.paper}) padding-box, ${theme.palette.gradients.purplePink} border-box`,
                    }}
                  >
                    Explore Features
                  </MotionButton>
                </ScrollLink>
              </Box>
            </MotionBox>
          </Grid>

          {/* DECORATIVE AREA (removendo o ícone CPU pois o mapa já está no fundo) */}
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Container>
    </MotionBox>
  );
};

export default HeroSection;
