import React, { Fragment } from 'react';
import { Grid, Box } from '@material-ui/core';
import Role from './role';
import Country from './country';
import ClearSearch from './clearSearch';

function TuneContainer(props) {
    return (
        <Fragment>
            <Grid
                container
                wrap="wrap"
                direction="row"
                justify="flex-start"
                alignItems="center"
                spacing={10}
            >
                <Box margin="20px"/>
                <Grid item md={2}>
                    <Country />
                </Grid>
                <Grid item md={2}>
                    <Role />
                </Grid>
                <Grid item md={2}>
                    <ClearSearch />
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default TuneContainer;