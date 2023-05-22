import { Fab } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useEmployee } from '../../../store/store';

const CustomAddBtn = () => {
    const setStatus = useEmployee(state => state.setIsClicked);
    const handleClick = () => {
        setStatus(true);
    }
    return (
        <div className='btn__container'>
            <Fab color='secondary'onClick={handleClick} >
                <AddIcon/>
            </Fab>
        </div>
    );
};

export default CustomAddBtn;