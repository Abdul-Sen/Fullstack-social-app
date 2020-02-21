import React, { Fragment, useEffect, useState } from 'react';
import { Grid, Button, ListItem, ListItemText, Typography, Paper, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const cssStyles = makeStyles((theme) => ({
    paper: {
        padding: "20px"
    }
}))

function Comments(props) {
    const useCss = cssStyles();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchThreadComments();
    }, []);

    async function fetchThreadComments() {
        let data = await fetch((process.env.REACT_APP_PUBLIC_URL ? process.env.REACT_APP_PUBLIC_URL : "") + `api/threadComments/${props.id}`);
        data = await data.json();
        console.log(data);
        handleComments(data);
    }

    const handleComments = (newState) => {
        setComments(newState);
    }
    return (
        <Fragment>
            <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={3}>
                {
                    comments.map((currentValue, currentIndex) => {
                        return <Grid key={currentIndex} item md={12} sm={12} xs={12}>
                            <Paper className={useCss.paper}>
                            {currentValue.comment}
                            </Paper>
                        </Grid>
                    })
                }
            </Grid>
        </Fragment>
    )
}

export default Comments;