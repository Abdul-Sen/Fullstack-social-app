import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography, Box } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import UserProfileDialog from '../userProfileDialog/userProfileDialog';

const useStyles = makeStyles({
  root: {
    margin: "auto",
    marginTop: "50px",
    marginBottom:"50px",
    // margin: "50px",
    maxWidth: "400px",
    height: "auto",
    borderRadius: "40px",
    overflow: "hidden",
    '&:hover':{
      boxShadow:
      "0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07),0 1px 2px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)",

    },
    "& div#user": {
      backgroundImage: "url(https://source.unsplash.com/random)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      "& img": {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "150px",
        borderRadius: "50%",
        position: "relative",
        top: "70px",
        border: "solid 7px #ffffff"
      }
    },
    "& div#content": {
      paddingTop: "70px",
      "& h6": {
        fontWeight: "300"
      }
    },
    "& #contactInfo": {
      paddingLeft: "20px",
      paddingBottom: "20px"
    }
  }
});

function UserProfileCard(props) {
  const cssStyle = useStyles();
  const formatPhone = phoneNum => {
    let numberPattern = /\d+/g;
    phoneNum = phoneNum.match( numberPattern ).join('')
    return phoneNum;
  };

  const [showDialog, setShowDialog] = useState(false);
  const showDialogEvent = () => {
    setShowDialog(currentState => !currentState);
  };
  
  return (
    <Fragment>
            {showDialog == true && (
        <UserProfileDialog
          userData={props.userData}
          dialogStatus={showDialog}
          closeDialog={showDialogEvent}
        />
      )}

      <Paper elevation={0} className={cssStyle.root} onClick={showDialogEvent}>
        <div id="user">
          <img src={props.userData.picture.large} />
        </div>
        <div id="content">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item md={12} sm={12} xs={12}>
              <Typography component={"div"}  variant="h5" gutterBottom>
                <Box textAlign="center">
                  {props.userData.name.first} {props.userData.name.last}
                </Box>
              </Typography>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <Typography component={"div"} variant="h6" gutterBottom>
                <Box textAlign="center" fontWeight={"300"}>{props.userData.devInfo.type}</Box>
              </Typography>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <Typography component={"div"} variant="overline" gutterBottom>
                <Box textAlign="center">
                  <LocationOnIcon /> &ensp; {props.userData.location.city},{" "}
                  {props.userData.location.country}
                </Box>
              </Typography>
            </Grid>
          </Grid>
          <Grid
            id="contactInfo"
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item md={12} sm={12} xs={12}>
              <Typography component={"div"} variant="body1">
                <Box fontStyle="italic" lineHeight={5}>
                  {props.userData.devInfo.intro}
                </Box>
              </Typography>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <Typography component={"div"} variant="caption">Email</Typography>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <Typography component={"div"} variant="body1" gutterBottom={true}>
                {props.userData.email}
              </Typography>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <Typography component={"div"} variant="caption">Phone</Typography>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <Typography component={"div"} variant="body1" gutterBottom={true}>
                {formatPhone(props.userData.phone)}
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </Fragment>
  );
}

export default UserProfileCard;