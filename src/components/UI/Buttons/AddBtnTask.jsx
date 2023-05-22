import { Fab } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useTask } from '../../../store/store';


const AddBtnTask = () => {
    const setStatus = useTask(state => state.setIsClicked);
    const handleClick = () => {
        setStatus(true);
    }
    return (
        <div className='btn__container'>
            <Fab color='secondary' onClick={handleClick} >
                <AddIcon/>
            </Fab>
        </div>
    );
};

export default AddBtnTask;