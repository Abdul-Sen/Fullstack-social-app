// import React, { Fragment } from 'react';
// import { FormControl, Button, TextField, Typography, Grid } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles(theme =>({
//     gridContainer: {
        
//     },
//     form: {
//         width: "100%",
//         marginTop: theme.spacing(3)
//     }
// }));
// function FormComponent(props)
// {
//     const cssStyle = useStyles();
//     const handleSubmit = (event) =>{
//         event.preventDefault();
//         console.log(`form submitted`);
//     }

//     const handleChange = (event) =>{
//         console.log(`stuff changed, this is what changed it:`);
//         console.log(event.target);
//     }
    
//     return (
//         <div>
//             <Typography component="h1" variant="h5" align="center">
//                 Sign In
//             </Typography>
//             <form onSubmit={handleSubmit} className={cssStyle.form}>
//                 <FormControl>
//                     <TextField
//                     id="userName"
//                     label="username"
//                     variant="outlined"
//                     color="primary"
//                     //value={// TODO */}
//                     onChange={handleChange}
//                     >
//                     </TextField>

//                     <TextField
//                     id="password"
//                     label="password"
//                     variant="outlined"
//                     color="primary"
//                     type="password"
//                     >
//                     </TextField>

//                 </FormControl>
//                 <FormControl>
//                     <Button type="submit" >Submit</Button>
//                 </FormControl>
//             </form>
//         </div>
//     )
// }

// export default FormComponent;

import React from 'react';
import {Grid, Typography, TextField, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme =>({
    
}));

function FormComponent(props)
{

    
    const handleChange = (event) =>{
        console.log(`stuff changed, this is what changed it:`);
        console.log(event.target);
    }

    const handleSubmit= (event)=>{
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
            <Grid item>
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
            <Grid item>
                <Button onClick={handleSubmit}>Submit</Button>
            </Grid>
        </Grid>
    )
}

export default FormComponent;