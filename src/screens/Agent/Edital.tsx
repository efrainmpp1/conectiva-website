import React from 'react';
import { Box } from '@mui/material';
import DropzoneUploadPdf from '../../libs/components/DropzoneUploadPdf';

const EditalPage: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
      <DropzoneUploadPdf />
    </Box>
  );
};

export default EditalPage;
