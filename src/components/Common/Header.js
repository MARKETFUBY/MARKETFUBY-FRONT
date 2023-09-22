import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Wrapper>
            <NavUser>
                <Text purple>회원가입</Text>
                <Space />
                <Text>로그인</Text>
                <Space />
                <Text>
                    고객센터
                    <PlusBtn />
                </Text>
            </NavUser>
        </Wrapper>
    );
}

export default Header;

const Wrapper = styled.div`
    position: relative;
    width: 1050px;
    height: 100px;
    margin: 0px auto;
    letter-spacing: -0.3px;
`;

const NavUser = styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: 20;
    display: flex;
    /* -webkit-box-align: center; */
    align-items: center;
    font-size: 12px;
`;

const Text = styled.div`
    display: block;
    cursor: pointer;
    color: ${props => (props.purple ? 'purple' : 'black')};
`;

const Space = styled.div`
    width: 1px;
    height: 13px;
    margin: 0px 12px;
    background-color: rgb(217, 217, 217);
`;

const PlusBtn = styled.span`
    width: 8px;
    height: 5px;
    background-image: url(https://res.kurly.com/pc/ico/1908/ico_down_16x10.png);
    background-size: cover;
    background-position: center center;
    display: inline-block;
    margin-left: 5px;
    margin-bottom: 1px;
`;
