import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './libs/theme/theme';
import Navbar from './libs/components/Navbar';
import Footer from './libs/components/Footer';
import ScrollToTop from './libs/components/ScrollToTop';

function App() {
  const location = useLocation();
  const hideLayout = location.pathname.startsWith('/dashboard');
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToTop />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {!hideLayout && <Navbar />}
        <Box sx={{ flexGrow: 1 }}>
          <Outlet />
        </Box>
        {!hideLayout && <Footer />}
      </Box>
    </ThemeProvider>
  );
}

export default App;