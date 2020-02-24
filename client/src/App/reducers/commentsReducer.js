function commentsReducer(currentState ={data: []}, actionRequested) {

    switch (actionRequested.type) {
      case "ADD_FETCHED_COMMENTS": // update all comments state with this new state
        return {
          ...currentState,
          data: [...actionRequested.payload]
        };
      case "ADD_COMMENT":

      
        let res = findObjectById(currentState.data,actionRequested.payload.parent);
        const newItem = {
          comment: actionRequested.payload.comment,
          author: actionRequested.payload.author,
          edited: false,
          comments: []
        };
        //TODO: Use Immer to manually mutate the current state and append node. in future flatten your state

        return {
          ...currentState,
          data: [...currentState, ...res.comments.concat(newItem)]
          //TODO: This does not work for nested nodes
          // data: currentState.data.map(d => d._id === actionRequested.payload.parent ? ({ ...d, comments: d.comments.concat(newItem) }) : d) 
        }        
        case "DEFAULT_STATE":
        return {
          data: []
        }
      default:
        return currentState;
    }
  }

  function findObjectById(root, id) {
    console.log(`func call with`);
    console.log(root);

    for(let i =0; i < root.length; i++)
    {
      if(root[i]._id == id)
      {
        console.log(`found a match`);
        console.log(root[i]);
        return root[i];
      }
      if(root[i].comments.length > 0)
      {
        console.log(`going to next phase with root....`);
        console.log(root[i].comments);
        console.log(root[i].comments.length > 0)
        console.log(root[i]._id);

        console.log(`calling recrsuve function with`);
        console.log(root[i].comments)
        let ans = findObjectById(root[i].comments,id);
        console.log(`node retured from stack is...`);
        console.log(ans);
        if(ans != null)
        {
          return ans;
        }
      }
    }
    return null;
};

  
export default commentsReducer;