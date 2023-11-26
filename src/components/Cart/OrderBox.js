import React from 'react';
import styled from 'styled-components';

function OrderBox({ totalAmount, discountAmount, paymentAmount }) {
    return (
        <Div>
            <OrderDiv>
                <Address>
                    <h3 className='addressTitle'>배송지</h3>
                    <div className='userAddress'>
                        <p>서울 마포구 서강로 113-25 A 아파트 102-1004</p>
                        <span>샛별배송</span>
                        <button
                            className='change'
                            type='button'
                            height='36'
                            radius='3'
                        >
                            <span className='btn'>배송지 변경</span>
                        </button>
                    </div>
                </Address>
                <Price>
                    <div className='priceSection'>
                        <span>상품금액</span>
                        <span>{totalAmount}원</span>
                    </div>
                    <div className='priceSection'>
                        <span>상품할인금액</span>
                        <span>{discountAmount}원</span>
                    </div>
                    <div className='priceSection'>
                        <span>배송비</span>
                        <span>0원</span>
                    </div>
                    <div className='priceSection'>
                        <span>결제예상금액</span>
                        <span>
                            <span className='totalPrice'>{paymentAmount}</span>
                            원
                        </span>
                    </div>
                </Price>
                <Btn>
                    <button className='btn' type='button' height='56'>
                        <span>주문하기</span>
                    </button>
                    <ul>
                        <li>쿠폰/적립금은 주문서에서 사용 가능합니다</li>
                        <li>
                            [주문완료] 상태일 경우에만 주문 취소 가능합니다.
                        </li>
                        <li>
                            [마이컬리 &gt; 주문내역 상세페이지] 에서 직접
                            취소하실 수 있습니다.
                        </li>
                        <li>
                            쿠폰, 적립금 사용 금액을 제외한 실 결제 금액
                            기준으로 최종 산정됩니다.
                        </li>
                        <li>
                            상품별로 적립금 지급 기준이 다를 수 있습니다. (상품
                            상세 페이지에서 확인 가능합니다)
                        </li>
                    </ul>
                </Btn>
            </OrderDiv>
        </Div>
    );
}

export default OrderBox;

const Div = styled.div`
    position: relative;
    width: 284px;
    min-height: 942px;
    margin: 0;
`;
const OrderDiv = styled.div`
    position: absolute;
    width: 284px;
    padding-top: 60px;
`;
const Address = styled.div`
    padding: 23px 19px 20px;
    border-width: 1px 1px 0px;
    border-top-style: solid;
    border-right-style: solid;
    border-left-style: solid;
    border-top-color: rgb(242, 242, 242);
    border-right-color: rgb(242, 242, 242);
    border-left-color: rgb(242, 242, 242);

    .addressTitle {
        padding-left: 24px;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        background: url(https://res.kurly.com/pc/service/cart/2007/ico_location.svg)
            0px 50% / 20px 20px no-repeat;
    }
    .userAddress {
        font-size: 16px;
        line-height: 24px;
        color: rgb(51, 51, 51);
    }

    p {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
    }

    span {
        font-size: 12px;
        font-weight: 500;
        color: rgb(95, 0, 128);
        font-size: 14px;
    }

    .change {
        display: block;
        padding: 0px 10px;
        margin-top: 10px;
        text-align: center;
        overflow: hidden;
        width: 100%;
        height: 36px;
        border-radius: 3px;
        color: rgb(95, 0, 128);
        background-color: rgb(255, 255, 255);
        border: 1px solid rgb(95, 0, 128);
    }

    .btn {
        font-size: 12px;
        font-weight: 500;
        color: rgb(95, 0, 128);
    }
`;
const Price = styled.div`
    padding: 19px 18px 18px 20px;
    border: 1px solid rgb(242, 242, 242);
    background-color: rgb(250, 250, 250);

    .priceSection {
        display: flex;
        justify-content: space-between;
        padding-top: 12px;
    }

    .totalPrice {
        font-size: 20px;
        font-weight: 700;
    }
`;
const Btn = styled.div`
    padding-top: 20px;

    .btn {
        display: block;
        padding: 0px 10px;
        text-align: center;
        overflow: hidden;
        width: 100%;
        height: 56px;
        border-radius: 3px;
        color: rgb(255, 255, 255);
        background-color: rgb(95, 0, 128);
        border: 0px none;
        font-weight: 500;
    }

    span {
        font-size: 16px;
        font-weight: 500;
    }

    ul {
        padding: 16px 0px;
    }

    li {
        padding-top: 4px;
        color: rgb(102, 102, 102);
        list-style-type: none;
        font-size: 12px;
        line-height: 16px;
        padding-left: 7px;
    }
`;
