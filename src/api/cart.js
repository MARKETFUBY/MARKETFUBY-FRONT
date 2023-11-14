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
export const putCartList = async () => {
    try {
        const res = await client.put('/cart');
        return res.data;
    } catch (err) {
        throw err;
    }
};
