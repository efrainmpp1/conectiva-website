import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion, useReducedMotion } from 'framer-motion';
import { FileText, Brain, List, ArrowRight } from 'lucide-react';

const MotionBox = motion(Box);

const AiProcessIllustration: React.FC = () => {
  const theme = useTheme();
  const reduceMotion = useReducedMotion();

  const steps = [
    { icon: FileText, label: 'Envie o edital' },
    { icon: Brain, label: 'IA analisa' },
    { icon: List, label: 'Empresas ideais' },
  ];

  return (
    <Box
      aria-label="Ilustração do funcionamento da IA"
      sx={{ py: { xs: 6, md: 8 }, backgroundColor: theme.palette.background.default }}
    >
      <Container maxWidth="md">
        <MotionBox
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: theme.animations.durationBase, ease: theme.animations.easing }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={step.label}>
                <Box sx={{ textAlign: 'center' }}>
                  <Icon size={56} color={theme.palette.primary.light} />
                  <Typography variant="subtitle2" sx={{ mt: 1 }}>
                    {step.label}
                  </Typography>
                </Box>
                {index < steps.length - 1 && (
                  <ArrowRight size={40} color={theme.palette.primary.light} />
                )}
              </React.Fragment>
            );
          })}
        </MotionBox>
      </Container>
    </Box>
  );
};

export default AiProcessIllustration;
