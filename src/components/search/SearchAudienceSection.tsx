import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { motion, useReducedMotion } from 'framer-motion';

const audiences = [
  {
    emoji: '📞',
    aria: 'Marketing e vendas B2B',
    title: 'Marketing e Vendas B2B',
    desc: 'Encontre clientes perfeitos para sua equipe comercial.',
  },
  {
    emoji: '🕵️\u200d♂️',
    aria: 'Consultorias comerciais',
    title: 'Consultorias Comerciais',
    desc: 'Acesse rapidamente fornecedores e prospects ideais.',
  },
  {
    emoji: '🚀',
    aria: 'Times de pré-venda e expansão',
    title: 'Times de Pré-venda/Expansão',
    desc: 'Ganhe velocidade e precisão para novas campanhas.',
  },
];

const MotionPaper = motion(Paper);

/**
 * Audience section for Busca Descritiva.
 */
const SearchAudienceSection: React.FC = () => {
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
      <Typography
        variant="subtitle2"
        sx={{ textAlign: 'center', color: alpha(theme.palette.common.white, 0.8), mb: 4 }}
      >
        Conecte-se aos clientes certos
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
                aria-label={a.aria}
                sx={{
                  fontSize: 48,
                  display: 'inline-block',
                  mb: 2,
                  filter: `drop-shadow(0 0 6px ${alpha(theme.palette.primary.light, 0.6)})`,
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

export default SearchAudienceSection;
