import React from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    altLogin:{
        '& .MuiGrid-item' :{
            textAlign: "center"
        }
    }
}));
  

function FormComponent(props) {


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
        <Grid container direction="column" justify="center" alignItems="center" spacing={3}>

            <Grid item md={12} sm={12} xs={12}>
                <Typography component="h1" variant="h5">Sign In</Typography>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
                <TextField
                    label="username"
                    name="username"
                    type="text"
                    variant="outlined"
                    color="primary"
                    //value={// TODO */}
                    onChange={handleChange}
                >
                </TextField>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
                <TextField
                    name="password"
                    label="password"
                    variant="outlined"
                    color="primary"
                    type="password"
                    //value={// TODO */}
                    onChange={handleChange}
                >
                </TextField>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
                <Button onClick={handleSubmit}>Submit</Button>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
                <AltLogin />
            </Grid>
        </Grid>
    )
}

function AltLogin() {
    const cssStyle = useStyles();

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
            className={cssStyle.altLogin}
            >

            <Grid item md={12} sm={12} xs={12}>
                <Typography variant="overline" display="block" align="center" gutterBottom>
                    Or login with
            </Typography>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
                <Button>
                    <Typography variant="subtitle2" gutterBottom align="center">
                        Facebook
                    </Typography>
                </Button>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
                <Button>
                    <Typography variant="subtitle2" gutterBottom align="center">
                        Google
                    </Typography>

                </Button>
            </Grid>
        </Grid>
    )
}

export default FormComponent;