import React from 'react';
import styled from 'styled-components';
import CartList from './CartList';
import OrderBox from './OrderBox';

function CartComponent() {
    return (
        <Div>
            <div className='cartContentsBox'>
                <CartBox>
                    <CartList />
                </CartBox>
                <OrderBox />
            </div>
        </Div>
    );
}

export default CartComponent;

const Div = styled.div`
    .cartContentsBox {
        display: flex;
        justify-content: space-between;
        margin: 0;
        width: 1050px;
        margin-top: 50px;

        
    }
`;

const CartBox = styled.div`
    width: 742px;
`;
