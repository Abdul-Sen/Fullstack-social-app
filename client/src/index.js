import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App/App';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { lightBlue, purple } from '@material-ui/core/colors';
import { Provider } from "react-redux";
import globalStore from './App/store/globalStore';

// ? THEME STUFF
const rootTheme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: purple
  },
});
// ? THEME STUFF ENDS

const store = globalStore();

render((
    <BrowserRouter>

    <ThemeProvider theme={rootTheme}>
      <Provider store={store}>
        <App/>
      </Provider>
    </ThemeProvider>

    </BrowserRouter>
), document.getElementById('root'));
