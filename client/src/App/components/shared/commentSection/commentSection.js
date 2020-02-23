import React, { Fragment,lazy,Suspense } from 'react';
import { Grid, TextField, Typography, Box, Fab } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardRounded';
import AddComment from '../addComment/addComment';
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
                <Grid item md={6} sm={8} xs={12}>
                    <AddComment />
                </Grid>
                <Grid item md={8} sm={12} xs={12}>
                    <Suspense fallback={<div>loading comments...</div>}>
                    <Comments id={props.id} /> 
                    </Suspense>
                </Grid>
                
            </Grid>
        </Fragment>
    )
}

export default CommentSection;