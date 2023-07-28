import Button from '@mui/material/Button';
import './header.css';
import * as React from 'react';
import useDialog from "../../hooks/useDialog";
import SignUpDialog from "../Dialog/SignUpDialogComponent";
import SignInDialog from "../Dialog/SignInDialogComponent";
import {DialogType} from "../Dialog/dialog.types";
import {Paper} from "@mui/material";


const Header = () => {
    const {open, handleClick, handleClose} = useDialog();
    const handleOpenSignUp = () => {
        handleClick(DialogType.SignUp)
    }
    const handleOpenSignIn = () => {
        handleClick(DialogType.SignIn)
    }
    return (
        <Paper elevation={3} style={{background: 'cadetblue'}}>
        <div className={'header'}>
            <span className={'header_greeting'}>Welcome to my project "Recipe book"</span>
            <div className={'header_btn'}>
                <Button variant="contained" onClick={handleOpenSignUp}>
                    Sign up
                </Button>
                <Button variant="contained" onClick={handleOpenSignIn}>Sign in</Button>
            </div>
            <SignUpDialog handleCloseSignUp={handleClose} openSignUp={open === DialogType.SignUp}/>
            <SignInDialog handleCloseSignIn={handleClose} openSignIn={open === DialogType.SignIn}/>
        </div>
        </Paper>);
};

export default Header;