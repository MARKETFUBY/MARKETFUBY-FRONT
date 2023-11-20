import React from 'react';
import styled from 'styled-components';
import CartList from './CartList';
import OrderBox from './OrderBox';
import { cart } from './dummydata';

function CartComponent() {
    return (
        <Div>
            <div className='cartContentsBox'>
                <CartBox>
                    <CartList
                        roomTempList={cart[0].roomTempList}
                        refrigeList={cart[0].refrigeList}
                        frozenList={cart[0].frozenList}
                    />
                </CartBox>
                <OrderBox
                    totalAmount={cart[0].totalAmount}
                    discountAmount={cart[0].discountAmount}
                    paymentAmount={cart[0].paymentAmount}
                />
            </div>
        </Div>
    );
}

export default CartComponent;

const Div = styled.div`
    width: 1050px;
    margin: 0px auto;
    .cartContentsBox {
        display: flex;
        justify-content: space-between;
        margin: 0;
        margin-top: 50px;
    }
`;

const CartBox = styled.div`
    width: 742px;
`;
