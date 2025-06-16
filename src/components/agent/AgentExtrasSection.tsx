import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { motion, useReducedMotion } from 'framer-motion';
import { Clock, FileSearch, Users, ShieldCheck, ChevronDown } from 'lucide-react';
import AgentComparativoSection from './AgentComparativoSection';

const benefits = [
  { icon: Clock, label: 'Economia de tempo' },
  { icon: FileSearch, label: 'Precisão na análise' },
  { icon: Users, label: 'Leads qualificados' },
  { icon: ShieldCheck, label: 'Redução de erros' },
];

const faqs = [
  {
    q: 'Como funciona a análise?',
    a: 'Nossa IA lê cada cláusula do edital e cruza com bases de dados atualizadas para entregar empresas compatíveis.',
  },
  {
    q: 'O que a IA avalia?',
    a: 'Critérios técnicos, CNAEs, porte da empresa, localização e histórico de participação em licitações.',
  },
  {
    q: 'Quais tecnologias são usadas?',
    a: 'Utilizamos processamento de linguagem natural aliado a modelos proprietários de classificação e ranqueamento.',
  },
];

const MotionBox = motion(Box);

/**
 * Collection of extra informational blocks such as benefits icons, FAQ and demo request.
 */
const AgentExtrasSection: React.FC = () => {
  const theme = useTheme();
  const reduceMotion = useReducedMotion();
  return (
    <MotionBox
      sx={{ mt: 8 }}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: theme.animations.durationBase, ease: theme.animations.easing }}
    >
      {/* Benefits icons */}
      <Grid container spacing={4} sx={{ mb: 8 }} justifyContent="center">
        {benefits.map((item) => {
          const Icon = item.icon;
          return (
            <Grid item xs={6} md={3} key={item.label} sx={{ textAlign: 'center' }}>
              <Box
                aria-hidden="true"
                sx={{
                  mb: 2,
                  filter: `drop-shadow(0 0 6px ${alpha(theme.palette.primary.light, 0.6)})`,
                }}
              >
                <Icon size={48} color={theme.palette.primary.light} />
              </Box>
              <Typography variant="h6" fontWeight={600}>
                {item.label}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
      <Typography
        variant="subtitle1"
        sx={{ textAlign: 'center', color: theme.palette.primary.light, fontWeight: 600, mb: 6 }}
      >
        Resultados na tela em minutos
      </Typography>

      {/* Infographic / comparison */}
      <Grid container spacing={4} alignItems="center" sx={{ mb: 8 }}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://images.pexels.com/photos/3182753/pexels-photo-3182753.jpeg"
            alt="Comparativo manual versus IA"
            sx={{ width: '100%', borderRadius: 2, boxShadow: 3 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom fontWeight={600}>
            Antes e depois
          </Typography>
          <Typography>
            Veja como o processo manual consome tempo em comparação com a automação via IA. Em
            minutos você recebe a lista pronta e validada.
          </Typography>
        </Grid>
      </Grid>

      <AgentComparativoSection />

      {/* IA illustration */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Box
          component="img"
          src="https://images.pexels.com/photos/7443843/pexels-photo-7443843.jpeg"
          alt="Ilustração da IA analisando edital"
          sx={{ maxWidth: '400px', width: '100%', borderRadius: 2, boxShadow: 3, mx: 'auto' }}
        />
      </Box>

      {/* Social proof */}
      <Paper
        sx={{
          p: { xs: 3, md: 5 },
          mb: 8,
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.customShadows.card,
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom fontWeight={600}>
          Depoimento de cliente
        </Typography>
        <Typography paragraph>
          "Depois do Agente-Edital, minha equipe ganhou agilidade e confiança nas prospecções." —
          João, empresa XPTO
        </Typography>
        <Typography color="text.secondary">+1200 editais analisados com precisão</Typography>
      </Paper>

      {/* FAQ */}
      <Box sx={{ mb: 8 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 600, textAlign: 'center', mb: 4 }}
        >
          Perguntas Frequentes
        </Typography>
        {faqs.map((item, i) => (
          <Accordion key={i} sx={{ mb: 2, backgroundColor: theme.palette.background.paper }}>
            <AccordionSummary expandIcon={<ChevronDown />}>
              <Typography fontWeight={600}>{item.q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Box
        sx={{
          height: 2,
          background: theme.palette.gradients.purplePink,
          mb: { xs: 6, md: 8 },
        }}
      />
    </MotionBox>
  );
};

export default AgentExtrasSection;
