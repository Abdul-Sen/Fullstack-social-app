function userReducer (currentState = {users: [], more:true}, actionRequested) {
  
    switch (actionRequested.type) {
      case "UPDATE_USERS":
        return {users: [ ...currentState.users,...actionRequested.payload.users], more: actionRequested.payload.more};
        case "NEW_USERS":
          return {users: [...actionRequested.payload.users], more:actionRequested.payload.more};
      default:
        return currentState;
    }
  }

export default userReducer;