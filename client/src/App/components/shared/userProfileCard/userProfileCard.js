import React, { Fragment } from 'react';
import { Box } from '@material-ui/core';


function UserProfileCard(props){
    console.log(props);
    return (
        <Fragment>
            <Box padding='100px' margin='100px'>
                <pre>{JSON.stringify(props,undefined, 2)}</pre>
            </Box>

        </Fragment>
    )
}

export default UserProfileCard;