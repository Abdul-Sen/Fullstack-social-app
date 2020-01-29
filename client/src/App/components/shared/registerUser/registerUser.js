import React, { useState } from 'react';
import { Grid, Typography, Box, TextField, Checkbox, Button, useTheme } from '@material-ui/core';

const INITIAL_STATE = { firstName: "", lastName: "", email: "", userName:"", password: "", confirmPassword: "" }

function RegisterUser(props) {
    const theme = useTheme();

    const [userInfo, setUserInfo] = useState(INITIAL_STATE);

    const handleChange = (event) => {
        const {name, value} = event.target;

        setUserInfo((currentState)=>({
            ...currentState,
            [name]: value
        }));

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`form submitted`);
        console.log(userInfo)

        //TODO: Call validate function
        //TODO: Loading spinner implimentation?
        fetch(process.env.REACT_APP_PUBLIC_URL + "api/register",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo)
        }).then((res)=>{
            console.log(res);
            setUserInfo(INITIAL_STATE);
            alert("User created, go to login page to login");

        }).catch((err)=>{
            console.log("failed to register user");
            console.log(err);
        })
    }

    return (

        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={5}
        >
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
            
            <Grid item md={12} sm={12} xs={12}>
                <TextField
                    onChange={handleChange}

                    label="your username"
                    name="userName"
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
                    type="password"
                    variant="standard"
                    color="primary"
                    fullWidth
                ></TextField>
            </Grid>
            <Grid item md={6} sm={5} xs={12}>
                <TextField
                    onChange={handleChange}

                    label="confirm password"
                    name="confirmPassword"
                    type="password"
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
                <Button variant="contained" color="primary"  onClick={handleSubmit} style={{background: theme.palette.primary[250], fontWeight: "449"}}>
                    Register
                </Button>
                </Box>
            </Grid>

        </Grid>
    )
}

export default RegisterUser;