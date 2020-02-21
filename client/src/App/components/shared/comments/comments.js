import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';




function Comments(props) {

    console.log(props.id);

    // const comments = ()=>{
    //     fetch(`api/getThreadComments`)
    // }


    return (
        <Fragment>
            <p>comments...</p>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="stretch"
            >
                
            </Grid>
        </Fragment>
    )
}

export default Comments;