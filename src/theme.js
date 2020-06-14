import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      //light: '#757ce8',
      main: '#47536b'
      //dark: '#47536b',
      //contrastText: '#fff',
    },
    secondary: {
      //light: '#ff7961',
      main: '#e1251b'
      //dark: '#ba000d',
      //contrastText: '#000',
    },
    grayColor: {
      main: '#222D35'
    },
    fontColorPrimary: {
      main: '#99CBFF'
    },
    colorActive: {
      main: '#47536b'
    }
  },
  shadowBox: {
    generic: '0 3px 5px 2px rgba(0, 0, 0, .4)'
  },
  typography: {
    //fontFamily: ['Roboto'].join(','),
    subtitle1: {
      fontSize: 12
    },
    body1: {
      fontWeight: 500
    },
    button: {
      fontStyle: 'italic'
    }
  }
});

export default theme;
