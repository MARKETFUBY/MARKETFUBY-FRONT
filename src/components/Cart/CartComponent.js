import { React, useEffect, useState } from 'react';
import styled from 'styled-components';
import CartList from './CartList';
import OrderBox from './OrderBox';
import { getCartList } from '../../api/cart';
import Loading from '../Common/Loading';

function CartComponent() {
    const [cartItem, setCartItem] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCartItem();
    }, []);

    const getCartItem = async () => {
        try {
            const data = await getCartList();
            setCartItem(data);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Div>
            {loading ? (
                <Loading />
            ) : (
                <>
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
                </>
            )}
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
