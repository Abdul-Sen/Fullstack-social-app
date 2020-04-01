import React, { Fragment } from 'react';
import {Box, Typography, ButtonBase, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import * as CONSTS from '../../constants/constants'
const cssStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        backgroundColor:"#1c1111",
        color:"#D7CCC8",
        width: "100%",
        minHeight:"60px",
        '& #stripe':{
            height: "4px",
            flexGrow: 0,
            background: "#6190E8",
            background: "linear-gradient(45deg, #A7BFE8, #6190E8)",       
        },
        '& #footerContent':{
            flexGrow: 2
        },
        '& #copyright': {
            flexGrow: 1,
        }
    },

    btn: {
        color: "#494949 !important",
        textTransform: "uppercase",
        background: "#ebebeb",
        padding: "6px",
        marginLeft:"15px",
        marginTop:"10px",
        border: "4px solid #494949 !important",
        borderRadius: "6px",
        display: "inline-block",
        transition: "all 0.3s ease 0s",
        '&:hover':{
            color: "#494949 !important",
            borderRadius: "50px",
            borderColor: "#494949 !important",
            transition: "all 0.3s ease 0s"
          
        }
}
    
}));

function Footer(props)
{
    const css = cssStyles();
    const CustomBtn = ({children,...rest})=> <ButtonBase {...rest} target="_blank" className={css.btn}>{children}</ButtonBase>

    return (<Fragment>
        <Box className={css.root} >
        <Box component="div" id="stripe" />
        <Box id="footerContent">
            <Typography component="span" variant={"caption"} >
                <Box marginLeft="20px">
                    For more of my work
                  <CustomBtn href={CONSTS.PORTFOLIO} >visit portfolio</CustomBtn>
                </Box>
            </Typography>
        </Box>
        <Box id="copyright">
            <Typography component="span" variant={"caption"} >
                <Box textAlign="left" marginLeft="20px">
                    Devovaro @ 2020 All Rights Reserved | Privacy Policy
                </Box>
            </Typography>
        </Box>
    </Box>
    </Fragment>);
}
export default Footer;