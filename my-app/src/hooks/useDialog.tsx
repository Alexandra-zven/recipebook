import * as React from "react";
import {DialogType} from "../components/Dialog/dialog.types";

const useDialog = () => {
    const [open, setOpen] = React.useState('');

    const handleClick = (type: DialogType) => {
        setOpen(type);
    };

    const handleClose = () => {
        setOpen('');
    };


    return {open, handleClick, handleClose}
}
export default useDialog