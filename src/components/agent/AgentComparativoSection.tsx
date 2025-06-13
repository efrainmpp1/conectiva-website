import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { motion, useReducedMotion } from 'framer-motion';

const beforeItems = [
  { emoji: '🕒', label: '5 horas de pesquisa manual', aria: 'cinco horas de pesquisa manual' },
  { emoji: '❌', label: 'Risco de erro nos CNAEs', aria: 'risco de erro nos CNAEs' },
  { emoji: '🤯', label: 'Dúvidas sobre quem pode licitar', aria: 'dúvidas sobre quem pode licitar' },
];

const afterItems = [
  { emoji: '⚡', label: '5 minutos com nossa IA', aria: 'cinco minutos com nossa IA' },
  { emoji: '✅', label: 'Checagem automática dos critérios', aria: 'checagem automática dos critérios' },
  { emoji: '🎯', label: 'Lista pronta com dados de contato', aria: 'lista pronta com dados de contato' },
];

const MotionPaper = motion(Paper);

/**
 * Side-by-side comparison showing workflow before and after using the tool.
 */
const AgentComparativoSection: React.FC = () => {
  const theme = useTheme();
  const reduceMotion = useReducedMotion();
  const cardSx = {
    p: 3,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 2,
    boxShadow: theme.customShadows.card,
    border: `1px solid ${alpha(theme.palette.primary.main, 0.4)}`,
    height: '100%',
  } as const;

  const renderItems = (items: typeof beforeItems) => (
    <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
      {items.map((item) => (
        <Box
          key={item.label}
          component="li"
          sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
        >
          <Box component="span" role="img" aria-label={item.aria} sx={{ mr: 1 }}>
            {item.emoji}
          </Box>
          <Typography variant="body1">{item.label}</Typography>
        </Box>
      ))}
    </Box>
  );

  return (
    <Box sx={{ mb: 6 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <MotionPaper
            sx={cardSx}
            initial={{ opacity: 0, x: reduceMotion ? 0 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: theme.animations.durationBase, ease: theme.animations.easing }}
          >
            <Typography variant="h5" gutterBottom fontWeight={600}>
              Antes
            </Typography>
            {renderItems(beforeItems)}
          </MotionPaper>
        </Grid>
        <Grid item xs={12} md={6}>
          <MotionPaper
            sx={cardSx}
            initial={{ opacity: 0, x: reduceMotion ? 0 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: theme.animations.durationBase, ease: theme.animations.easing }}
          >
            <Typography variant="h5" gutterBottom fontWeight={600}>
              Depois com IA
            </Typography>
            {renderItems(afterItems)}
          </MotionPaper>
        </Grid>
      </Grid>
      <Typography
        variant="subtitle1"
        sx={{ mt: 3, textAlign: 'center', fontStyle: 'italic' }}
      >
        “Antes, nossa cliente Joana gastava 5h por edital. Hoje, resolve tudo em
        5 minutos e já fechou novos contratos.”
      </Typography>
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

export default AgentComparativoSection;
