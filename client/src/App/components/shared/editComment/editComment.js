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

function EditComment(props) { //Accept thread ID or whole comment object?
    const commentsData = useSelector(currentState => currentState.commentsReducer);
    const [serverCallFlag, setServerCallFlag] = useState(false);

    useEffect(()=>{
        if(serverCallFlag == true)
        {
            addCommentDB();
            props.close();
        }
    },[serverCallFlag]);

    const [message,setMessage] = useState({userMessageEdit:(props.message?props.message:"")});
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
        
       let result = await fetch( (process.env.REACT_APP_PUBLIC_URL?process.env.REACT_APP_PUBLIC_URL: "") + "api/addReply ",{ //! TODO: Add reply works but change the endpoint to "updateDocument" or something
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

    const submitUpdateEvent = ()=>{

            //root={props.root} id={props.data._id}

        let reduxPayload = {
            comment: message.userMessageEdit,
            author: sessionStorage.getItem('user'),
            parent: props.id,
            edited: true
        };

        //if comment is root, then add parentID (article id), else skip
        if(props.root == props.id)
        {
            reduxPayload.parentID = props.root
        }

        dispatch({
            type: "UPDATE_COMMENT",
            payload: reduxPayload
        });

        setServerCallFlag(true);
    }

    return (
        <Fragment>
            <div className={useCss.root}>
                            
                <TextField onChange={handleMessageEvent} id="message-input-edit" rows="8" multiline={true} aria-describedby="message-helper-text" fullWidth variant="outlined" label="Message" name="userMessageEdit"  value={message.userMessageEdit}/>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={submitUpdateEvent}
                    endIcon={<SendIcon />}
                >
                    Update
                </Button>

            </div>
        </Fragment>
    )
}

export default EditComment;