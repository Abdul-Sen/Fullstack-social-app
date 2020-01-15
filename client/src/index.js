import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App/App';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { amber, red } from '@material-ui/core/colors';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// ? THEME STUFF
const rootTheme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: red
  },
});
// ? THEME STUFF ENDS


// ? REDUX STUFF STARTS
const rootReducer = combineReducers({
  //TODO: Add reducers
});

const globalStore = createStore(rootReducer);


// ? REDUX STUFF ENDS

render((
    <BrowserRouter>

    <ThemeProvider theme={rootTheme}>
      <Provider store={globalStore}>
        <App/>
      </Provider>
    </ThemeProvider>

    </BrowserRouter>
), document.getElementById('root'));
