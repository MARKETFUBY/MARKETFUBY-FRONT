import client from './client';

//내 상품리뷰
export const getMyReview = async () => {
    try {
        const res = await client.get('/mypage/review');
        return res.data;
    } catch (err) {
        throw err;
    }
};

//내 문의내역
export const getMyInquiry = async () => {
    try {
        const res = await client.get('/mypage/inquiry');
        return res.data;
    } catch (err) {
        throw err;
    }
};

//내 주문내역
export const getMyOrder = async () => {
    try {
        const res = await client.get('/mypage/order');
        return res.data;
    } catch (err) {
        throw err;
    }
};
