import React, { Fragment, useEffect, useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch} from 'react-redux';

const cssStyles = makeStyles((theme) => ({
    root:{
        marginTop:"20px",
        textAlign:"right",
        '& button' :{
            marginTop:"20px"
        }
    }
}))

function ReplyComponent(props) { //Accept thread ID or whole comment object?
    const [message,setMessage] = useState({userMessage:""});
    const dispatch = useDispatch();
    console.log(`this is the comment you are replying to...: `);
    console.log(props);
    console.log(message);

    const useCss = cssStyles();

    const handleMessageEvent = (event)=>{
        const {name, value} = event.target;
        setMessage((currentState)=>({
            ...currentState,
            [name]: value
        }));
    }
    const submitReplyEvent = ()=>{
        const userPayload = {
            comment: message.userMessage,
            author: "replying User",
            parent: props.id
        }
        // update state locally
        // push new state to server
        dispatch({
            type: "ADD_COMMENT",
            payload: userPayload
        });
    }
    return (
        <Fragment>
            <div className={useCss.root}>
                            
                <TextField onChange={handleMessageEvent} id="message-input" rows="8" multiline={true} aria-describedby="message-helper-text" fullWidth variant="outlined" label="Message" name="userMessage" />
                <Button onClick={submitReplyEvent}>Send reply</Button>
            </div>
        </Fragment>
    )
}

export default ReplyComponent;