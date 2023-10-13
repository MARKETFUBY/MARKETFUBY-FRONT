import React from 'react';
import Header from '../components/Common/Header';
import MyKurly from '../components/Common/MyKurly';
import UserInfo from '../components/Common/UserInfo';

function MyPage() {
    return (
        <div>
            <Header />
            <UserInfo />
            <MyKurly />
        </div>
    );
}

export default MyPage;
