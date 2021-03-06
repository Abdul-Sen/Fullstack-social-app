import React, { Fragment, useEffect, useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import SendIcon from '@material-ui/icons/Send';
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
    const commentsData = useSelector(currentState => currentState.commentsReducer);

    useEffect(()=>{
        if(message.userMessage!="")
        {
            addCommentDB();
            props.close();
        }
    },[commentsData]);
    
    const [message,setMessage] = useState({userMessage:(props.message?props.message:"")});
    const dispatch = useDispatch();
    const useCss = cssStyles();

    const handleMessageEvent = (event)=>{
        const {name, value} = event.target;
        setMessage((currentState)=>({
            ...currentState,
            [name]: value
        }));
    }

    async function addCommentDB(){
        let payload = commentsData.data.find((value)=> value._id == props.root);

       let result = await fetch( (process.env.REACT_APP_PUBLIC_URL?process.env.REACT_APP_PUBLIC_URL: "") + "api/addReply ",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${sessionStorage.getItem('token')}`
            },
            body: JSON.stringify(payload)
        });

        result = await result.json();
        console.log(result);
    }

    const submitReplyEvent = ()=>{
        const reduxPayload = {
            comment: message.userMessage,
            author: sessionStorage.getItem('user'),
            parent: props.id,
            edited: false
        }
        dispatch({
            type: "ADD_REPLY",
            payload: reduxPayload
        });
    }

    return (
        <Fragment>
            <div className={useCss.root}>
                            
                <TextField onChange={handleMessageEvent} id="message-input" rows="8" multiline={true} aria-describedby="message-helper-text" fullWidth variant="outlined" label="Message" name="userMessage"  value={message.userMessage}/>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={submitReplyEvent}
                    endIcon={<SendIcon />}
                >
                    Send reply
                </Button>
            </div>
        </Fragment>
    )
}

export default ReplyComponent;