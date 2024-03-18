import React,{useState} from 'react';
import {connect} from "frontity";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {createTheme, ThemeProvider} from '@mui/material/styles';

const ProfileMenuConnected = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const color = createTheme({
        palette: {
            primary: {main:'#424242'}
        },
        typography: {
            fontFamily: 'Helvetica Neue'
        },
    });

    return (
        <div>
            <ThemeProvider theme={color}>
                <Button
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    color="primary"
                >
                    <FontAwesomeIcon icon={faUser  } size={"xl"}/>
                </Button>
            </ThemeProvider>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}

            >
                <MenuItem onClick={handleClose}>Profil</MenuItem>
                <MenuItem onClick={handleClose}>Mon Compte</MenuItem>
                <MenuItem onClick={handleClose}>Deconnexion</MenuItem>
            </Menu>
        </div>
    );
}

export default connect(ProfileMenuConnected);