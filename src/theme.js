import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#E9EEF5',
      main: '#44558B',
      dark: '#2E3A6A',
      contrastText: '#fff',
    },
    grey: {
      light: '#E0E4EB',
      main: '#898D93',
      dark: '#313439',
      contrastText: '#000',
    }
  },
  typography: {
    fontFamily:
      '"Inter", sans-serif',
    body1: {
      fontSize: "1.063rem",
      fontWeight: 600,
      lineHeight: 1.17
    }
  }
});

export const headingFont = createTheme({
  palette: {
    secondary: {
      light: '#66320E',
      main: '#A66F3E',
      dark: '#DCA77E',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily:
      '"Noto Serif", serif',
    h1: {
      fontSize: "3.625rem",
      fontWeight: 700,
      lineHeight: 1.07
    },
    h5: {
      fontSize: "1.64rem",
      fontWeight: 600,
      lineHeight: 1
    }
  }
});
