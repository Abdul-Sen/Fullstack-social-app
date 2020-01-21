import React, { Fragment } from 'react';
import { Grid, Typography, Box, TextField, Checkbox, FormControlLabel } from '@material-ui/core';

function RegisterUser(props) {
    return (

        <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={3}
        >
            <Grid item md={12} sm={false} xs={false}>
                <Typography variant="h4" gutterBottom fontWeight="bold">
                    <Box fontWeight="bold" m={1}>REGISTER FORM</Box>
                </Typography>
            </Grid>
            <Grid item md={6}>
                <TextField
                    label="your first name"
                    name="firstName"
                    type="text"
                    variant="standard"
                    color="primary"
                ></TextField>
            </Grid>
            <Grid item md={6}>
                <TextField
                    label="your last name"
                    name="lastName"
                    type="text"
                    variant="standard"
                    color="primary"

                ></TextField>
            </Grid>
            <Grid item md={12}>
                <TextField
                    label="your email"
                    name="email"
                    type="text"
                    variant="standard"
                    color="primary"
                    fullWidth
                ></TextField>
            </Grid>
            <Grid item md={6}>
                <TextField
                    label="password"
                    name="password"
                    type="text"
                    variant="standard"
                    color="primary"
                ></TextField>
            </Grid>
            <Grid item md={6}>
                <TextField
                    label="confirm password"
                    name="passwordConfirm"
                    type="text"
                    variant="standard"
                    color="primary"
                ></TextField>
            </Grid>
            <Grid item md={12}>

                <p><Box display="inline">
                    <Checkbox>
                    </Checkbox>
                </Box>I agree to the <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Terms and Conditions</a>
                </p>
            </Grid>

        </Grid>
    )
}

export default RegisterUser;