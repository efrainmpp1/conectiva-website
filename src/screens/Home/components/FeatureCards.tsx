import React from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { motion, useReducedMotion } from 'framer-motion';
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
  const reduceMotion = useReducedMotion();

  const features: Feature[] = [
    {
      icon: <GanttChart size={56} color={theme.palette.primary.light} />,
      title: 'Agente de Edital',
      description:
        'Envie o edital e receba empresas ideais em minutos.',
      cta: 'Try Now',
    },
    {
      icon: <Search size={56} color={theme.palette.primary.light} />,
      title: 'Busca Descritiva',
      description:
        'Descreva sua empresa ideal e gere uma lista em segundos.',
      cta: 'Generate My List',
    },
    {
      icon: <Mail size={56} color={theme.palette.primary.light} />,
      title: 'Contato Automático',
      description:
        'Dispare campanhas personalizadas em escala.',
      cta: 'Start Free Trial',
    },
  ];

  return (
    <Box id="services" sx={{ py: { xs: 8, md: 12 }, backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                backgroundColor: 'primary.main',
                borderRadius: '2px',
              },
            }}
          >
            Principais Funcionalidades
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              mt: 4,
            }}
          >
            Automatize sua prospecção com inteligência artificial.
          </Typography>
        </Box>
        <Grid container spacing={4} role="list">
          {features.map((feature) => (
            <Grid item xs={12} sm={6} md={4} key={feature.title} role="listitem">
              <MotionBox
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: theme.animations.durationBase, ease: theme.animations.easing }}
                sx={{
                  p: { xs: 3, md: 4 },
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
                <Box
                  aria-hidden="true"
                  sx={{
                    mb: 3,
                    filter: `drop-shadow(0 0 6px ${alpha(
                      theme.palette.primary.light,
                      0.6
                    )})`,
                  }}
                >
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
                    color: theme.palette.common.white,
                    boxShadow: theme.customShadows.neon,
                    borderRadius: theme.shape.borderRadius * 2,
                    px: { xs: 2.5, sm: 3 },
                    py: { xs: 1.25, sm: 1.5 },
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
