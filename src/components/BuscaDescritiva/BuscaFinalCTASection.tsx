import React, { useState } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import { motion, useReducedMotion } from 'framer-motion';
import { trackEvent } from '../../libs/analytics';

const MotionPaper = motion.create(Paper);

/**
 * Final call-to-action inviting users to try the search tool.
 */
const BuscaFinalCTASection: React.FC = () => {
  const theme = useTheme();
  const reduceMotion = useReducedMotion();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    trackEvent('search_cta_generate');
  };

  return (
    <MotionPaper
      initial={{ opacity: 0, y: reduceMotion ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: theme.animations.durationBase, ease: theme.animations.easing }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      sx={{
        mt: 8,
        p: { xs: 4, md: 6 },
        textAlign: 'center',
        background: theme.palette.gradients.bluePurple,
        color: theme.palette.common.white,
        borderRadius: 2,
        boxShadow: theme.customShadows.neon,
      }}
    >
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Sua próxima lista de clientes está a um clique. Experimente grátis.
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{ color: alpha(theme.palette.common.white, 0.9), mb: 2 }}
      >
        Acelere suas vendas com inteligência
      </Typography>
      <Box sx={{ mt: 3, display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          href="/cadastro"
          onClick={handleClick}
          aria-label="Gerar lista de clientes agora"
          disabled={loading}
          sx={{
            background: theme.palette.gradients.purplePink,
            color: theme.palette.common.white,
            boxShadow: theme.customShadows.neon,
            transition: 'transform 0.3s',
            '&:hover': {
              background: theme.palette.gradients.bluePurple,
              transform: 'translateY(-2px)',
              boxShadow: theme.customShadows.neon,
            },
          }}
        >
          {loading ? <CircularProgress size={20} color="inherit" /> : '⚡ Gerar Lista Agora'}
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          href="https://wa.me/SEUNUMERO?text=Olá, quero falar com um especialista sobre a Busca Descritiva!"
          target="_blank"
          aria-label="Falar com um especialista via WhatsApp"
          onClick={() => trackEvent('search_cta_whatsapp')}
          sx={{
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: theme.customShadows.neon,
            },
          }}
        >
          💬 Falar com especialista
        </Button>
      </Box>
    </MotionPaper>
  );
};

export default BuscaFinalCTASection;
