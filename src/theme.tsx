import {red} from '@material-ui/core/colors';
import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F4C468',
    },
    secondary: {
      main: '#000',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
