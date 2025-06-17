import React from 'react';
import { Button } from '@mui/material';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { SxProps, Theme } from '@mui/material/styles';

interface BackDashboardButtonProps {
  sx?: SxProps<Theme>;
}

const BackDashboardButton: React.FC<BackDashboardButtonProps> = ({ sx }) => {
  const navigate = useNavigate();
  return (
    <Button
      startIcon={<ArrowLeft />}
      onClick={() => navigate('/dashboard')}
      variant="outlined"
      size="medium"
      sx={{ mb: 4, ...sx }}
      aria-label="Voltar para o painel"
    >
      Voltar para o Painel
    </Button>
  );
};

export default BackDashboardButton;
