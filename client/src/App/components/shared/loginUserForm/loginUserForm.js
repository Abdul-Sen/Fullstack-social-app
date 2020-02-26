import React, {useState, useEffect} from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";


const useStyles = makeStyles(theme => ({
    altLogin:{
        '& .MuiGrid-item' :{
            textAlign: "center"
        }
    },

    submitButton: {
        background: '#ec008c',
        background: 'linear-gradient(45deg, #fc6767, #ec008c)',
        padding: "10px",
        width: "250px",
        height:"50px"
    }
}));

const INITIAL_STATE = { firstName: "", password: "" }

function LoginUserForm(props) {
    const {loginStatus} = useSelector(globalState =>({...globalState.loginReducer}));
    const dispatch = useDispatch();

    const handleLoginChange = value => {
        console.log(value);
        dispatch({
          type: "UPDATE_STATE",
          payload: value
        });
      };

    const history = useHistory();

    const [userInfo, setUserInfo] = useState(INITIAL_STATE);
    
    const cssStyle = useStyles();

    const handleChange = (event) => {
        const {name, value} = event.target;

        setUserInfo((currentState)=>({
            ...currentState,
            [name]: value
        }));
    }

    const handleSubmit = (event)  => {
        event.preventDefault();
        console.log(userInfo);

        fetch( (process.env.REACT_APP_PUBLIC_URL?process.env.REACT_APP_PUBLIC_URL: "") + "api/login",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo)
        })
        .then((res)=> res.json())
        .then((response)=>{
            sessionStorage.setItem("token",response.token);
            sessionStorage.setItem("user",response.user);
            if(props.redirect)
            {
                handleLoginChange(true)
                history.push(props.redirect);
            }
            
        }).catch((err)=>{
            console.log("login failed");
            console.log(err);
        });
        
    }
    return (
        <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
            <Grid item md={12} sm={12} xs={12}>
                <Typography component="h1" variant="h5">Sign In</Typography>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
                <Typography component="h1" variant="caption">Hint: try username &#38; password 'demoUser123'</Typography>
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
                <TextField
                    label="username"
                    name="userName"
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
                <Button onClick={handleSubmit} className={cssStyle.submitButton}>Submit</Button>
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

export default LoginUserForm;