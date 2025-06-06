import React from 'react';
import { Button } from '@mui/material';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { SxProps, Theme } from '@mui/material/styles';

interface BackHomeButtonProps {
  sx?: SxProps<Theme>;
}

const BackHomeButton: React.FC<BackHomeButtonProps> = ({ sx }) => {
  const navigate = useNavigate();
  return (
    <Button
      startIcon={<ArrowLeft />}
      onClick={() => navigate('/')}
      variant="outlined"
      size="medium"
      sx={{ mb: 4, ...sx }}
      aria-label="Voltar para a página principal"
    >
      Voltar para a página principal
    </Button>
  );
};

export default BackHomeButton;
