import {produce} from 'immer';
function commentsReducer(currentState ={data: []}, actionRequested) {

    switch (actionRequested.type) {
      case "ADD_FETCHED_COMMENTS": // update all comments state with this new state
        return {
          ...currentState,
          data: [...actionRequested.payload]
        };
      case "ADD_COMMENT":
        const newItem = {
          comment: actionRequested.payload.comment,
          author: actionRequested.payload.author,
          edited: false,
          comments: []
        };
        return produce(currentState,(draftState)=>{
          let res = findObjectById(draftState.data,actionRequested.payload.parent);
          res.comments.push(newItem);
        });
        case "DEFAULT_STATE":
        return {
          data: []
        }
      default:
        return currentState;
    }
  }

  function findObjectById(root, id) {
    for(let i =0; i < root.length; i++)
    {
      if(root[i]._id == id)
      {
        console.log(`found a match`);
        console.log(root[i]);
        return root[i];
      }
      else if(root[i].comments.length > 0)
      {
        let ans = findObjectById(root[i].comments,id);
        if(ans != null)
        {
          return ans;
        }
      }
    }
    return null;
};

  
export default commentsReducer;