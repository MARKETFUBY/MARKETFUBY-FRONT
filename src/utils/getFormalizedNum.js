export const getFormalizedNum = price => {
    let newPrice = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return newPrice;
};
