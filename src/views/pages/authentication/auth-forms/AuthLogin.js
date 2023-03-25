/*eslint-disable*/
import { useState } from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Alert,
    Box,
    Button,
    Checkbox,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    TextField,
    Typography,
    useMediaQuery
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Google from 'assets/images/icons/social-google.svg';
import { useNavigate } from 'react-router';

// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = ({ ...others }) => {
    const theme = useTheme();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "", password: ""
    });
    const [validatePassword, setValidatePassword] = useState(false)


    let name, value
    const handle = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }


    const handleSubmit = async () => {
        //     event.preventDefault();
        // console.log(user);

        await fetch('http://122.166.251.167/Identity.API/Authentication/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((response) =>
                response.json()
            ).then((r) =>
                navigate("/")
            ).catch((e) => {
                setValidatePassword(true)
            }
            )
    }


    return (
        <>
            <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid item xs={12}>

                </Grid>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex'
                        }}
                    >
                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
                    </Box>
                </Grid>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1">Sign in with User Id</Typography>
                    </Box>
                </Grid>
            </Grid>

            <Box noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="username"
                    name="username"
                    value={user.username}
                    autoComplete="username"
                    autoFocus
                    onChange={handle}
                />

                {validatePassword ?
                    <>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            value={user.password}
                            label="Password"
                            // type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handle}
                            error
                        />
                        <Alert severity="error">This is an error alert — Invalid Password!</Alert>
                    </>
                    :
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        value={user.password}
                        label="Password"
                        // type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handle}
                    />
                }
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Button
                    sx={{ mt: 2 }}
                    disableElevation
                    // disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="secondary"
                    onClick={handleSubmit}
                >
                    Sign In
                </Button>

            </Box>

        </>
    );
};

export default FirebaseLogin;
