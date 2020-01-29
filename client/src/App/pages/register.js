import React, { Fragment } from 'react';
import { CssBaseline, Grid, makeStyles, Card, CardContent, Typography, Box } from '@material-ui/core';
import RegisterUser from '../components/shared/registerUser/registerUser';

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.up('md')]: {
            minHeight: "100vh",
            padding: "50px",
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }
    },
    card: {
        minHeight: "100%"
    },
    sideInfo: {
        background: "linear-gradient(220deg, #b1cdfc, #d9e5fa)",
        minHeight:"100%",
    },
    cardcontent: {
        "&:last-child": {
          paddingBottom: 0
        }
      }    
}))
function Register(props) {
    const cssStyle = useStyles();
    return (
        <Fragment>
            <CssBaseline />
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className={cssStyle.root}
                spacing={2}>

                <Grid item md={10} sm={12} xs={12} >
                    <Card className={cssStyle.card} elevation={5}>
                        <CardContent className={cssStyle.cardcontent}>
                            <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="stretch"
                                spacing={5}
                            >
                                <Grid item md={5} sm={12} xs={12} className={cssStyle.sideInfo}>
                                    <Typography variant="h4" gutterBottom fontWeight="bold">
                                        <Box fontWeight="bold" m={1}>INFORMATION</Box>
                                    </Typography>
                                    <br/>
                                    <p>
                                        Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. Does everybody know that pig named Lorem Ipsum? An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud.
                                </p>
                                    <br />
                                    <p><Box display="inline" fontWeight="bold" >Lorem ipsum:</Box> dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag. Brunch raclette </p>

                                </Grid>
                                <Grid item md={7} sm={12} xs={12} className={cssStyle.form}>
                                    <CardContent>
                                        <RegisterUser />
                                    </CardContent>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Register;