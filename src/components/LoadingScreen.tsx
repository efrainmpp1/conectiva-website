import React from 'react';
import { Box, CircularProgress } from '@mui/material';

/**
 * Fullscreen loading indicator used while auth state is being restored.
 */
const LoadingScreen: React.FC = () => (
  <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
    <CircularProgress />
  </Box>
);

export default LoadingScreen;
