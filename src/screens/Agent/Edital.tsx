import React from 'react';
import { Box, Grid, Paper, Typography, List, ListItem } from '@mui/material';
import DropzoneUploadPdf from '../../libs/components/DropzoneUploadPdf';
import BackDashboardButton from '../../libs/components/BackDashboardButton';

const EditalPage: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 2, md: 4 },
      }}
    >
      <Grid
        container
        spacing={4}
        direction={{ xs: 'column', md: 'row' }}
        alignItems="flex-start"
        justifyContent="center"
      >
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <DropzoneUploadPdf />
          <BackDashboardButton sx={{ alignSelf: 'flex-start', mt: 2 }} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Paper elevation={2} sx={{ p: 3, maxWidth: 400 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              O que acontece após o envio?
            </Typography>
            <List>
              <ListItem disableGutters>🔹 Extração de CNAEs e localidade</ListItem>
              <ListItem disableGutters>🔹 Leitura automatizada do conteúdo</ListItem>
              <ListItem disableGutters>🔹 Sugestão de empresas compatíveis</ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditalPage;
