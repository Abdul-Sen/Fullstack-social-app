import React, { Fragment } from 'react'
import {makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Grid, Paper } from '@material-ui/core';
import FormComponent from '../components/formComponent/formComponent'
const useStyles = makeStyles(theme =>({
    root : {
        height: "100vh",
        background: "#6190E8",
        background: "linear-gradient(220deg, #A7BFE8, #5a8ae6)"
        
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: "100%"
        },

    gridItem: {
        height: "100%",
    },
    paperContainer: {
        height: "80%",
        marginTop: "6%"
    }
}))

function Login(props)
{
    const cssStyle = useStyles();
    return (
        <Fragment>
            <CssBaseline />
            <Grid container  component="main" className={cssStyle.root} justify="center">
                <Grid item md={8} sm={12} xs={12} className={cssStyle.gridItem}>

                    <Grid  container  direction="row"  justify="center"  alignItems="stretch"  className={cssStyle.paperContainer} component={Paper} elevation={12} >

                        <Grid item md={6} sm={6} xs={false} className={cssStyle.image} ></Grid>
                        <Grid item md={6} sm={6} xs={12}>
                            <FormComponent/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )
}
export default Login;
// function Login(props){
//     const cssStyle = useStyles();
//     return (
//         <Grid Container className={cssStyle.root} >
//             {/* <CssBaseline /> */}
//             <Grid item md={7}>
//                 <Grid Container spacing={10}>
//                 <Grid item xs={false} sm={4} md={7} className={cssStyle.image} >test</Grid>
//                     <Grid item md={6}>
//                         <p>hello111</p>
//                     </Grid>
//                 </Grid>
//             </Grid>

//         </Grid>
//     );
// }

// export default Login;