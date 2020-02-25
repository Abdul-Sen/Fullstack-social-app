import React, { Fragment, useEffect, useState } from 'react';
import { Grid, Button, Typography, Paper, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReplyComponent from '../replyComponent/replyComponent';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Moment from 'react-moment';

const cssStyles = makeStyles((theme) => ({
    root: {
        marginTop: "20px",
        marginLeft: "30px",
        marginBottom: "0px"
    },
    paper: {
        padding: "20px",
        '& #box-div > *': {
            margin: "3px"
        },
        '& #time': {
            marginLeft: "auto"
        }
    },
    replyButton: {
        marginTop: "15px",
        marginLeft: theme.spacing(5)
    }
}))

export default function Comment(props) {
    const useCss = cssStyles();
    const [openReply, setOpenReply] = useState(false);
    const handleReplyEvent = (event) => {
        setOpenReply(!openReply);
    }

    return (
        <Fragment>
            <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={3} className={useCss.root}>
                <Grid item md={7} sm={12} xs={12}>
                    <Paper className={useCss.paper}>
                        <Grid container direction="column" justify="flex-start" alignItems="stretch" spacing={3}>
                            <Grid item md={12}>
                                <Box display="flex" id="box-div" alignItems="center" >
                                    <AccountBoxIcon fontSize="large" />
                                    <Typography component={'span'} variant="body2">
                                        <Box>{props.data.author}</Box>
                                    </Typography>
                                    <Typography component={'span'} id="time" variant="body2">
                                        <Box >
                                            <Moment format="ll">
                                                {props.data.createdAt}
                                            </Moment>
                                        </Box>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Typography component={'span'} variant="body2">
                            <Box marginLeft="40px" textAlign="justify">
                                {props.data.comment}
                            </Box>
                        </Typography>
                        <Button onClick={handleReplyEvent} size="small" className={useCss.replyButton}>
                            reply
                                </Button>
                    </Paper>
                    {openReply && <ReplyComponent root={props.root} id={props.data._id} close={handleReplyEvent} />}
                </Grid>
                {
                    props.data.comments != null ? props.data.comments.map((value, index) => {
                        return (<Comment key={index} data={value} root={props.root} />);
                    }) : null
                }
            </Grid>
        </Fragment>
    )
}