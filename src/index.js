import React from 'react';
import ReactDOM from 'react-dom';
import './assets/sass/main.scss';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import App from './App';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
