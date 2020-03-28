import React, { Fragment } from 'react';
import { Box } from '@material-ui/core';
import Role from './role';
import Country from './country';
import ClearSearch from './clearSearch';

function TuneContainer(props) {
    return (
        <Fragment>
            <Box component="div" maxWidth="400px" alignItems="center" justifyContent="flex-start" display="flex" >
                <Box width="30px" color="red"></Box>
                <Box flex="1" flexGrow="1">
                    <Country />
                </Box>
                <Box flex="1" flexGrow="1">
                    <Role />
                </Box>
                <Box flex="1" flexGrow="1">
                    <ClearSearch />
                </Box>
            </Box>
        </Fragment>
    )
}

export default TuneContainer;