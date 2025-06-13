import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
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

const PublicBiddingBenefits: React.FC = () => {
  const theme = useTheme();
  return (
    <Box sx={{ my: { xs: 6, md: 10 } }}>
      <Grid container spacing={4} justifyContent="center">
        {benefits.map((b) => {
          const Icon = b.icon;
          return (
            <Grid item xs={12} sm={6} md={4} key={b.title}>
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
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default PublicBiddingBenefits;
