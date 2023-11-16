import React from 'react';
import styled from 'styled-components';

function OrderContent({ data }) {
    console.log('data', data);
    return (
        <Div>
            <div className='top'>
                <span>{data.date}</span>
                <a>주문내역 상세보기</a>
            </div>
            <div className='main'>
                <div className='leftContent'>
                    <img />
                    <div className='content'>
                        <dl>
                            <dt>상품명</dt>
                            <dd>{data.title}</dd>
                        </dl>
                        <dl>
                            <dt>주문번호</dt>
                            <dd>{data.orderId}</dd>
                        </dl>
                        <dl>
                            <dt>결제방법</dt>
                            <dd>{data.paymentType}</dd>
                        </dl>
                        <dl>
                            <dt>결제금액</dt>
                            <dd>{data.price}</dd>
                        </dl>
                    </div>
                </div>
                <div className='rightContent'></div>
            </div>
        </Div>
    );
}

export default OrderContent;

const Div = styled.div`
    width: 100%;
    margin-bottom: 14px;

    .top {
        display: flex;
        padding: 8px 0px 13px;
        justify-content: space-between;
        border-bottom: 1px solid rgb(221, 223, 225);
    }

    .main {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 14px 0px 16px;
    }

    .leftContent {
        display: flex;
        flex-direction: row;
        align-items: center;

        img {
            width: 60px;
            height: 78px;
            margin-right: 20px;
            background-color: rgb(245, 245, 245);
        }
    }

    .rightContent {
        display: flex;
        align-items: center;
    }

    .content {
        display: flex;
        flex-direction: column;

        dl {
            margin: 0;
            display: flex;
            padding-top: 6px;
            flex-direction: row;
            color: rgb(0, 0, 0);
            line-height: 20px;
        }

        dt {
            width: 50px;
            line-height: 1.58;
            margin-right: 10px;
            font-size: 12px;
            color: rgb(51, 51, 51);
        }

        dd {
            flex: 1 1 0%;
            font-weight: 500;
            color: rgb(51, 51, 51);
            line-height: 1.36;
            display: -webkit-box;
            overflow: hidden;
            word-break: break-all;
            white-space: normal;
        }
    }
`;
