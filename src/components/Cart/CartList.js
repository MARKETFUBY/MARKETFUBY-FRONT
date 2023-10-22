import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';

function CartList() {
    return (
        <Div>
            <ChoiceBox>
                <div className='choiceSection'>
                    <label className='all'>
                        <Input type={'checkbox'} />
                        <span>전체 선택(2/2)</span>
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
                        <Input type={'checkbox'} />
                        <span>전체 선택(2/2)</span>
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
    }

    .deleteBtn {
        border-radius: 0;
        font-size: 14px;
        color: #333;
        background-color: transparent;
        border: none;
        margin-left: 20px;
        text-align: center;
    }
`;
const Input = styled.input`
    box-sizing: border-box;
    padding: 0;

    overflow: hidden;
`;
