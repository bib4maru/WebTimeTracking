import React from 'react';
import Headerbar from '../components/UI/Navbar/Headerbar';
import EmployeeCont from '../components/EmployeeCont';
import CustomAddBtn from '../components/UI/Buttons/CustomAddBtn';

const EmployeesPage = () => {
    return (
        <div>
            <Headerbar/>
            <EmployeeCont/>
            <CustomAddBtn/>
        </div>
    );
};

export default EmployeesPage;