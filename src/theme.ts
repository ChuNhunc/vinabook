import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { act } from 'react';
import { colors } from '@mui/material';


declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    mobile: true;
    tablet: true;
    md: true;
    lg: true;
    xl: true;
  }
}

declare module '@mui/material/styles' {
  interface PaletteColor {
    text?: string;
    background?: string;
  }
  interface SimplePaletteColorOptions {
    text?: string;
    background?: string;
  }
}

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF8D07',
      text: '#4b4848',
      background: '#fff',
    },
    secondary: {
      main: '#23272B',
      background: '#F9F5EE'
    },
    error: {
      main: red.A400,
    },
  },
  breakpoints: {
    values: {
      mobile: 320,
      tablet: 480,
      md: 768,
      lg: 1024,
      xl: 1280,
    }
  }
});

if(theme.components){
  theme.components.MuiTypography= {
    styleOverrides: {
      root: {
        fontSize: '1rem',
        [theme.breakpoints.down('xl')]: {
          fontSize: '0.8rem',
        },
        }
      }
    }
}
export default theme;