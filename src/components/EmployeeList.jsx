import { Box, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';
import { FixedSizeList } from 'react-window';


function renderRow(props) {
    const {index, style} =props ;

    return (
        <ListItem style={style} key={index} component="div" disablePadding >
            <ListItemButton>
                <ListItemText primary={`Сотрудник ${index+1}`} />
            </ListItemButton>
        </ListItem>
    );
}

const EmployeeList = () => {
    return (
        <Box
            sx={{ width: '100%', height: 400, maxWidth: 460, mt: 3}}
        >
            <FixedSizeList
                height={400}
                itemSize={46}
                itemCount={200}
                overscanCount={5}
            >
                {renderRow}
            </FixedSizeList>
        </Box>
    );
};

export default EmployeeList;