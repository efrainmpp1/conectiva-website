import React from 'react';
import { Container, Typography } from '@mui/material';
import BackHomeButton from '../libs/components/BackHomeButton';

const NotFound: React.FC = () => (
  <Container maxWidth="md" sx={{ py: 10, textAlign: 'center' }}>
    <Typography variant="h4" gutterBottom>
      Página não encontrada
    </Typography>
    <Typography paragraph>
      O endereço acessado não existe ou foi removido.
    </Typography>
    <BackHomeButton sx={{ mt: 2 }} />
  </Container>
);

export default NotFound;
