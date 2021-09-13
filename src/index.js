import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';

const theme = createTheme({
  "palette": {
    "primary1Color": "#D90429",
    "primary2Color": "#616161",
    "accent1Color": "#b71c1c",
    "accent2Color": "#E7EAEE",
    "accent3Color": "#bdbdbd"
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
