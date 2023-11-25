import React from 'react';
import styled from 'styled-components';
import Header from '../components/Common/Header';
import MyKurly from '../components/Common/MyKurly';
import UserInfo from '../components/Common/UserInfo';

function MyPage({ rightSection }) {
    return (
        <Wrapper>
            <Header />
            <UserInfo />
            <MyKurly rightSection={rightSection} />
        </Wrapper>
    );
}

export default MyPage;

const Wrapper = styled.div`
    margin: 0px auto;
    padding-bottom: 80px;
`;
