function loginReducer(currentState = { loginStatus: false }, actionRequested) {
  
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

export default loginReducer;