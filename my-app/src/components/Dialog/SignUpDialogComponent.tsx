import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SignUp from "../Header/SignUp";

interface Props {
    handleCloseSignUp: ()=> void
    openSignUp: boolean
}

export default function SignUpDialog({handleCloseSignUp, openSignUp}:Props) {

    return (
            <Dialog
                open={openSignUp}
                onClose={handleCloseSignUp}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <SignUp/>
                    </DialogContentText>
                </DialogContent>
            </Dialog>

    );
}