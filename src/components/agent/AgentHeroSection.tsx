import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { motion, useReducedMotion } from 'framer-motion';

const MotionBox = motion(Box);

/**
 * Hero section for the Agente de Edital page.
 */
const AgentHeroSection: React.FC = () => {
  const theme = useTheme();
  const reduceMotion = useReducedMotion();
  return (
    <MotionBox
      sx={{ py: { xs: 8, md: 10 } }}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: theme.animations.durationBase, ease: theme.animations.easing }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '3rem' },
              background: theme.palette.gradients.purplePink,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Agente de Edital: Empresas certas para seu edital. Em minutos.
          </Typography>
          <Typography
            variant="h4"
            component="p"
            sx={{ color: alpha(theme.palette.common.white, 0.85) }}
          >
            Envie seu edital. Nossa IA faz o trabalho por você.
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ mt: 1, color: theme.palette.primary.light, fontWeight: 600 }}
          >
            IA que entende seu edital
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
          <Box
            component="img"
            src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
            alt="IA analisando edital"
            loading="lazy"
            sx={{
              width: { xs: '100%', md: '80%' },
              maxWidth: 360,
              borderRadius: 2,
              boxShadow: theme.customShadows.neon,
              mx: 'auto',
            }}
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          height: 2,
          background: theme.palette.gradients.bluePurple,
          mt: { xs: 6, md: 8 },
        }}
      />
    </MotionBox>
  );
};

export default AgentHeroSection;
