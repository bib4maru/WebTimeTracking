import { Box, Dialog, DialogContent, DialogTitle, Grid,TextField,Button } from '@mui/material';
import React, { useState } from 'react';
import { useEmployee } from '../../../store/store';
import { Generatelogin } from '../../../utils/loginGeneration';
import { Generatepassword } from '../../../utils/passwordGeneration';
import { CreateEmployee, getAllEmployees } from '../../../http/employeeAPI';
const AddEmployee = () => {
    const setStatus = useEmployee(state => state.setIsClicked);
    const setEmployees = useEmployee(state => state.setEmployees);
    const [user,setUser] = useState ({first_name: '', last_name: "", patronomyc: ""});
    const [info,setInfo] = useState({login:"", password:""});
    const handleClose = () => {
        setStatus(false);
    }
    const ClickGenerateLogin = (e) => {
        e.preventDefault();
        setInfo({...info, login: Generatelogin(user.first_name,user.last_name,user.patronomyc)});
        console.log(info);
    }
    const ClickGeneratePassword = (e) => {
        e.preventDefault();
        setInfo({...info, password: Generatepassword()});
        console.log(info);
    }
    const ClickAdd = async (e) => {
        e.preventDefault();
        await CreateEmployee(user.first_name,user.last_name,user.patronomyc,info.login,info.password);
        handleClose();
        getAllEmployees().then(data => setEmployees(data));
    }
    return (
        <Dialog open={useEmployee(state => state.isClicked)} onClose={handleClose}>
            <DialogTitle>Добавление сотрудника</DialogTitle>
            <DialogContent>
                <Box component="form" sx={{ mt: 1 }}>
                    <TextField
                        color='secondary'
                        margin='normal'
                        required
                        fullWidth
                        id='first_name'
                        label='Имя сотрудника'
                        name='first_name'
                        value={user.first_name}
                        onChange={e => setUser({...user, first_name: e.target.value})}
                    />
                    <TextField
                        color='secondary'
                        margin='normal'
                        required
                        fullWidth
                        id='last_name'
                        label='Фамилия сотрудника'
                        name='last_name'
                        value={user.last_name}
                        onChange={e => setUser({...user, last_name: e.target.value})}
                    />
                    <TextField
                        color='secondary'
                        margin='normal'
                        required
                        fullWidth
                        id='patronomyc'
                        label='Отчество сотрудника'
                        name='patronomyc'
                        value={user.patronomyc}
                        onChange={e => setUser({...user, patronomyc: e.target.value})}
                    />
                    <TextField
                        color='secondary'
                        margin='normal'
                        disabled
                        fullWidth
                        id='login'
                        label='Логин'
                        name='login'
                        value={info.login}
                    />
                    <TextField
                        color='secondary'
                        margin='normal'
                        disabled
                        fullWidth
                        label='Пароль'
                        value={info.password}
                    />
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Button
                                color='secondary'
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3  }}
                                onClick={ClickGenerateLogin}
                            >
                                Генерация логина
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                color='secondary'
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3 }}
                                onClick={ClickGeneratePassword}
                            >
                                Генерация пароля
                            </Button>
                        </Grid>
                    </Grid>
                    <Button
                        color='secondary'
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={ClickAdd}
                    >
                        Добавить сотрудника
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default AddEmployee;