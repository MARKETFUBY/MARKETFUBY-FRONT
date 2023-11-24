import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Common/Header';
import ProductAtf from '../components/ProductDetail/ProductAtf';
import NavBar from '../components/ProductDetail/NavBar';
import ProductDescription from '../components/ProductDetail/ProductDescription';
import ProductReview from '../components/ProductDetail/ProductReview';
import ProductInquiry from '../components/ProductDetail/ProductInquiry';
import { getProductDetail } from '../api/product';

const ProductDetail = () => {
    const [productInfo, setProductInfo] = useState({
        title: '[엑소틱]스리라차 마요',
        subtitle: '매콤고소한 매력의 디핑소스',
        price: 4980,
        discount: 10,
        delivery: '샛별배송',
        seller: '컬리',
        packing: '상온',
        unit: '1병',
        origin: '상품설명/상세보기참조',
        review: {
            total: 26722,
            previewImages: [
                {
                    image: 'image1.jpg',
                },
                {
                    image: 'image1.jpg',
                },
                {
                    image: 'image1.jpg',
                },
            ],
            reviewList: [
                {
                    reviewId: 1,
                    name: '최윤지',
                    level: '화이트',
                    content: '저지방이라 구매합니다~',
                    image: 'image1.jpg',
                },
                {
                    reviewId: 1,
                    name: '최윤지',
                    level: '화이트',
                    content: '저지방이라 구매합니다~',
                    image: 'image1.jpg',
                },
                {
                    reviewId: 1,
                    name: '최윤지',
                    level: '화이트',
                    content: '저지방이라 구매합니다~',
                    image: 'image1.jpg',
                },
            ],
        },
        inquiry: [
            {
                inquiryId: 1,
                title: '잘못배송',
                content: '2리터 시켰는데 1리터가 왔어요ㅜ',
                name: '최윤지',
                date: '2023.09.16',
                status: '답변완료',
            },
            {
                inquiryId: 1,
                title: '잘못배송',
                content: '2리터 시켰는데 1리터가 왔어요ㅜ',
                name: '최윤지',
                date: '2023.09.16',
                status: '답변완료',
            },
        ],
    });
    const { id } = useParams();

    // 🚨 api 배포 미완료로 인한 주석 처리
    // const getInfo = async () => {
    //     try {
    //         const res = await getProductDetail(id);
    //         setProductInfo(res);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    // useEffect(() => {
    //     getInfo();
    // }, []);

    return (
        <>
            <Header />
            <ProductAtf productInfo={productInfo} />
            <NavBar reviewNum={productInfo.review.total} />
            <ProductDescription />
            <ProductReview />
            <ProductInquiry />
        </>
    );
};

export default ProductDetail;
