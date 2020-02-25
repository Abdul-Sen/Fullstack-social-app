import React, { Fragment } from 'react';
import { Box, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircleRounded';
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
    const useCssStyle = cssStyles();
    return (
        <Fragment>
            <div className={useCssStyle.root} >
                <Box id='box'>
                    <AccountCircleIcon id="icon" />
                    <TextField id="message-input-addComment" rows="6" multiline={true} aria-describedby="message-helper-text" fullWidth variant="outlined" label="Message" name="addComment" />
                </Box>
                <Button id='submitbtn'>Send message</Button>
            </div>
        </Fragment>
    )
}

export default AddComment;