import { Fab } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';

const CustomAddBtn = () => {
    return (
        <div className='btn__container'>
            <Fab color='secondary'>
                <AddIcon/>
            </Fab>
        </div>
    );
};

export default CustomAddBtn;