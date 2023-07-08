import React from 'react';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import Icon from '@mui/material/Icon';
import Button from '@mui/material/Button';
import './header.css';


const Header = () => {
    return (
        <div className={'header'}>
            <Icon><LocalDiningIcon/></Icon>
            <span className={'header_greeting'}>What would you like to eat? </span>
                <div className={'header_btn'}>
                    <Button variant="contained">Sign up</Button>
                    <Button variant="contained">Sign in</Button>
                </div>
        </div>);
};

export default Header;