import { Avatar, Box, Button, Container, TextField, Typography,CssBaseline,FormControlLabel,Checkbox } from '@mui/material';
import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';


const Authorization = () => {
    const navigate = useNavigate();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Авторизация
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        color='secondary'
                        margin='normal'
                        required
                        fullWidth
                        id='login'
                        label='Логин'
                        name='login'
                        autoComplete="login"
                        autoFocus
                    />
                    <TextField
                        color='secondary'
                        margin='normal'
                        required
                        fullWidth
                        name='password'
                        label='Пароль'
                        type='password'
                        id='password'
                        autoComplete='current-password'
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="secondary" />}
                        label="Запомнить меня"
                    />
                    <Button
                        color='secondary'
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{mt: 3, mb: 2}}
                        onClick={() => navigate("/user")}
                    >
                        Войти
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Authorization;