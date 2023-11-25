import client from './client';

//내 장바구니 보기
export const getCartList = async () => {
    try {
        const res = await client.get('/cart');
        return res.data;
    } catch (err) {
        throw err;
    }
};

//장바구니 물품 수량 변경
export const putCartList = async (itemKey, count) => {
    try {
        const res = await client.put(`/cart`, {
            cartProductId: itemKey,
            count: count,
        });
        return res.data;
    } catch (err) {
        throw err;
    }
};

//장바구니 물품 삭제
export const deleteCartList = async itemKey => {
    try {
        const res = await client.delete(`/cart`, {
            data: { cartProductId: itemKey },
        });
        return res.data;
    } catch (err) {
        throw err;
    }
};

// 장바구니 담기
export const postCartItem = async (productId, count) => {
    try {
        const res = await client.post('/cart', {
            productId: productId,
            count: count,
        });
        return res.data;
    } catch (err) {
        throw err;
    }
};
