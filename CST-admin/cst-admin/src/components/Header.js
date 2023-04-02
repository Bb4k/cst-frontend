import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import appLogo from '../images/logov2.png';
import { useEffect } from 'react';

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleLogout = () => {
        //   axiosInstance.post('logout/blacklist/', {
        //     refresh_token: localStorage.getItem('refresh_token'),
        //   }).catch((function (error) {
        //     console.log(error)
        //   }));
        //   localStorage.removeItem('access_token');
        //   localStorage.removeItem('refresh_token');
        //   axiosInstance.defaults.headers['Authorization'] = null;
        //   window.location.href='/';
    };

    useEffect(() => {
        let mounted = true
        if (mounted) {
            //   axiosInstance.get('authorization/', {})
            //                .then((res) => {
            //                 setIsLoggedIn(res.data.is_logged_in)
            //                 setIsStaff(res.data.is_staff)
            //                 setIsProfesor(res.data.is_profesor)
            //                })
            //                .catch(function () {
            //                 setIsLoggedIn(false)
            //                 setIsStaff(false)
            //                 setIsProfesor(false)
            //                })  

        }
    }, [setIsLoggedIn])

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
