import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { Database, Users, Brain, Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

interface Item {
  icon: React.ElementType;
  label: string;
}

const FeatureIcons: React.FC = () => {
  const theme = useTheme();
  const reduceMotion = useReducedMotion();
  const MotionBox = motion.create(Box);
  const items: Item[] = [
    { icon: Database, label: 'Extração de Dados' },
    { icon: Users, label: 'Geração de Leads' },
    { icon: Brain, label: 'Prospecção Inteligente' },
    { icon: Mail, label: 'Automação de Contato' },
  ];

  return (
    <Box
      aria-label="Feature icons"
      sx={{
        py: { xs: 5, md: 4 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <MotionBox
          component="ul"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: { xs: 'nowrap', sm: 'inherit' },
            overflowX: { xs: 'auto', sm: 'visible' },
            px: { xs: 2, md: 0 },
            listStyle: 'none',
            m: 0,
            p: 0,
          }}
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: theme.animations.durationBase, ease: theme.animations.easing }}
        >
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <React.Fragment key={item.label}>
                <Box
                  component="li"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flex: '0 0 auto',
                    mx: { xs: 3, md: 4 },
                    my: { xs: 0, sm: 2 },
                    textAlign: 'center',
                  }}
                >
                  <Box
                    aria-hidden="true"
                    sx={{
                      mb: 1,
                      filter: `drop-shadow(0 0 4px ${alpha(theme.palette.primary.light, 0.6)})`,
                    }}
                  >
                    <Icon
                      size={40}
                      color={theme.palette.primary.light}
                      style={{ width: '2.5rem', height: '2.5rem' }}
                    />
                  </Box>
                  <Typography variant="subtitle1" sx={{ color: theme.palette.common.white }}>
                    {item.label}
                  </Typography>
                </Box>
                {idx < items.length - 1 && (
                  <Box
                    aria-hidden="true"
                    sx={{
                      width: '0.125rem',
                      height: '2.5rem',
                      background: alpha(theme.palette.primary.light, 0.4),
                      boxShadow: `0 0 6px ${alpha(theme.palette.primary.light, 0.4)}`,
                      mx: { xs: 1, md: 2 },
                    }}
                  />
                )}
              </React.Fragment>
            );
          })}
        </MotionBox>
      </Container>
    </Box>
  );
};

export default FeatureIcons;
