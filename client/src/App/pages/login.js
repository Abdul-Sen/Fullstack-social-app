import React, { Fragment } from 'react';
import { Container, Paper, Card, CardContent, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FormComponent from '../components/formComponent/formComponent';
const useStyles = makeStyles(theme =>({
    container: {
        minHeight: "100vh",
        minWidth: "100vh",
        backgroundColor: theme.palette.primary[50],
    }
       
}));



function Login(props)
{
    const cssStyle = useStyles();
    return (
        <Fragment>
            <Container className={cssStyle.container} disableGutters={true}>
                <Card>
                    <CardContent>
                        <FormComponent></FormComponent> {/* Widget 1 */}
                    </CardContent>
                </Card>
            </Container>
        </Fragment>
    )
}

export default Login;