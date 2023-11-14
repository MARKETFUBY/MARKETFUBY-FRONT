import client from './client';

//메인페이지 리스트
export const getMainList = async () => {
    try {
        const res = await client.get('/main');
        return res.data;
    } catch (err) {
        throw err;
    }
};
