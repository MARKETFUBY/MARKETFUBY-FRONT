import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function MyKurly({ rightSection }) {
    const navigate = useNavigate();

    const clickOrder = () => {
        navigate('/mypage/order');
    };

    const clickReview = () => {
        navigate('/mypage/review');
    };

    const clickInquiry = () => {
        navigate('/mypage/inquiry');
    };

    return (
        <Wrapper>
            <LeftBox>
                <div className='title'>마이 컬리</div>
                <ul>
                    <li onClick={clickOrder}>
                        <div className='liTitle'>
                            주문내역<div>></div>
                        </div>
                    </li>
                    <li>
                        <div className='liTitle'>
                            선물내역<div>></div>
                        </div>
                    </li>
                    <li>
                        <div className='liTitle'>
                            찜한상품<div>></div>
                        </div>
                    </li>
                    <li>
                        <div className='liTitle'>
                            배송지관리<div>></div>
                        </div>
                    </li>
                    <li onClick={clickReview}>
                        <div className='liTitle'>
                            상품후기<div>></div>
                        </div>
                    </li>
                    <li>
                        <div className='liTitle'>
                            결제수단 컬리페이<div>></div>
                        </div>
                    </li>
                    <li onClick={clickInquiry}>
                        <div className='liTitle'>
                            상품문의<div>></div>
                        </div>
                    </li>
                    <li>
                        <div className='liTitle'>
                            적립금 컬리캐시<div>></div>
                        </div>
                    </li>
                    <li>
                        <div className='liTitle'>
                            쿠폰<div>></div>
                        </div>
                    </li>
                    <li>
                        <div className='liTitle'>
                            나의 컬리스타일<div>></div>
                        </div>
                    </li>
                    <li>
                        <div className='liTitle'>
                            개인정보수정<div>></div>
                        </div>
                    </li>
                </ul>
            </LeftBox>
            <RightBox>{rightSection}</RightBox>
        </Wrapper>
    );
}

export default MyKurly;

const Wrapper = styled.div`
    display: flex;
    width: 1050px;
    padding: 50px 0px 80px;
    margin: 0px auto;
    flex-direction: row;
    justify-content: space-between;
`;

const LeftBox = styled.div`
    width: 200px;

    .title {
        height: 75px;
        padding: 5px 0px 5px 1px;
        font-weight: 500;
        font-size: 28px;
        line-height: 35px;
        color: rgb(51, 51, 51);
        letter-spacing: -1px;
    }

    ul {
        margin: 0;
        padding: 0;
        border: 1px solid rgb(242, 242, 242);
        list-style: none;
    }

    .liTitle {
        cursor: pointer;
        border-bottom: 1px solid rgb(242, 242, 242);
        padding: 15px 13px 15px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 19px;
        letter-spacing: -0.3px;
        font-size: 14px;
        color: rgb(102, 102, 102);
    }
`;
const RightBox = styled.div`
    width: 820px;
`;
