import React from 'react';
import Header from '../components/Common/Header';
import MyKurly from '../components/Common/MyKurly';
import UserInfo from '../components/Common/UserInfo';

function MyPage({ rightSection }) {
    return (
        <div>
            <Header />
            <UserInfo />
            <MyKurly rightSection={rightSection} />
        </div>
    );
}

export default MyPage;
