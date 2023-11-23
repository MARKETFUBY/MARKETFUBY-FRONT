import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { LogoutAPI } from '../../api/member';

function UserMenu({ setOpenUserMenu }) {
    const ClickLogout = async () => {
        const refreshToken = localStorage.getItem('refreshToken');
        try {
            LogoutAPI(refreshToken);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Div onMouseLeave={() => setOpenUserMenu(false)}>
            <div className='menuItem'>주문 내역</div>
            <div className='menuItem'>선물 내역</div>
            <div className='menuItem'>찜한상품</div>
            <div className='menuItem'>배송지관리</div>
            <div className='menuItem'>상품후기</div>
            <div className='menuItem'>결제수단 컬리페이</div>
            <div className='menuItem'>상품문의</div>
            <div className='menuItem'>적립금 컬리캐시</div>
            <div className='menuItem'>쿠폰</div>
            <div className='menuItem'>개인정보수정</div>
            <div className='menuItem'>나의 컬리스타일</div>
            <div className='menuItem' onClick={ClickLogout}>
                로그아웃
            </div>
        </Div>
    );
}

export default UserMenu;

const Div = styled.div`
    position: absolute;
    right: 0px;
    top: 34px;
    width: 130px;
    padding: 3px 9px;
    border: 1px solid rgb(221, 221, 221);
    background-color: rgb(255, 255, 255);

    .menuItem {
        display: block;
        height: 24px;
        line-height: 24px;
        cursor: pointer;
    }
`;
