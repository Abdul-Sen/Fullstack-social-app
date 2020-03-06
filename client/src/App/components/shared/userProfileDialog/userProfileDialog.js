import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PageComments from '../pageComments/pageComments';
import CloseIcon from '@material-ui/icons/Close';
import AddressRenderer from '../addressRenderer/addressRenderer';

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
    },
    '& #closeBtn': {
      float: "right"
    },
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

  const cssStyles = styles();

  const [openDialog, setOpenDialog] = useState(true);
  const handleClose = () => {
    setOpenDialog(false);
    setTimeout(()=>{
      props.closeDialog()
    },1000);
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
                       {", "} {props.userData.dob.age}
                      </Box>
                    </Typography>
                  </Box>
                  <IconButton id="closeBtn" onClick={handleClose}>
                      <CloseIcon />
                  </IconButton>
                </Grid>

                <Grid
                  item
                  md={12}
                  sm={12}
                  xs={12}
                  style={{ marginLeft: "25px", paddingTop: "20px" , paddingBottom:"20px"}}
                >
                  <Typography variant="h4" gutterBottom={true}>
                    <Box paddingBottom="5px">Biography</Box>
                  </Typography>
                  <Typography variant="subtitle1">
                    <Box>{props.userData.devInfo.bio}</Box>
                  </Typography>
                </Grid>
                <Grid item md={12} sm={12} xs={12} >
                  <AddressRenderer location={props.userData.location} />
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <PageComments id={props.userData._id}/>
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