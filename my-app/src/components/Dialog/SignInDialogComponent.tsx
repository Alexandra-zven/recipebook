import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SignIn from "../../main/SignIn";

interface Props {
    handleCloseSignIn: ()=> void
    openSignIn: boolean
}

export default function SignInDialog({handleCloseSignIn, openSignIn}:Props) {

    return (
        <Dialog
            open={openSignIn}
            onClose={handleCloseSignIn}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <SignIn/>
                </DialogContentText>
            </DialogContent>
        </Dialog>

    );
}