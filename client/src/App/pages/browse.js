import React, { Fragment } from 'react';
import UserProfileGrid from '../components/shared/userProfileGrid/userProfileGrid';
import { makeStyles } from '@material-ui/core/styles';
import { Container, CssBaseline } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.up('md')]: {
            minHeight: "100vh",
            padding: "50px",
        }
    },
}));
function Browse(props) {
    const cssStyle = useStyles();

    return (<Fragment>
        <CssBaseline/>
        <Box className={cssStyle.root}>
            <UserProfileGrid />
        </Box>

    </Fragment>)

}

export default Browse;