import client from './client';

// 제품 목록 조회
/*
 * 1. page
 * 신상품: '/market-newproduct'
 * 베스트 : '/market-best'
 * 알뜰쇼핑 : '/market-time-sales'
 * 2. sort (정렬)
 * 0: 추천순(기본), 1: 신상품순, 2: 판매량순, 3: 혜택순, 4: 낮은 가격순, 5: 높은 가격순
 * 3. filters(카테고리 필터링) - 선택 🟢 (없으면 null)
 * ex) 채소: 2, 과일/견과/쌀: 3
 */
export const getProductList = async (page, sort, filters) => {
    try {
        let queryString = `sort=${sort}`;
        if (!!filters) {
            queryString += `&filters=${filters}`;
        }

        const res = await client.get(`/collections/${page}?${queryString}`);
        return res.data;
    } catch (error) {
        throw error;
    }
};

// 제품 상세 정보 조회
export const getProductDetail = async productId => {
    try {
        const res = await client.get(`/goods/${productId}`);
        return res.data;
    } catch (error) {
        throw error;
    }
};

// 찜하기
export const postLike = async (productId, memberId) => {
    try {
        const res = await client.post(`goods/${productId}/likes`, {
            data: { memberId: memberId },
        });
        return res;
    } catch (err) {
        throw err;
    }
};

// 찜 취소하기
export const deleteLike = async (productId, memberId) => {
    try {
        const res = await client.delete(`goods/${productId}/likes`, {
            data: { memberId: memberId },
        });
        return res;
    } catch (err) {
        throw err;
    }
};

// 후기 도움돼요
export const postHelp = async (reviewId, memberId) => {
    try {
        const res = await client.post(`goods/reviews/${reviewId}/helps`, {
            memberId: memberId,
        });
        return res;
    } catch (err) {
        throw err;
    }
};

// 후기 도움돼요 취소하기
export const deleteHelp = async (reviewId, memberId) => {
    try {
        const res = await client.delete(`goods/reviews/${reviewId}/helps`, {
            memberId: memberId,
        });
        return res;
    } catch (err) {
        throw err;
    }
};
