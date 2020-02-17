import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import * as ROUTES from '../../routes/route';
import {Grid, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import UserProfile from '../shared/userProfile/userProfile';
const cssStyles = makeStyles(theme => ({

}));

function LoggedIn(props) {
        return (
                <Fragment>
                        <Grid item md={2} style={{ marginLeft: "20px" }} >
                                <Link to={ROUTES.BROWSE} style={{ textDecoration: "none", color: "white" }}>
                                        <Button color="inherit">Find developers</Button>
                                </Link>
                        </Grid>
                        <Grid item md={1} style={{ marginLeft: "auto" }}>
                                <UserProfile redirectOnLogout="/" />
                        </Grid>
                </Fragment>
        )
}

export default LoggedIn;