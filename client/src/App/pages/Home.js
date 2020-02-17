import React, { Fragment } from 'react';
import { CssBaseline, Container, Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LandingIntro from '../components/landingIntro/landingIntro';
import ItemTile from '../components/shared/itemTile/itemTile';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import CodeIcon from '@material-ui/icons/Code';
import PeopleIcon from '@material-ui/icons/People';

const useStyles = makeStyles(theme => ({
  root:{
    '& #container2':{
      backgroundColor: '#E8E8E8',
      opacity: 0.9
    },
    '& #container3': {
      marginTop:"70px"
    }
  },
  introContainer: {

    [theme.breakpoints.up('sm')]: {
      minHeight: "100vh",
      padding: "50px",
      background: `url(${process.env.PUBLIC_URL + '/images/bg.jfif'}) no-repeat center fixed`,
      backgroundSize: "100% auto",
      backdropFilter: "blur(3px)",
      padding: "20px 10% 20px 10%",
    },
    [theme.breakpoints.only('xs')]: {
      //TODO: figure out how top is displayed for XS
    }
  },
  icon: {

    border: '2px solid #000000',
    borderRadius: '50%',
    display: 'inline-block',
    fontSize: '40px',
    width: '100px',
    height: '100px',
    lineHeight: '100px',
    verticalAlign: 'middle',
    textAlign: 'center',
  }
}));
function Home(props) {
  const cssStyle = useStyles();
  return (
    <Fragment>
      <CssBaseline />

      <Container disableGutters={true} className={cssStyle.root}>
        <Container disableGutters={true} className={cssStyle.introContainer}>
          <Grid container>
            <Grid item md={6}>
              <LandingIntro />
            </Grid>
            <Grid item>
            </Grid>
          </Grid>

        </Container>
        <Container disableGutters={true}>

          <Grid container direction="row" wrap="wrap" justify="space-around" alignItems="stretch" alignContent="stretch" id="container2">
            <Grid item md={4}>
              <ItemTile title={"Build Partnerships"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."}>
                <PeopleIcon className={cssStyle.icon} />
              </ItemTile>
            </Grid>
            <Grid item md={4}>
              <ItemTile title={"Meet Developers"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."}>
                <GroupWorkIcon className={cssStyle.icon} />

              </ItemTile>
            </Grid>
            <Grid item md={4}>
              <ItemTile title={"Code Together"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."}>
                <CodeIcon className={cssStyle.icon} />
              </ItemTile>
            </Grid>
          </Grid>
          {/* Blocks*/}
          <Grid container direction="row" wrap="wrap" justify="space-evenly" alignItems="stretch" alignContent="center" id="container3">
            <Grid item md={6}>
              <Box textAlign="right" marginBottom="70px">
              <img src={process.env.PUBLIC_URL + '/images/handShake.jpg'} height="350px" ></img>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Typography variant="body1">
                <Box paddingLeft="100px" paddingRight="100px"  textAlign="justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Box>
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography variant="body1">
                <Box paddingLeft="100px" paddingRight="100px" textAlign="justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Box>
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Box textAlign="left" marginBottom="70px">
              <img src={process.env.PUBLIC_URL + '/images/stockImg1.jpg'} height="350px" ></img>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Box textAlign="right" marginBottom="70px">
              <img src={process.env.PUBLIC_URL + '/images/collab.jpg'} height="350px"></img>
              </Box>
            </Grid>
            <Grid item md={6}>
              <Typography variant="body1">
                <Box paddingLeft="100px" paddingRight="100px"  textAlign="justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Fragment>
  )
}

export default Home;