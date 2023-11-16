import { React, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { getMyOrder } from '../../api/mypage';
import OrderContent from './OrderContent';

function Order() {
    const [orderList, setOrderList] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        getOrder();
    }, []);

    const getOrder = async () => {
        try {
            const getData = await getMyOrder();
            setData(getData);
            setOrderList(getData.orderList);
            console.log(orderList);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <TopBox>
                <div className='title'>
                    <h2>주문 내역</h2>
                    <span>
                        최대 지난 3년간의 주문 내역까지 확인할 수 있어요
                    </span>
                </div>
                <div className='filter'>
                    <div className='filterBox'>
                        <div></div>
                    </div>
                </div>
            </TopBox>
            <Line />
            <OrderBox>
                {orderList.map((data, key) => (
                    <OrderContent data={data} key={key} />
                ))}
            </OrderBox>
        </div>
    );
}

export default Order;

const TopBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    /* padding-bottom: 27px; */
    justify-content: space-between;

    .title {
        display: flex;
        flex-direction: row;
        align-items: center;

        h2 {
            font-weight: 500;
            font-size: 24px;
            color: rgb(51, 51, 51);
            letter-spacing: -0.5px;
            line-height: 48px;
        }

        span {
            padding-left: 11px;
            font-size: 14px;
            letter-spacing: -0.3px;
            color: rgb(153, 153, 153);
            line-height: 20px;
        }
    }

    .filter {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .filterBox {
        width: 157px;
    }
`;

const OrderBox = styled.div`
    padding-top: 20px;
    position: relative;
    height: 100%;
`;

const Line = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    border-bottom: 2px solid rgb(51, 51, 51);
`;
