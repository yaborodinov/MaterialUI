import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[100],
      light: '#757ce8',
    },
    secondary: {
      main: '#cfd11a',
    },
  },
});

export default theme;
