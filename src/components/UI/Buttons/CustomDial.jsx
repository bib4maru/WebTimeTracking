import { SpeedDial,SpeedDialAction,SpeedDialIcon } from '@mui/material';
import React from 'react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

const CustomDial = (props) => {
    return (
        <div className='btn__container'>
            <SpeedDial
            ariaLabel="Adding"
            sx={{'& .MuiFab-primary': { backgroundColor: "#5e35b1", color: '#ffffff',  '&:hover': {backgroundColor: '#5e35b1'} } }}
            icon={<SpeedDialIcon />}
            >
                <SpeedDialAction icon={<PersonAddIcon/>}  tooltipTitle="Добавить сотрудника" />
                <SpeedDialAction icon={<LibraryAddIcon/>} tooltipTitle={props.action} />
            </SpeedDial>
        </div>
        );
};

export default CustomDial;