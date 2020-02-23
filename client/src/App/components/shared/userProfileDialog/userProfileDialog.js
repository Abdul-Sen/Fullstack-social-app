import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import CommentSection from '../commentSection/commentSection';

import {
  Grid,
  Typography,
  Box,
  Slide,
  Dialog,
  IconButton,
  Paper,
  Avatar
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { popup } from "leaflet";

const styles = makeStyles(theme => ({
  leaflet: {
    width: "100%",
    height: "100%",
    border: "1px solid black"
  },
  root: {
    width: "90%",
    "& #paper": {
      padding: "20px"
    }
  },

  avatar: {
    width: 100,
    height: 100
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function UserProfileDialog(props) {
  console.log(props.userData); // TEMP
  const { latitude, longitude } = { ...props.userData.location.coordinates };

  const cssStyles = styles();

  const [openDialog, setOpenDialog] = useState(true);
  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Fragment>
      <Dialog
        fullScreen
        onClose={handleClose}
        open={openDialog}
        TransitionComponent={Transition}
      >
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item md={12} sm={12} xs={12} className={cssStyles.root}>
            <Paper id="paper">
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="stretch"
              >
                <Grid
                  item
                  md={12}
                  sm={12}
                  xs={12}
                >
                  <Box
                    display="inline-flex"
                    alignItems="center"
                    component="div"
                  >
                    <Avatar
                      className={cssStyles.avatar}
                      alt={props.userData.name.first}
                      src={props.userData.picture.large}
                    />
                    <Typography variant="h6" gutterBottom={true}>
                      <Box paddingLeft="10px">
                        {props.userData.name.first} {props.userData.name.last}
                      </Box>
                    </Typography>
                    <Typography variant="subtitle1">
                      <Box paddingLeft="2px">
                        {props.userData.gender == "female" ? "M, " : "F, "}{" "}
                        {props.userData.dob.age}
                      </Box>
                    </Typography>
                  </Box>
                </Grid>

                <Grid
                  item
                  md={12}
                  sm={12}
                  xs={12}
                  style={{ marginLeft: "25px", paddingTop: "20px" }}
                >
                  <Typography variant="h4" gutterBottom={true}>
                    <Box paddingBottom="5px">Biography</Box>
                  </Typography>
                  <Typography variant="subtitle1">
                    <Box>{props.userData.devInfo.bio}</Box>
                  </Typography>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  //TODO: friends here
                </Grid>

                <Grid item md={12} sm={12} xs={12}>
                  <Box height="400px">
                    <Map
                      center={[latitude, longitude]}
                      zoom={17}
                      minZoom="16"
                      maxZoom="18"
                      className={cssStyles.leaflet}
                    >
                      <Marker position={[latitude, longitude]}>
                        <Popup>
                          {props.userData.location.street.number}{" "}
                          {props.userData.location.street.name + ", "}
                          {props.userData.location.city + ", "}
                          {props.userData.location.country}
                        </Popup>
                      </Marker>
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      />
                    </Map>
                  </Box>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  //TODO: comments here
                  <CommentSection id={props.userData._id} />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Dialog>
    </Fragment>
  );
}

export default UserProfileDialog;