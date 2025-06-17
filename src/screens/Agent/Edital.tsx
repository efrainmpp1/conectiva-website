import React from 'react';
import { Box } from '@mui/material';
import DropzoneUploadPdf from '../../libs/components/DropzoneUploadPdf';
import BackDashboardButton from '../../libs/components/BackDashboardButton';

const EditalPage: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="60vh">
      <DropzoneUploadPdf />
      <BackDashboardButton />
    </Box>
  );
};

export default EditalPage;
