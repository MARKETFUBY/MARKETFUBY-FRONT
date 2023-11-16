import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';

function CartList({ roomTempList, refrigeList, frozenList }) {
    return (
        <Div>
            <ChoiceBox>
                <div className='choiceSection'>
                    <label className='all'>
                        <Check>
                            <input
                                id='checkall'
                                type='checkbox'
                                // checked=''
                            ></input>
                            <label for='checkall'>✔</label>
                        </Check>
                        <div>전체 선택(2/2)</div>
                        <span></span>
                        <button className='deleteBtn'>선택삭제</button>
                    </label>
                </div>
            </ChoiceBox>
            <div className='cartListDropTab'>
                {/* <div className='cartListIconBox'>
                    {list.icon}
                    <p className='cartListText'>{list.type}</p>
                </div> */}
            </div>
            <div className='cartItemList'>
                <CartItem
                // list={list}
                // key={list.cartId}
                // setCartData={setCartData}
                // cartData={cartData}
                />
                <CartItem
                // list={list}
                // key={list.cartId}
                // setCartData={setCartData}
                // cartData={cartData}
                />
            </div>
            <ChoiceBox>
                <div className='choiceSection'>
                    <label className='all'>
                        <Check>
                            <input
                                id='checkall'
                                type='checkbox'
                                // checked=''
                            ></input>
                            <label for='checkall'>✔</label>
                        </Check>
                        <div>전체 선택(2/2)</div>
                        <span></span>
                        <button className='deleteBtn'>선택삭제</button>
                    </label>
                </div>
            </ChoiceBox>
        </Div>
    );
}

export default CartList;

const Div = styled.div``;

const ChoiceBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 10px 16px 2px;
    font-size: 14px;
    line-height: 26px;
    font-weight: 500;
    border-bottom: 1px solid #333;

    .choiceSection {
        margin: 0;
        padding: 0;
    }

    .all {
        display: flex;
        font-size: 14px;
        line-height: 26px;
        padding: 0px;
        color: rgb(51, 51, 51);
        position: relative;
        display: flex;
        align-items: center;
        font-size: 16px;

        span {
            display: inline-block;
            width: 1px;
            height: 14px;
            background: rgb(221, 221, 221);
            margin: 6px 21px 0px 22px;
            vertical-align: top;
        }
    }

    .deleteBtn {
        border-radius: 0;
        font-size: 14px;
        color: #333;
        background-color: transparent;
        border: none;
        text-align: center;
    }
`;

const Input = styled.input`
    box-sizing: border-box;
    padding: 0;
    overflow: hidden;
`;

const Check = styled.div`
    input[type='checkbox'] {
        display: none;
        margin-right: 12px;
        border-radius: 24px;
    }
    input[type='checkbox'] + label {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        border: 1px solid rgb(221, 221, 221);
        position: relative;
        color: rgb(221, 221, 221);
        margin-right: 12px;
        border-radius: 24px;
    }
    input[id='checkall']:checked + label {
        background-color: rgb(95, 0, 128);
        border: 1px solid rgb(95, 0, 128);
    }
`;
