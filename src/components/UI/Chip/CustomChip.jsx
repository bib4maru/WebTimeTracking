import { Chip } from '@mui/material';
import React from 'react';
import CustomLabel from '../Label/CustomLabel';

const CustomChip = (props) => {
    return (
        <Chip title={props.name} variant='outlined' color='secondary' label={<CustomLabel>{props.name}</CustomLabel>} onDelete />
    );
};

export default CustomChip;