// 할인된 가격 구하는 함수
export const getDiscountPrice = (price, discount) => {
    return parseInt((1 - discount / 100) * price);
};
