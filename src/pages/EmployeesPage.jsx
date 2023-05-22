import React from 'react';
import Headerbar from '../components/UI/Navbar/Headerbar';
import EmployeeCont from '../components/EmployeeCont';
import CustomAddBtn from '../components/UI/Buttons/CustomAddBtn';
import AddEmployee from '../components/UI/modals/AddEmployee';

const EmployeesPage = () => {
    return (
        <div>
            <Headerbar/>
            <EmployeeCont/>
            <CustomAddBtn/>
            <AddEmployee/>
        </div>
    );
};

export default EmployeesPage;