import React, { Fragment, useEffect, useState } from 'react';
import { Grid, Button, ListItem, ListItemText,TextField, Typography, Paper, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Moment from 'react-moment';
import ReplyComponent from '../replyComponent/replyComponent';

const cssStyles = makeStyles((theme) => ({
    root:{
        marginTop:"20px",
        marginLeft: "30px"
    },
    paper: {
        padding: "20px",
        '& #box-div > *': {
            margin:"3px"
        },
        '& #time': {
            marginLeft: "auto"
        }
    },
    replyButton : {
        marginTop:"15px",
        marginLeft: theme.spacing(5)
    }
}))

function Comments(props) { //Accept thread ID or whole comment object?


    const useCss = cssStyles();
    const [openReply, setOpenReply]= useState(false);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        if(props.id)
        {
            fetchThreadComments();
        }
        else if(props.commentData)
        {
            console.log(`comment data....`);
            console.log(props.commentData);
            handleComments(props.commentData);
        }
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

    const handleReplyEvent = (event)=>{
        setOpenReply(!openReply);
        /**
         * 1- If box is not visible, make it visible
         * 2 - if user clicks reply again, dont do anything more than checking if box is open
         * 3 - 
         */

    }
    return (
        <Fragment>
            <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={3} className={useCss.root}>
                {
                    comments.map((currentValue, currentIndex) => {
                        return <Grid key={currentIndex} item md={12} sm={12} xs={12}>
                            <Paper className={useCss.paper}>
                                <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={3}>
                                    <Grid item md={12}>
                                        <Box display="flex" id="box-div" alignItems="center" >
                                        <AccountBoxIcon fontSize="large"  />
                                        <Typography component={'span'} variant="body2">
                                            <Box>{currentValue.author}</Box>
                                        </Typography>
                                        <Typography component={'span'} id="time" variant="body2">
                                        <Box >
                                            <Moment format="ll">
                                            {currentValue.createdAt}
                                            </Moment>
                                        </Box>
                                        </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Typography component={'span'} variant="body2">
                                    <Box marginLeft="40px" textAlign="justify">
                                        {currentValue.comment}
                                    </Box>
                                </Typography>
                                <Button size="small" className={useCss.replyButton} onClick={handleReplyEvent}>
                                    reply
                                </Button>
                                {openReply && <ReplyComponent commentData={currentValue._id} />}
                            </Paper>
                            {currentValue.comments.length !=0? <Comments commentData={currentValue.comments} />: null }
                        </Grid>
                    })
                }
            </Grid>
        </Fragment>
    )
}

export default Comments;