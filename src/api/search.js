import client from './client';

// 검색결과 제품 조회
export const getSearchList = async (sword, sort, filters) => {
    try {
        let queryString = `sword=${sword}`;
        if (!!sort) {
            queryString += `&sort=${sort}`;
        }
        if (!!filters) {
            queryString += `&filters=${filters}`;
        }

        const res = await client.get(`/search?${queryString}`);
        return res.data;
    } catch (err) {
        throw err;
    }
};
