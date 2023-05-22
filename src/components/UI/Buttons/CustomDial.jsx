import { SpeedDial,SpeedDialAction,SpeedDialIcon } from '@mui/material';
import React from 'react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { useProjects } from '../../../store/store';
const CustomDial = (props) => {
    
    const setStatus = useProjects( (state) => (state.setIsClicked));

    const handleClick = () => {
        setStatus(true);
    }

    return (
        <div className='btn__container'>
            <SpeedDial
            ariaLabel="Adding"
            sx={{'& .MuiFab-primary': { backgroundColor: "#5e35b1", color: '#ffffff',  '&:hover': {backgroundColor: '#5e35b1'} } }}
            icon={<SpeedDialIcon />}
            >
                <SpeedDialAction icon={<PersonAddIcon/>}  tooltipTitle="Добавить сотрудника"  />
                <SpeedDialAction icon={<LibraryAddIcon/>} tooltipTitle={props.action} onClick={handleClick} />
            </SpeedDial>
        </div>
        );
};

export default CustomDial;