import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
// import { Icon } from "leaflet";

import {
  Grid,
  Typography,
  Box,
  Slide,
  Dialog,
  IconButton
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const styles = makeStyles(theme => ({
  leaflet: {
    width: "100%",
    height: "100vh",
    border: "1px solid black"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function UserProfileDialog(props) {
  console.log(props.userData.location.coordinates);
  const { latitude, longitude } = { ...props.userData.location.coordinates };

  const cssStyles = styles();

  const [openDialog, setOpenDialog] = useState(true);
  const handleClose = () => {
    console.log(`HANLDE CLOSE BEEN CALLED`);
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
        <Grid container justify="left">
          <Grid item md={11} sm={11} xs={11} />
          <Grid item md={1} sm={1} xs={1}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container justify="left">
          <Grid item md={12} sm={12} xs={12}>
            <img src={props.userData.picture.large} />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <div className={cssStyles.leaflet}>
              <Map
                center={[latitude, longitude]}
                zoom={17}
                className={cssStyles.leaflet}
              >
                <Marker position={[latitude, longitude]} />
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
              </Map>
            </div>
          </Grid>
        </Grid>

        <p>hello </p>
      </Dialog>
    </Fragment>
  );
}

export default UserProfileDialog;
