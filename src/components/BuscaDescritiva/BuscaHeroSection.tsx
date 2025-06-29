import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { motion, useReducedMotion } from 'framer-motion';

const MotionBox = motion.create(Box);

/**
 * Hero section for the Busca Descritiva page.
 */
const BuscaHeroSection: React.FC = () => {
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
            Descreva sua empresa ideal. Receba a lista perfeita em segundos.
          </Typography>
        <Typography
          variant="h4"
          component="p"
          sx={{ color: alpha(theme.palette.common.white, 0.85) }}
        >
          A IA entende sua necessidade, encontra os melhores contatos e entrega tudo pronto para você prospectar.
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ mt: 1, color: theme.palette.primary.light, fontWeight: 600 }}
        >
          IA que entende sua demanda
        </Typography>
      </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
          <Box
            component="img"
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXd2YWowYXd5dDAxMzR0azlpZDUyb2hxcnpnbDVoY3ZwdTZ3cDJrbCZjdD1n/3ov9jNb2WMSu0c3XgE/giphy.gif"
            alt="IA transformando descrição em lista de contatos"
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

export default BuscaHeroSection;
