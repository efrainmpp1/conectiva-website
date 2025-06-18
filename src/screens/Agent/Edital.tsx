import React from 'react';
import { Box, Grid } from '@mui/material';
import DropzoneUploadPdf from '../../libs/components/DropzoneUploadPdf';
import BackDashboardButton from '../../libs/components/BackDashboardButton';

const EditalPage: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: { xs: 3, md: 6 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <DropzoneUploadPdf />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Box
            component="img"
            src="/assets/illustration_edital.svg"
            alt="Análise de Edital"
            sx={{
              maxWidth: 400,
              width: '100%',
              opacity: 0.4,
              display: { xs: 'none', md: 'block' },
            }}
          />
        </Grid>
      </Grid>
      <BackDashboardButton sx={{ mb: 0 }} />
    </Box>
  );
};

export default EditalPage;
