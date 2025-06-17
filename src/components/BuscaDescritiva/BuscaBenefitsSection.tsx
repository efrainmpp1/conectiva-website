import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { motion, useReducedMotion } from 'framer-motion';

const benefits = [
  {
    emoji: '📝',
    aria: 'Ultra simples',
    title: 'Ultra Simples',
    desc: 'Digite uma frase, pronto.',
  },
  {
    emoji: '🏃\u200d♂️',
    aria: 'Rapidez imediata',
    title: 'Rapidez Imediata',
    desc: 'Resultado em segundos, sem complicação.',
  },
  {
    emoji: '📇',
    aria: 'Contatos qualificados',
    title: 'Contatos Qualificados',
    desc: 'Nome, CNPJ, segmento, localização.',
  },
];

const MotionPaper = motion(Paper);

/**
 * Benefits section highlighting key points of Busca Descritiva.
 */
const BuscaBenefitsSection: React.FC = () => {
  const theme = useTheme();
  const reduceMotion = useReducedMotion();
  return (
    <Box sx={{ my: { xs: 6, md: 10 } }}>
      <Typography
        variant="subtitle1"
        sx={{ textAlign: 'center', color: theme.palette.primary.light, mb: 3, fontWeight: 600 }}
      >
        Benefícios em Destaque
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ textAlign: 'center', color: alpha(theme.palette.common.white, 0.8), mb: 4 }}
      >
        Prospecte com precisão, avance com velocidade
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {benefits.map((b) => (
          <Grid item xs={12} sm={6} md={4} key={b.title}>
            <MotionPaper
              initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: theme.animations.durationBase, ease: theme.animations.easing }}
              whileHover={{ scale: 1.05, boxShadow: theme.customShadows.neon }}
              whileTap={{ scale: 0.98 }}
              sx={{
                p: 4,
                textAlign: 'center',
                backgroundColor: theme.palette.background.paper,
                borderRadius: 2,
                boxShadow: theme.customShadows.card,
              }}
            >
              <Box
                component="span"
                role="img"
                aria-label={b.aria}
                sx={{
                  fontSize: 48,
                  display: 'inline-block',
                  mb: 2,
                  filter: `drop-shadow(0 0 6px ${alpha(theme.palette.primary.light, 0.6)})`,
                }}
              >
                {b.emoji}
              </Box>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                {b.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {b.desc}
              </Typography>
            </MotionPaper>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          height: 2,
          background: theme.palette.gradients.bluePurple,
          mt: { xs: 6, md: 8 },
        }}
      />
    </Box>
  );
};

export default BuscaBenefitsSection;
