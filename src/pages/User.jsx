import React from 'react';
import UserHeaderbar from '../components/UI/Navbar/UserHeaderbar';
import UserStatistic from '../components/UserStatistic';
import { useUser } from '../store/store';
import Headerbar from '../components/UI/Navbar/Headerbar';

const User = () => {
    const role = useUser(state => state.role);
    return (
        <div>
            {role === "Руководитель" ? <Headerbar/> : <UserHeaderbar/>}
            <UserStatistic/>
        </div>
    );
};

export default User;