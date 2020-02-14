import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import { Grid, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding:"50px",
    textAlign:"center"
  },
});

ItemTile.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

function ItemTile(props) {
  const cssStyle = useStyles();

  return (
    <Fragment>
      <Grid container direction="column" justify="flex-start" alignItems="center" className={cssStyle.root}>
        <Grid item md={12}>
        <div className={cssStyle.icon} >
          {props.children}
      </div>
        </Grid>
        <Grid item md={12}>
          <Typography variant="h6" gutterBottom={true}>
            <Box>
            {props.title}
            </Box>
          </Typography>
        </Grid>
        <Grid item md={12}>
          {props.description}
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default ItemTile;