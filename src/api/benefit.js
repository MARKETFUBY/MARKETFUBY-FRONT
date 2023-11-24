import client from './client';

export const getBenefitList = async () => {
    try {
        const res = await client.get('/market-benefit');
        return res.data;
    } catch (error) {
        throw error;
    }
};
