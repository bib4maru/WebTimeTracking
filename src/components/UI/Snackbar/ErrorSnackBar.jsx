import React, { useState } from 'react';
import {Snackbar,Alert } from '@mui/material';


const ErrorSnackBar = (props) => {
    const [open,setOpen] = useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert  variant="filled" onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {props.message}
            </Alert>
      </Snackbar>
    );
};

export default ErrorSnackBar;