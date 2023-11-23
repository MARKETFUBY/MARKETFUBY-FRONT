import { React, useEffect, useState } from 'react';
import styled from 'styled-components';
import CartList from './CartList';
import OrderBox from './OrderBox';
import { getCartList } from '../../api/cart';

function CartComponent() {
    const [cartItem, setCartItem] = useState([]);

    console.log('cartItem', cartItem);

    useEffect(() => {
        getCartItem();
    }, []);

    const getCartItem = async () => {
        try {
            const data = await getCartList();
            setCartItem(data);
            console.log('cartItem', cartItem);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Div>
            <div className='cartContentsBox'>
                <CartBox>
                    <CartList
                        roomTempList={cartItem.roomTempList}
                        refrigeList={cartItem.refrigeList}
                        frozenList={cartItem.frozenList}
                    />
                </CartBox>
                <OrderBox
                    totalAmount={cartItem.totalAmount}
                    discountAmount={cartItem.discountAmount}
                    paymentAmount={cartItem.paymentAmount}
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
