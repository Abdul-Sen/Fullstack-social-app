function searchReducer(currentState = { searchTerm:'',role:[],country:''}, actionRequested) {
  
    switch (actionRequested.type) { //? Maybe "update role", "update country", "update search term" instead of one action
      case "UPDATE_SEARCH":     
        return {
          ...currentState,// searchTerm:'',role:[], country: '',
          ...actionRequested.payload  // country: 'Denmark', <-- this should override it
        };
      default:
        return currentState;
    }
  }

export default searchReducer;