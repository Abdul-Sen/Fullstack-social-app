import { Grid, Typography, Box, Button } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../routes/route';

const useStyles = makeStyles(theme=>({
    button:{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        fontSize: 21,
        height: 60,
        padding: '0 30px',
        marginRight: '10px'
    
    }
}))

function LandingIntro(props) {
    const cssStyles = useStyles();
    return (
        <Fragment>
            <Typography variant="h2" gutterBottom={true} component="span">
                <Box>
                    For developers, by developers
                </Box>
            </Typography>
            <Typography variant="h5"  component="span">
                <Box>
                    join the community!
                </Box>
            </Typography>
            <hr style={{borderColor:"black"}}/>
            <Typography variant="body1"  component="span">
                <Box paddingBottom="20px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </Box>
            </Typography>
            <Box component="span" m={1}>
            <Link to={ROUTES.LOGIN} style={{ textDecoration: "none", color: "white" }}>
            <Button className={cssStyles.button} >Login</Button>
            </Link>
            <Link to={ROUTES.REGISTER} style={{ textDecoration: "none", color: "white" }}>
            <Button style={{ marginLeft:"10px", fontSize:"21px"}} >Join today!</Button>
            </Link>
            </Box>
        </Fragment>
    )
}


export default LandingIntro;