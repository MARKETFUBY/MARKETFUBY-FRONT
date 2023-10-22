import React from 'react';
import styled from 'styled-components';

function CartItem() {
    return (
        <Div>
            <a className='img'>
                <span className='itemImg'></span>
            </a>
            <div className='name'>[청산바다] 완도 전복 250g(2마리) (생물)</div>
            <div className='count'>
                <MinusBtn />
                <div className='itemCount'>1</div>
                <PlusBtn />
            </div>
            <div className='price'>
                <span className='itemPrice'>31,000원</span>
            </div>
        </Div>
    );
}

export default CartItem;

const Div = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    padding: 20px 0px;
    margin: 0;

    .img {
        display: inline-block;
        width: 60px;
        height: 78px;
        margin-right: 20px;
    }

    .itemImg {
        display: block;
        height: 100%;
        background-image: url(https://img-cf.kurly.com/cdn-cgi/image/width=120,height=156,fit=crop,quality=85/shop/data/goods/1608789180659l0.jpg);
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
    }
    .name {
        display: flex;
        flex-direction: column;
        width: 345px;
        margin-right: 20px;
        overflow: hidden;
        white-space: nowrap;
        word-break: break-all;
    }
    .count {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        border: 1px solid rgb(221, 223, 225);
        width: 88px;
        border-radius: 3px;
    }
    .itemCount {
        font-weight: 400;
        display: inline-flex;
        overflow: hidden;
        white-space: nowrap;
        justify-content: center;
        font-size: 14px;
        font-weight: 600;
        color: rgb(51, 51, 51);
        text-align: center;
        width: 31px;
        height: 28px;
        line-height: 28px;
    }
    .price {
        display: flex;
        flex-direction: column;
        width: 127px;
        text-align: right;
    }
    .itemPrice {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: rgb(51, 51, 51);
    }
`;

const MinusBtn = styled.button`
    display: inline-flex;
    width: 28px;
    height: 28px;
    border: none;
    font-size: 1px;
    color: transparent;
    background-size: cover;
    background-color: transparent;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iI0RERCIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=);
    vertical-align: top;
`;
const PlusBtn = styled.button`
    display: inline-flex;
    width: 28px;
    height: 28px;
    border: none;
    font-size: 1px;
    color: transparent;
    background-size: cover;
    background-color: transparent;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNiAxMHY0aDR2MmgtNHY0aC0ydi00aC00di0yaDR2LTRoMnoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgo8L3N2Zz4K);
    vertical-align: top;
`;
