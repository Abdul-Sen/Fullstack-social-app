function commentsReducer(currentState ={data: []}, actionRequested) {

    switch (actionRequested.type) {
      case "ADD_FETCHED_COMMENTS": // update all comments state with this new state
        return {
          ...currentState,
          data: [...actionRequested.payload]
        };
      case "ADD_COMMENT":
        console.log(actionRequested.payload);
        //todo: Find and append to a nested object using id
        
        return currentState;
      case "DEFAULT_STATE":
        return {
          data: []
        }
      default:
        return currentState;
    }
  }
  
export default commentsReducer;