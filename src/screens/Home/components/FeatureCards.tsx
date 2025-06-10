import React from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { GanttChart, Search, Mail } from 'lucide-react';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  cta: string;
}

const FeatureCards: React.FC = () => {
  const theme = useTheme();

  const features: Feature[] = [
    {
      icon: <GanttChart size={56} color={theme.palette.primary.light} />,
      title: 'Agente de Edital',
      description:
        'Envie o edital em PDF e receba empresas compatíveis em minutos.',
      cta: 'Try Now',
    },
    {
      icon: <Search size={56} color={theme.palette.primary.light} />,
      title: 'Busca Descritiva',
      description:
        'Descreva a empresa ideal e gere uma lista qualificada.',
      cta: 'Generate My List',
    },
    {
      icon: <Mail size={56} color={theme.palette.primary.light} />,
      title: 'Contato Automático',
      description:
        'Envie campanhas personalizadas para prospects de forma rápida.',
      cta: 'Start Outreach',
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid item xs={12} sm={6} md={4} key={feature.title}>
              <MotionBox
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                sx={{
                  p: 4,
                  height: '100%',
                  background: theme.palette.background.paper,
                  borderRadius: theme.shape.borderRadius * 2.5,
                  boxShadow: theme.customShadows.card,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  border: '2px solid transparent',
                  backgroundImage: `linear-gradient(${theme.palette.background.paper}, ${theme.palette.background.paper}) padding-box, ${theme.palette.gradients.bluePurple} border-box`,
                }}
              >
                <Box aria-hidden="true" sx={{ mb: 3, filter: 'drop-shadow(0 0 6px rgba(123,47,242,0.6))' }}>
                  {feature.icon}
                </Box>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 700 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  {feature.description}
                </Typography>
                <MotionButton
                  variant="contained"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={feature.cta}
                  sx={{
                    mt: 'auto',
                    background: theme.palette.gradients.purplePink,
                    color: '#fff',
                    boxShadow: theme.customShadows.neon,
                    borderRadius: theme.shape.borderRadius * 2,
                    px: 3,
                    py: 1.5,
                    fontWeight: 600,
                  }}
                >
                  {feature.cta}
                </MotionButton>
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeatureCards;
