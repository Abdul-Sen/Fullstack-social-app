import React, { Fragment, useState, useEffect } from 'react';
import { Box, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircleRounded';
import {useDispatch} from 'react-redux';
const cssStyles = makeStyles((theme) => ({
    root: {
        textAlign: "right",
        '& #submitbtn': {
            marginTop: "20px",
            marginBottom: '10px'
        },
        '& #box': {
            marginTop: "20px",
            marginLeft: "5%",
            display: "flex",
            '& #icon': {
                marginRight: "22px",
                width: "40px",
                height: "40px"
            }
        }
    }
}))

function AddComment(props) {
    const [commentstate,setCommentState] = useState({comment:"",send:false});
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log(`comment is ${commentstate.comment}`);
    },[commentstate.comment]);

    useEffect(()=>{
        if(commentstate.send == true)
        {
            addCommentDB();
            setCommentState((currentLocalState)=>({
                ...currentLocalState,
                comment: "",
                send: false
            }));
            //TODO: Wait for dispatch to finish, then call fetch api
        }
    },[commentstate.send]);

    async function addCommentDB(){
        const payload = {
            comment: commentstate.comment,
            author: "replying User",
            parentID: props.parentID,
            edited: false,
            comments: []
        };
        let result = await fetch( (process.env.REACT_APP_PUBLIC_URL?process.env.REACT_APP_PUBLIC_URL: "") + "api/addComment ",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        result = await result.json();
        console.log(result);
    }
    
    const addCommentHandler = ()=>{
        const reduxPayload = {
            comment: commentstate.comment,
            author: "replying User",
            parentID: props.parentID,
            edited: false,
            comments: []
        };
        dispatch({
            type: "ADD_COMMENT",
            payload: reduxPayload
        });

        setCommentState((currentState)=>({
            ...currentState,
            send: true
        }));
    }

    const commentChangeHandler= (event)=>{
        const {value} = event.target;
        setCommentState((currentState)=>({
            ...currentState,
            comment: value
        }));
    }

    const useCssStyle = cssStyles();
    return (
        <Fragment>
            <div className={useCssStyle.root} >
                <Box id='box'>
                    <AccountCircleIcon id="icon" />
                    <TextField id="message-input-comment"  value={commentstate.comment} rows="6" multiline={true} aria-describedby="message-helper-text" fullWidth variant="outlined" label="Message" name="comment" onChange={commentChangeHandler} />
                </Box>
                <Button  onClick={addCommentHandler}>Send message</Button>
            </div>
        </Fragment>
    )
}

export default AddComment;