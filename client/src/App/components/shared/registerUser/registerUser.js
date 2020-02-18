import React, { useState } from 'react';
import { Grid, Typography, Box, TextField, Checkbox, Button, useTheme } from '@material-ui/core';

const INITIAL_STATE = { firstName: "", lastName: "", email: "", userName:"", password: "", confirmPassword: "" }

function RegisterUser(props) {
    const theme = useTheme();

    const [userInfo, setUserInfo] = useState(INITIAL_STATE);
    const [formState, setFormState] = useState({firstName:{
        isValid:true,
        errorMessage: "",},
        lastName: {
            isValid:true,
            errorMessage:"",
        },
        email: {
            isValid:true,
            errorMessage:"",
        },
        userName:{
            isValid: true,
            errorMessage: ""
        },
        password:{
            isValid: true,
            errorMessage: ""
        },
        confirmPassword:{
            isValid: true,
            errorMessage: ""
        }

    });

    const validateUsername = (event)=>{
        let pattern = new RegExp(/^[a-z0-9_-]{3,15}$/);
        let result = pattern.test(event.target.value);
        if(result == false && event.target.value != "")
        {
            
            handleFormState({[event.target.name]:{isValid: false, errorMessage:`only alphanumeric, '_' and '-' allowed`}});
        }
        else{
            handleFormState({[event.target.name]:{isValid: true, errorMessage:``}});
        }
    }

    const validatePassword = ()=>{

        if(userInfo.password == userInfo.confirmPassword)
        {
            handleFormState({["password"]:{isValid: true, errorMessage:``}});
        }
        else{
            handleFormState({["password"]:{isValid: false, errorMessage:`password does not match confirm password`}});
        }
    }

    const validateEmail = (event) =>{
        let pattern = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
        let result = pattern.test(event.target.value);
        if(result == false && event.target.value != "")
        {
            handleFormState({[event.target.name]:{isValid: false, errorMessage:`email validation failed. make sure it follows format example@domain.com`}});
        }
        else{
            handleFormState({[event.target.name]:{isValid: true, errorMessage:``}});
        }
    }
    
    const validateName = (event)=>{
        let pattern = new RegExp(/^[a-zA-Z ]*$/);
        let result = pattern.test(event.target.value);
        if(result == false && event.target.value != "")
        {
            handleFormState({[event.target.name]:{isValid: false, errorMessage:`only letters allowed for ${event.target.name}`}});
        }
        else{
            handleFormState({[event.target.name]:{isValid: true, errorMessage:``}});
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;

        setUserInfo((currentState)=>({
            ...currentState,
            [name]: value
        }));

    }

    const handleFormState = (newState)=>{

        setFormState((currentState)=>({
            ...currentState,
            ...newState
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch( (process.env.REACT_APP_PUBLIC_URL? process.env.REACT_APP_PUBLIC_URL : "") + "api/register",{
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
                    error={!formState.firstName.isValid}
                    onBlur={validateName}
                    helperText={formState.firstName.errorMessage}
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
                    error={!formState.lastName.isValid}
                    onBlur={validateName}
                    helperText={formState.lastName.errorMessage}
                    variant="standard"
                    color="primary"
                    fullWidth
                ></TextField>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
                <TextField
                    onChange={handleChange}
                    onBlur={validateEmail}
                    helperText={formState.email.errorMessage}
                    error={!formState.email.isValid}
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
                    onBlur={validateUsername}
                    helperText={formState.userName.errorMessage}
                    error={!formState.userName.isValid}
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
                    onBlur={validatePassword}
                    helperText={formState.password.errorMessage}
                    error={!formState.password.isValid}
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
                    onBlur={validatePassword}
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