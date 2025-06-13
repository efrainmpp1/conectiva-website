import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';

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

const PublicBiddingAudience: React.FC = () => {
  const theme = useTheme();
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
            <Paper
              sx={{
                p: 4,
                textAlign: 'center',
                backgroundColor: theme.palette.background.paper,
                borderRadius: 2,
                boxShadow: theme.customShadows.card,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: theme.customShadows.neon,
                },
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
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PublicBiddingAudience;
