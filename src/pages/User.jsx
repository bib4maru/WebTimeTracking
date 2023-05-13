import React from 'react';
import UserHeaderbar from '../components/UI/Navbar/UserHeaderbar';
import UserStatistic from '../components/UserStatistic';
import Headerbar from '../components/UI/Navbar/Headerbar';

const User = () => {
    return (
        <div>
            <UserHeaderbar/>
            {/* <Headerbar/> */}
            <UserStatistic/>
        </div>
    );
};

export default User;