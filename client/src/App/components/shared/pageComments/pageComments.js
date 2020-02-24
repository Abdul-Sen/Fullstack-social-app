import React, {Fragment, useState, useEffect} from 'react';
import PropTypes from "prop-types";
import {useDispatch, useSelector} from 'react-redux';
import Comment from '../comment/comment';


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
            <p>Page comments</p>
            <button onClick={fetchThreadComments} >Fetch comments</button>
            <pre>{JSON.stringify(commentsData, null, 2) }</pre>
<ol>
            {
                commentsData.data.map((value,index)=>{
                    return <Comment data={value}/>
                })
            }
</ol>
            <Comment data={commentsData.data} />

        </Fragment>
    )
}

export default PageComments;