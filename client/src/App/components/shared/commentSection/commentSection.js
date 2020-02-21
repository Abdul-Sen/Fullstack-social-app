import React, { Fragment,lazy,Suspense } from 'react';
import { Grid, TextField, Typography, Box, Fab } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardRounded';
const Comments = lazy(()=> import ('../comments/comments'));


function CommentSection(props) {
    return (
        <Fragment>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="stretch"
            >
                <Grid item md={1} sm={1} xs={1}>
                    <AccountCircleIcon fontSize="large" />
                </Grid>
                <Grid item md={11} sm={11} xs={11}>
                <TextField id="message-input" rows="8" multiline={true} aria-describedby="message-helper-text" fullWidth variant="outlined" label="Message" name="message" />
                </Grid>
                <Grid item md={12} sm={12} xs={12} >
                    <Typography variant="subtitle2" >
                        <Box textAlign="right" margin="15px">
                        <Fab variant="extended" size="large" color="primary" type="submit" value="submit" >
                        send message
                        <ArrowForwardIosIcon fontSize="small" />
                        </Fab>
                        </Box>
                    </Typography>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                    <Suspense fallback={<div>loading comments...</div>}>
                    <Comments id={props.id} /> 

                    </Suspense>
                </Grid>
                
            </Grid>
        </Fragment>
    )
}

export default CommentSection;