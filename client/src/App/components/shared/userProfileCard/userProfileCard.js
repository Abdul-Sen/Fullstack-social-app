import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography, Box } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles({
  root: {
    margin: "50px",
    boxShadow:
      "0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07),0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)",
    width: "400px",
    height: "auto",
    borderRadius: "10%",
    overflow: "hidden",
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
      // backgroundColor: "#afafaf",
      paddingLeft: "20px",
      paddingBottom: "20px"
    }
  }
});
// clipPath: "polygon( 0 0,100% 0, 100% 100%, 0 calc(100% - 5vw) )",

function UserProfileCard(props) {
  const cssStyle = useStyles();
  const formatPhone = phoneNum => {
    phoneNum = phoneNum.replace(/^0+/g, "");
    return phoneNum;
  };

  console.log(props);
  return (
    <Fragment>
      <Paper elevation={0} className={cssStyle.root}>
        <div id="user">
          <img src={props.userData.picture.large} />
        </div>
        <div id="content">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item md={12} sm={12} xs={12}>
              <Typography variant="h5" gutterBottom>
                <Box textAlign="center">
                  {props.userData.name.first} {props.userData.name.last}
                </Box>
              </Typography>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <Typography variant="h6" gutterBottom>
                <Box textAlign="center">{props.userData.devInfo.type}</Box>
              </Typography>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <Typography variant="overline" gutterBottom>
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
              <Typography variant="body1">
                <Box fontStyle="italic" lineHeight={5}>
                  {props.userData.devInfo.intro}
                </Box>
              </Typography>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <Typography variant="caption">Email</Typography>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <Typography variant="body1" gutterBottom={true}>
                {props.userData.email}
              </Typography>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <Typography variant="caption">Phone</Typography>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <Typography variant="body1" gutterBottom={true}>
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