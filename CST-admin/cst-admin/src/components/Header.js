import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import appLogo from '../images/logov2.png';
import { useEffect } from 'react';

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
            localStorage.removeItem('userId');
            localStorage.removeItem('companyId');
            window.location.href='/login';
    };

    useEffect(() => {
        if (localStorage.getItem('userId')) {
            setIsLoggedIn(true)
        }
        else{
            setIsLoggedIn(false)
        }
    }, [])

    return (
        <AppBar position="static" style={{ background: "#00ADB5" }}>
            <Toolbar disableGutters>
                <Box sx={{ display: 'flex', justifyContent:"space-between", width: '100%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <img src={appLogo} onClick={() => { window.location.href = '/' }} style={{ marginTop: 10, marginBottom: 10, marginLeft: 20, width: "auto", height: "50px", maxWidth: "100%", textAlign: "center" }} alt="import appLogo from '../images/logo.png';
"/>
                    </Box>
                    <Box style={{display: 'flex', justifyContent: 'flex-end', marginRight: 10}}>
                    {isLoggedIn ? (
                        <>
                            <Button sx={{ my: 1, color: 'white', display: 'block'}} onClick={handleLogout}>
                                Logout
                            </Button>
                            <Button sx={{ my: 1, color: 'white', display: 'block'}} onClick={() => {window.location.href = '/admin'}}>
                                Admin panel
                            </Button>
                        </>
                    ) : (
                        <Button sx={{ my: 1, color: 'white', display: 'block'}} onClick={() => { window.location.href = '/login' }}>
                            Login
                        </Button>
                    )}
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
