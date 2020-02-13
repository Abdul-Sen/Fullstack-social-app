import React, { Fragment } from 'react';
import {CssBaseline, Container, Box, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import LandingIntro from '../components/landingIntro/landingIntro';

import List from './List';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    // padding:"50px",
    background: 'url(https://source.unsplash.com/random) no-repeat center fixed',
    backgroundSize:"100% auto",
    backdropFilter: "blur(3px)",
    padding:"20px 10% 20px 10%",
     
      // [theme.breakpoints.up('md')]: {
      //     minHeight: "100vh",
      //     padding: "50px",
      // }
  },
}));
function Home(props)
{
  const cssStyle = useStyles();
  return (
    <Fragment>
      <CssBaseline/>
      <Container disableGutters={true}>
      <Container disableGutters={true} className={cssStyle.root}>
        <Grid container>
          <Grid item md={6}>
            <LandingIntro/>
          </Grid>
          <Grid item>
          </Grid>
        </Grid>
      </Container>
// TODO:
      </Container>
    </Fragment>
  )
}

export default Home;