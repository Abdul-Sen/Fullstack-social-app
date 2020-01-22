import React, { useState } from 'react';
import { Grid, Typography, Box, TextField, Checkbox, Button, useTheme } from '@material-ui/core';

function RegisterUser(props) {
    const theme = useTheme();
    const color = theme.palette.primary[100]

    const [userInfo, setUserInfo] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });

    const handleChange = (event) => {
        console.log(`stuff changed, this is what changed it:`);
        console.log(event.target);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`form submitted`);
        console.log(event);
    }

    return (

        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={5}
        >
            <span>hi {color}</span>
            <Grid item md={12} sm={12} xs={12}>
                <Typography variant="h4" gutterBottom fontWeight="bold">
                    <Box fontWeight="bold" m={0}>REGISTER FORM</Box>
                </Typography>
            </Grid>
            <Grid item md={6} sm={5} xs={12}>
                <TextField
                    label="your first name"
                    name="firstName"
                    type="text"
                    variant="standard"
                    color="primary"
                    fullWidth
                    onChange={handleChange}

                ></TextField>
            </Grid>
            <Grid item md={6} sm={5} xs={12}>
                <TextField
                    onChange={handleChange}
                    label="your last name"
                    name="lastName"
                    type="text"
                    variant="standard"
                    color="primary"
                    fullWidth
                ></TextField>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
                <TextField
                    onChange={handleChange}

                    label="your email"
                    name="email"
                    type="text"
                    variant="standard"
                    color="primary"
                    fullWidth

                ></TextField>
            </Grid>
            <Grid item md={6} sm={5} xs={12}>
                <TextField
                    onChange={handleChange}

                    label="password"
                    name="password"
                    type="text"
                    variant="standard"
                    color="primary"
                    fullWidth
                ></TextField>
            </Grid>
            <Grid item md={6} sm={5} xs={12}>
                <TextField
                    onChange={handleChange}

                    label="confirm password"
                    name="passwordConfirm"
                    type="text"
                    variant="standard"
                    color="primary"
                    fullWidth
                ></TextField>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>

                <p><Box display="inline">
                    <Checkbox color="primary">
                    </Checkbox>
                </Box>I agree to the <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Terms and Conditions</a>
                </p>
            </Grid>
            <Grid item md={12}>
                <Box textAlign="right" >
                <Button variant="contained" color="primary"  onClick={handleSubmit}>
                    Register
                </Button>
                </Box>
            </Grid>

        </Grid>
    )
}

export default RegisterUser;