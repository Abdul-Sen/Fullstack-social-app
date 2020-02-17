import React, { Fragment, useState } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Menu,MenuItem } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useHistory } from 'react-router-dom';


function UserProfile(props) {
    const {loginStatus} = useSelector(globalState =>({...globalState.loginReducer}));    
    const dispatch = useDispatch();
    const [anchorElement, setAnchorElement] = useState(null);
    const history = useHistory();


    const handleLogout = ()=>{
        handleClose();
        sessionStorage.removeItem("token");
        dispatch({
            type: "UPDATE_STATE",
            payload: false
          });
          if(props.redirectOnLogout)
          {
            history.push(props.redirectOnLogout);
          }        
    }

    const handleClick = (event) => {
        console.log("clicked");
        console.log(event.currentTarget);
        setAnchorElement(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorElement(null);
    }

    return (
        <Fragment>
            <AccountCircleIcon fontSize="large" onClick={handleClick}></AccountCircleIcon>
            <Menu
                id="simple-menu"
                anchorEl={anchorElement}
                keepMounted
                open={Boolean(anchorElement)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} disabled><AccountCircleIcon style={{paddingRight:"10px"}}/> Profile</MenuItem>
                <MenuItem onClick={handleLogout}><ExitToAppIcon style={{paddingRight:"10px"}}/> Logout</MenuItem>
            </Menu>

        </Fragment>
    )
}

export default UserProfile;