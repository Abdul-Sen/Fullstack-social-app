import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, AppBar, Button, Fab } from '@material-ui/core'
import * as ROUTES from '../../routes/route';
import { Link } from 'react-router-dom';

const cssStyles = makeStyles(theme => ({
    fab: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 50,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    }
}));

function LoggedOut(props){
    const useStyle = cssStyles();

    return (
        <Fragment>
            <Grid item md={1} style={{ marginLeft: "auto" }}>
                <Link to={ROUTES.LOGIN} style={{ textDecoration: "none" }}>
                    <Button className={useStyle.fab}>Login</Button>
                </Link>
            </Grid>
            <Grid item md={1} style={{ marginLeft: "20px" }} >
                <Link to={ROUTES.REGISTER} style={{ textDecoration: "none", color: "white" }}>
                    <Button color="inherit">Register</Button>
                </Link>
            </Grid>
        </Fragment>
    )}

export default LoggedOut;