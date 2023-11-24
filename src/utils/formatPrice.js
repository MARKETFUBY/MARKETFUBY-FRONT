export const formatPrice = price => {
    let newPrice = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return newPrice;
};
