import React, {Fragment} from 'react';
import {Box,TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircleRounded';
const cssStyles = makeStyles((theme)=>({
    root:{
        textAlign:"right",
        '& #submitbtn':{
            marginTop:"20px",
            marginBottom:'10px'
        },
        '& #box':{
        marginTop: "20px",
        marginLeft:"5%",
        display:"flex",
        '& #icon':{
            marginRight:"22px",
            width:"40px",
            height:"40px"
        }
    }
    }
}))

function AddComment(props){
    const useCssStyle = cssStyles();
    return (
        <Fragment>
            <div className={useCssStyle.root} >
            <Box id='box'>
            <AccountCircleIcon id="icon"/>
            <TextField id="message-input" rows="8" multiline={true} aria-describedby="message-helper-text" fullWidth variant="outlined" label="Message" name="message" />

            </Box>
            <Button id='submitbtn'>Send message</Button>
            </div>
        </Fragment>
    )
}

export default AddComment;

// <Grid item md={1} sm={1} xs={1}>
// <AccountCircleIcon fontSize="large" />
// </Grid>
// <Grid item md={11} sm={11} xs={11}>
// <TextField id="message-input" rows="8" multiline={true} aria-describedby="message-helper-text" fullWidth variant="outlined" label="Message" name="message" />
// </Grid>
// <Grid item md={12} sm={12} xs={12} >
// <Typography variant="subtitle2" >
//     <Box textAlign="right" margin="15px">
//     <Fab variant="extended" size="large" color="primary" type="submit" value="submit" >
//     send message
//     <ArrowForwardIosIcon fontSize="small" />
//     </Fab>
//     </Box>
// </Typography>
// </Grid>