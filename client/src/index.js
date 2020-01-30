import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App/App';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { lightBlue, purple } from '@material-ui/core/colors';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// ? THEME STUFF
const rootTheme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: purple
  },
});
// ? THEME STUFF ENDS


// ? REDUX STUFF STARTS
function loginReducer(currentState = { loginStatus: false }, actionRequested) {
  console.log("inside reducer...");
  console.log(currentState);

  switch (actionRequested.type) {
    case "UPDATE_STATE":
      return {
        ...currentState,
        loginStatus: actionRequested.payload
      };
    default:
      return currentState;
  }
}

const rootReducer = combineReducers({
  loginReducer
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
