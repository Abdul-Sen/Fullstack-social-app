import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from '@material-ui/core';
function ClearSearch(){
    const dispatch = useDispatch();
    const handleClear =()=>{
        dispatch({
            type: "UPDATE_SEARCH",
            payload: { searchTerm:'',role:[],country:''}
        });

        dispatch({
            type: "NEW_USERS",
            payload:  {users: [], more:true}
        });
    }
    return(
        <Button onClick={handleClear}>Clear</Button>
    )
}

export default ClearSearch;