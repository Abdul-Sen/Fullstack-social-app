import React, {Fragment, useState, useEffect} from 'react';
import PropTypes from "prop-types";
import {useDispatch, useSelector} from 'react-redux';
import Comment from '../comment/comment';
import {Grid} from '@material-ui/core';
import AddComment from '../addComment/addComment';


PageComments.propTypes = {
    id: PropTypes.string.isRequired
  };


function PageComments(props){
    const dispatch = useDispatch();
    const [isLoaded,setIsLoaded] = useState(false);
    const commentsData = useSelector(currentState => currentState.commentsReducer);
    
    useEffect(()=>{
        fetchThreadComments();

        return ()=>{

            dispatch({
                type: "DEFAULT_STATE",
                payload: []
            });

        }
    },[])

    // const [data,setData]= useState({});

    async function fetchThreadComments() {
        let data = await fetch((process.env.REACT_APP_PUBLIC_URL ? process.env.REACT_APP_PUBLIC_URL : "") + `api/threadComments/${props.id}`);
        data = await data.json();
        dispatch({
            type: "ADD_FETCHED_COMMENTS",
            payload: data
        });
        setIsLoaded(true);
    }
    
    return(
        <Fragment>
            <Grid
  container
  direction="column"
  justify="flex-start"
  alignItems="stretch"
>
    <Grid item md={8} sm={12} xs={12}>
        {
            isLoaded &&
            <AddComment parentID={props.id} />
        }
    </Grid>
    <Grid item md={12} sm={12} xs={12}>
            {
                commentsData.data.map((value,index)=>{
                    return <Comment key={index} data={value} root={value._id}/>
                })
            }
    </Grid>
            </Grid>
        </Fragment>
    )
}

export default PageComments;