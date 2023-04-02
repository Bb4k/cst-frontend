import React from "react";
import {useState, useEffect} from 'react';
import Alert from '@mui/material/Alert';
import Header from "../components/Header"
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export default function Login() {
    const [accountCreated, setAccountCreated] = useState(true)
    const [loginAlert,setLoginAlert] = React.useState(-1);

    const [formData, updateFormData] = React.useState({
        email: '',
        password: '',
    });

    const [isLoggedIn, setIsLoggedIn] = useState(true)

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
          if (isLoggedIn) {
            window.location.href='/'
          }
        }
      }, [setIsLoggedIn])

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
		var canLogIn=true
		for(var field in formData){
			if(formData[field]===""){
				setLoginAlert(2);
				canLogIn = false;
			}
		}
		if(canLogIn){
				
				
		}
    };

    function MyAlerts(){
        if (loginAlert===1){
         return(
             <Alert style={{marginTop:15}} severity="error">
         User not found.
           </Alert>
         );}
         else if (loginAlert===2){
         return(
             <Alert style={{marginTop:15}} severity="error">
                 Please complete all fields.
           </Alert>
         );}
        else {
          return(
            <React.Fragment></React.Fragment>
          );}
     }


    return (
        <React.Fragment>
            <Header/>
            <Container component="main" maxWidth="xs">
                <div>
                    <Typography component="h1" variant="h5" align="center" marginTop={10}>
                    Login
                    </Typography>
                    <form  noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="standard"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="standard"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        <MyAlerts />
                    {accountCreated ? (<></>):(
                    <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            
                            style={{marginTop:40, background:"#00ADB5"}}
                            onClick={handleLogin}
                        >
                            login
                     </Button>)}
                     </form>
                </div>
                </Container>
        </React.Fragment>
    )
}