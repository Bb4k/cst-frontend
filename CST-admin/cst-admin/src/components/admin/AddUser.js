import React from "react";
import { useState } from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

export default function AddUser() {

    const [userCreated, setUserCreated] = useState(false);
    const [RegisterAlert, setRegisterAlert] = useState(-1);

    const initialFormData = Object.freeze({
        first_name: '',
        last_name: '',
        password:'',
        confirm_password: '',
    });

    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            // Trimming any whitespace
            [e.target.name]: e.target.value.trim(),
        });
    };

    function MyAlerts() {
        if (RegisterAlert === 0) {
            return (
                <Alert severity="error" style={{marginTop:20}}>
                    There is already an account corresponding to this email address.
                </Alert>
            );
        }
        else if (RegisterAlert === 1) {
            return (
                <Alert severity="error" style={{marginTop:20}}>
                    Please enter a valid email address.
                </Alert>
            );
        }
        else if (RegisterAlert === 3) {
            return (
                <Alert severity="error" style={{marginTop:20}}>
                    The password must contain at least 8 characters, at least one letter, one number, and one special character.
                </Alert>
            );
        }
        else if (RegisterAlert === 4) {
            return (
                <Alert severity="error" style={{marginTop:20}}>
                    Please fill in all the fields.
                </Alert>
            );
        }
        else if (RegisterAlert === 6) {
            return (
                <Alert severity="error" style={{marginTop:20}}>
                    The two passwords must match.
                </Alert>
            );
        }
        else if (RegisterAlert === 8) {
            return (
                <Alert severity="error" style={{marginTop:20}}>
                    Please enter a valid first name.
                </Alert>
            );
        }
        else if (RegisterAlert === 9) {
            return (
                <Alert severity="error" style={{marginTop:20}}>
                    Please enter a valid last name.
                </Alert>
            );
        }
        else if (RegisterAlert === 10) {
            return (
                <Alert style={{ marginTop: 20 }} severity="success">
                    The account has been successfully created!
                </Alert>
            );
        }
        else {
            return (
                <React.Fragment></React.Fragment>
            );
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        var canSubmit = true;
        var field;
        for (var field in formData) {
            if (formData[field] === "") {
                canSubmit = false
                setRegisterAlert(4);
            }
        }
        if (canSubmit) {
            for (field in formData) {
                if (field === "email") {
                    const emailValidator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (formData[field] === "" || !emailValidator.test(formData[field])) {
                        canSubmit = false;
                        setRegisterAlert(1);
                    }
                }
                else if (field === "password") {
                    if (formData[field] !== formData["confirm_password"]) {
                        canSubmit = false
                        setRegisterAlert(6);
                    }
                    const passwordValidator = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
                    if (formData[field] === "" || !passwordValidator.test(formData[field])) {
                        canSubmit = false;
                        setRegisterAlert(3);
                    }
                }
                else if (field === "first_name" || field === "last_name") {
                    const nameValidator = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
                    if (formData[field] === "" || !nameValidator.test(formData[field])) {
                        canSubmit = false;
                        if (field === "last_name") {
                            setRegisterAlert(8);
                        }
                        else {
                            setRegisterAlert(9);
                        }
                    }
                }
            }
        }
        if (canSubmit) {
            console.log("can submit")
            setUserCreated(true)
            // axiosInstance
            //         .post(`auth-service/account/register/`, {

            //                 firstName: formData.firstName,
            //                 lastName: formData.lastName,
            //                 email: formData.email,
            //                 password: formData.password,
            //                 phoneNumber: formData.phoneNumber,
            //                 address: formData.address

            //         })
            //         .then(() => {
            //             setAccountCreated(true);
            //             setRegisterAlert(10);
            //         })
            //         .catch((function (error) {
            //             if(error.response.status === 500)
            //                 setRegisterAlert(0)
            //         }));
        }

    }


    return (
        <React.Fragment>
            {userCreated ? (<Alert style={{ marginBottom: 15 }} severity="success">
                User created successfully!
            </Alert>) : (<>
                <Container style={{ marginBottom: 30, marginTop: 30 }} component="main" maxWidth="xs">
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <TextField
                                variant="standard"
                                required
                                fullWidth
                                id="firstName1"
                                label="First name"
                                name="first_name"
                                autoComplete="firstName"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                variant="standard"
                                required
                                fullWidth
                                id="lastName1"
                                label="Last name"
                                name="last_name"
                                autoComplete="lastName"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                variant="standard"
                                required
                                fullWidth
                                id="lastemailName1"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                variant="standard"
                                required
                                fullWidth
                                id="password1"
                                label="Password"
                                name="password"
                                type="password"
                                autoComplete="password"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                variant="standard"
                                required
                                fullWidth
                                type="password"
                                id="confirm_password1"
                                label="Confirm password"
                                name="confirm_password"
                                autoComplete="confirm_password"
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    <MyAlerts />
                    {userCreated ? (<></>) : (
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{ marginTop: 30, background: '#00ADB5' }}
                            onClick={handleSubmit}
                        >
                            Register
                        </Button>)}
                </Container>
            </>)}
        </React.Fragment>
    );
}
