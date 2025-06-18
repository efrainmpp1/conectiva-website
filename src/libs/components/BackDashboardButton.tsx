import React from 'react';
import { Button, useTheme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import type { SxProps, Theme } from '@mui/material/styles';

interface BackDashboardButtonProps {
  sx?: SxProps<Theme>;
}

const BackDashboardButton: React.FC<BackDashboardButtonProps> = ({ sx }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Button
      variant="outlined"
      startIcon={<ArrowBackIcon />}
      onClick={() => navigate('/dashboard')}
      aria-label="Voltar para o painel principal"
      sx={{
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
          borderColor: theme.palette.primary.dark,
        },
        textTransform: 'none',
        px: { xs: 2, md: 3 },
        py: 1.5,
        fontSize: { xs: '0.9rem', md: '1rem' },
        borderRadius: 2,
        ...sx,
      }}
    >
      Voltar para o Painel
    </Button>
  );
};

export default BackDashboardButton;
