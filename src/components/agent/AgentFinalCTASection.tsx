import React, { useState } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import { motion, useReducedMotion } from 'framer-motion';
import { trackEvent } from '../../libs/analytics';

const MotionPaper = motion.create(Paper);

/**
 * Highlighted final call-to-action encouraging registration or contact.
 */
const AgentFinalCTASection: React.FC = () => {
  const theme = useTheme();
  const reduceMotion = useReducedMotion();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    trackEvent('cta_final_register');
  };

  return (
    <MotionPaper
      initial={{ opacity: 0, y: reduceMotion ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: theme.animations.durationBase, ease: theme.animations.easing }}
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
        Você está a 2 minutos de receber sua primeira lista de empresas prontas para disputar seu edital.
      </Typography>
      <Box sx={{ mt: 3, display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          href="/cadastro"
          onClick={handleClick}
          aria-label="Criar conta e testar gratuitamente"
          disabled={loading}
          sx={{
            background: theme.palette.gradients.purplePink,
            color: theme.palette.common.white,
            boxShadow: theme.customShadows.neon,
            '&:hover': { background: theme.palette.gradients.bluePurple },
          }}
        >
          {loading ? <CircularProgress size={20} color="inherit" /> : '⚡ Criar Conta e Testar Grátis'}
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="large"
          href="https://wa.me/SEUNUMERO?text=Olá, quero falar com um especialista sobre o Agente de Edital!"
          target="_blank"
          aria-label="Falar com um especialista via WhatsApp"
          onClick={() => trackEvent('cta_final_whatsapp')}
        >
          💬 Falar com um especialista
        </Button>
      </Box>
    </MotionPaper>
  );
};

export default AgentFinalCTASection;
