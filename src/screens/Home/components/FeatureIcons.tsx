import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';
import { Database, Users, Brain, Mail } from 'lucide-react';

interface Item {
  icon: React.ElementType;
  label: string;
}

const FeatureIcons: React.FC = () => {
  const theme = useTheme();
  const items: Item[] = [
    { icon: Database, label: 'Extração de Dados' },
    { icon: Users, label: 'Geração de Leads' },
    { icon: Brain, label: 'Prospecção Inteligente' },
    { icon: Mail, label: 'Automação de Contato' },
  ];

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: { xs: 'nowrap', sm: 'wrap' },
            overflowX: { xs: 'auto', sm: 'visible' },
            px: { xs: 2, md: 0 },
          }}
        >
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <React.Fragment key={item.label}>
                <Box
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
                  <Box aria-hidden="true" sx={{ mb: 1, filter: `drop-shadow(0 0 4px ${alpha(theme.palette.primary.main, 0.6)})` }}>
                    <Icon size={40} color={theme.palette.primary.light} />
                  </Box>
                  <Typography variant="subtitle1" sx={{ color: '#fff' }}>
                    {item.label}
                  </Typography>
                </Box>
                {idx < items.length - 1 && (
                  <Box
                    aria-hidden="true"
                    sx={{
                      width: '1px',
                      height: 40,
                      background: alpha(theme.palette.primary.main, 0.4),
                      boxShadow: `0 0 6px ${alpha(theme.palette.primary.main, 0.4)}`,
                      mx: { xs: 1, md: 2 },
                    }}
                  />
                )}
              </React.Fragment>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default FeatureIcons;
