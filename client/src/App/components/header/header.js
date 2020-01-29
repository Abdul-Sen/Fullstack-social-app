import React, { Fragment, useState } from 'react';
import { Grid, AppBar, Button, Fab } from '@material-ui/core'
import { Link } from 'react-router-dom';
import * as ROUTES from '../../routes/route';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import LoggedOut from './loggedOut';
import LoggedIn from './loggedIn';
const cssStyles = makeStyles(theme => ({
    appbar: {
        paddingLeft: "20px",
    },
}));

function Header(props) {
   const [loginStatus, setLoginStatus] = useState(false);

    // ! TODO: Somehow figure out how to work with state here

    const useStyle = cssStyles();

    return (
        <Fragment>
            <AppBar color="primary" position="static" className={useStyle.appbar}>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                >
                    <Grid item md={1}>
                        <Link to={ROUTES.HOME}>
                            <img src={process.env.PUBLIC_URL + '/lines.ico'} width="50px" height="50px" />
                        </Link>
                    </Grid>
                        {(loginStatus=== true)? <LoggedIn/>: <LoggedOut/>}
                </Grid>
            </AppBar>
        </Fragment>
    )
}

export default Header;