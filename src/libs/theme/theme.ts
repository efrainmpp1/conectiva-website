import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    gradients: {
      bluePurple: string;
      purplePink: string;
    };
  }
  interface PaletteOptions {
    gradients?: {
      bluePurple?: string;
      purplePink?: string;
    };
  }

  interface Theme {
    customShadows: {
      neon: string;
      card: string;
      button: string;
    };
    animations: {
      durationShort: number;
      durationBase: number;
      durationLong: number;
      easing: string;
    };
    radii: {
      planCard: number;
    };
  }
  interface ThemeOptions {
    customShadows?: {
      neon?: string;
      card?: string;
      button?: string;
    };
    animations?: {
      durationShort?: number;
      durationBase?: number;
      durationLong?: number;
      easing?: string;
    };
    radii?: {
      planCard?: number;
    };
  }
}

// Create a custom theme with a dark/neon palette
const theme = createTheme({
  breakpoints: {
    values: { xs: 0, sm: 360, md: 768, lg: 1024, xl: 1440 },
  },
  palette: {
    mode: 'dark',
    primary: {
      light: '#f357a8',
      main: '#7b2ff2',
      dark: '#1e1b4b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#7b2ff2',
      main: '#f357a8',
      dark: '#b31370',
      contrastText: '#fff',
    },
    success: {
      main: '#4CAF50',
    },
    warning: {
      main: '#FF9800',
    },
    error: {
      main: '#F44336',
    },
    background: {
      default: '#141627',
      paper: '#1e1b4b',
    },
    grey: {
      100: '#f8f9fa',
    },
    gradients: {
      bluePurple: 'linear-gradient(45deg, #1e1b4b 0%, #7b2ff2 100%)',
      purplePink: 'linear-gradient(45deg, #7b2ff2 0%, #f357a8 100%)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Space Grotesk", "Montserrat", sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: '2.75rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.2,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.2,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.2,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.2,
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: '1.1rem',
      lineHeight: 1.5,
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
  radii: {
    planCard: 18,
  },
  customShadows: {
    neon: '0 0 10px rgba(123,47,242,0.7), 0 0 20px rgba(123,47,242,0.5)',
    card: '0 0 15px rgba(123,47,242,0.3)',
    button: '0 0 6px rgba(243,87,168,0.4)',
  },
  animations: {
    durationShort: 0.2,
    durationBase: 0.4,
    durationLong: 0.8,
    easing: 'easeInOut',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: '10px 24px',
          boxShadow: theme.customShadows.button,
        }),
        containedPrimary: ({ theme }) => ({
          '&:hover': {
            boxShadow: theme.customShadows.neon,
          },
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: theme.customShadows.card,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: theme.customShadows.neon,
          },
        }),
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: theme.customShadows.card,
        }),
      },
    },
  },
});

export default theme;
