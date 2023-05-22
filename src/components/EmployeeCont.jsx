import { Container,Grid,Typography,Button } from '@mui/material';
import React from 'react';
import EmployeeAutoComplete from './EmployeeAutoComplete';
const EmployeeCont = () => {
    
    return (
        <Container
            sx={{
                border: "2px solid #5e35b1",
                borderRadius: "6px",
                marginTop: 12,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "sm",
                paddingBottom: 7,
                paddingTop: 7,
            }}
        >
            <Typography variant='h4'>Сотрудники</Typography>
            {/* <EmployeeList/> */}
            <EmployeeAutoComplete/>
            <Grid container spacing={2} sx={{ width: 600 }} >
                <Grid item xs={12} sm={6}>
                    <Button
                        color='secondary'
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Просмотр статистики
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button
                        color='secondary'
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Удалить сотрудника
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default EmployeeCont;