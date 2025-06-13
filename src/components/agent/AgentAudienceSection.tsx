import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { motion, useReducedMotion } from 'framer-motion';

const audiences = [
  {
    emoji: '🧑\u200d⚖️',
    aria: 'Jurídico, compras e assessorias',
    title: 'Jurídico, Compras e Assessorias',
    desc: 'Automatize a análise de elegibilidade em editais com precisão.',
  },
  {
    emoji: '🏛️',
    aria: 'Órgãos públicos e empresas contratantes',
    title: 'Órgãos públicos e empresas contratantes',
    desc: 'Encontre fornecedores ideais para cada projeto.',
  },
  {
    emoji: '🚀',
    aria: 'Startups e consultorias de prospecção',
    title: 'Startups e consultorias de prospecção',
    desc: 'Ganhe velocidade e assertividade na busca por oportunidades.',
  },
];

const MotionPaper = motion(Paper);

/**
 * Section highlighting who benefits from the Agente de Edital service.
 */
const AgentAudienceSection: React.FC = () => {
  const theme = useTheme();
  const reduceMotion = useReducedMotion();
  return (
    <Box sx={{ my: { xs: 6, md: 10 } }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ textAlign: 'center', fontWeight: 600 }}
      >
        Ideal para...
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {audiences.map((a) => (
          <Grid item xs={12} sm={6} md={4} key={a.title}>
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
                component="span"
                role="img"
                aria-label={a.aria}
                sx={{
                  fontSize: 48,
                  display: 'inline-block',
                  mb: 2,
                  filter: `drop-shadow(0 0 6px ${alpha(
                    theme.palette.primary.light,
                    0.6
                  )})`,
                }}
              >
                {a.emoji}
              </Box>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                {a.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {a.desc}
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

export default AgentAudienceSection;
