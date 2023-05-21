import React, { useState } from 'react';
import { Avatar, Box, Button, Container, TextField, Typography,CssBaseline,Grid,Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import { registration } from '../http/userAPI';

const Registration = () => {
  const signUp = async (e) => {
    try {
      e.preventDefault();
      const response = await registration(fname,lastname,patronomyc,authlogin,password,company);
      console.log(response);
      navigate("/");
    } catch (e) {
      alert(e.response.data.message);
    }
  }


  const [company,Setcompany] = useState(''),
        [fname,Setfname] = useState(''),
        [lastname,Setlastname] = useState(''),
        [patronomyc,Setpatronomyc] = useState(''),
        [authlogin,setLogin] = useState(""),
        [password,setPassword] = useState("");
  const navigate = useNavigate();

    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Регистрация
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
              <TextField
                  color='secondary'
                  required
                  fullWidth
                  id="company"
                  label="Название компании"
                  name="company"
                  autoFocus
                  value={company}
                  onChange={e => Setcompany(e.target.value) }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  color='secondary'
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Имя"
                  value={fname}
                  onChange={e => Setfname(e.target.value) }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  color='secondary'
                  required
                  fullWidth
                  id="lastName"
                  label="Фамилия"
                  name="lastName"
                  value={lastname}
                  onChange={e => Setlastname(e.target.value) }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  color='secondary'
                  required
                  fullWidth
                  id="patronomyc"
                  label="Отчество"
                  name="patronomyc"
                  value={patronomyc}
                  onChange={e =>Setpatronomyc(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  color='secondary'
                  required
                  fullWidth
                  id="login"
                  label="Логин"
                  name="login"
                  value={authlogin}
                  onChange={e =>setLogin(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  color='secondary'
                  required
                  fullWidth
                  name="password"
                  label="Пароль"
                  type="password"
                  id="password"
                  value={password}
                  onChange={e =>setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              color='secondary'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={signUp}
            >
              Зарегистрироваться
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="" variant="body2" color='secondary' 
                onClick={(e) => {e.preventDefault(); navigate("/")}}>
                  Уже есть аккаунт? Войти
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    );
};

export default Registration;