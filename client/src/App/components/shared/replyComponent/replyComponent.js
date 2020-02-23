import React, { Fragment, useEffect, useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

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
    console.log(`this is the comment you are replying to...: `);
    console.log(props);
    const useCss = cssStyles();
    return (
        <Fragment>
            <div className={useCss.root}>
                            
                <TextField id="message-input" rows="8" multiline={true} aria-describedby="message-helper-text" fullWidth variant="outlined" label="Message" name="message" />
                <Button >Send reply</Button>
            </div>
        </Fragment>
    )
}

export default ReplyComponent;