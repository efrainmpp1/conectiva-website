import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { motion, useReducedMotion } from 'framer-motion';
import { Clock, Target, Handshake } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Economia de tempo',
    desc: 'Receba empresas qualificadas em minutos',
  },
  {
    icon: Target,
    title: 'Precisão incomparável',
    desc: 'Cruzamento de critérios legais e técnicos',
  },
  {
    icon: Handshake,
    title: 'Mais vitórias',
    desc: 'Dados prontos: CNPJ, contato e segmento',
  },
];

const MotionPaper = motion(Paper);

const PublicBiddingBenefits: React.FC = () => {
  const theme = useTheme();
  const reduceMotion = useReducedMotion();
  return (
    <Box sx={{ my: { xs: 6, md: 10 } }}>
      <Typography
        variant="subtitle1"
        sx={{ textAlign: 'center', color: theme.palette.primary.light, mb: 3, fontWeight: 600 }}
      >
        Zero dor de cabeça, só resultado
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {benefits.map((b) => {
          const Icon = b.icon;
          return (
            <Grid item xs={12} sm={6} md={4} key={b.title}>
              <MotionPaper
                initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: theme.animations.durationBase, ease: theme.animations.easing }}
                whileHover={{ scale: 1.05, boxShadow: theme.customShadows.neon }}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: 2,
                  boxShadow: theme.customShadows.card,
                }}
              >
                <Box
                  aria-hidden="true"
                  sx={{
                    mb: 2,
                    filter: `drop-shadow(0 0 6px ${alpha(theme.palette.primary.light, 0.6)})`,
                  }}
                >
                  <Icon size={48} color={theme.palette.primary.light} />
                </Box>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {b.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {b.desc}
                </Typography>
              </MotionPaper>
            </Grid>
          );
        })}
      </Grid>
      <Box
        sx={{
          height: 2,
          background: theme.palette.gradients.purplePink,
          mt: { xs: 6, md: 8 },
        }}
      />
    </Box>
  );
};

export default PublicBiddingBenefits;
