import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';

const theme = createTheme({
  "palette": {
    primary:{
      main: "#212529",
    },
    "primary1Color": "#495057",
    "primary2Color": "#6c757d",
    "accent1Color": "#adb5bd",
    "accent2Color": "#dee2e6",
    "accent3Color": "#212529"
  }
});

ReactDOM.render(
  //<React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
  //</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
