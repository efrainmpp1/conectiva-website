import React from 'react';
import { Box } from '@mui/material';
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
      <DropzoneUploadPdf />
      <BackDashboardButton sx={{ mb: 0 }} />
    </Box>
  );
};

export default EditalPage;
