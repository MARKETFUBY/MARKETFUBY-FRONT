import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Common/Header';
import ProductAtf from '../components/ProductDetail/ProductAtf';
import NavBar from '../components/ProductDetail/NavBar';
import ProductDescription from '../components/ProductDetail/ProductDescription';
import ProductReview from '../components/ProductDetail/ProductReview';
import ProductInquiry from '../components/ProductDetail/ProductInquiry';
import { getProductDetail } from '../api/product';
import { postHelp, deleteHelp } from '../api/product';

const ProductDetail = () => {
    const [productInfo, setProductInfo] = useState();
    const { id } = useParams();
    const memberId = localStorage.getItem('memberId');

    // 제품 상세 정보 받아오기
    const getInfo = async () => {
        try {
            const res = await getProductDetail(id, memberId);
            setProductInfo(res);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getInfo();
    }, []);

    // 도움돼요 클릭 시
    const handleHelpClick = async () => {
        try {
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <Header />
            <ProductAtf productInfo={productInfo} />
            <NavBar reviewNum={productInfo?.reviewCount} />
            <ProductDescription productInfoImg={productInfo?.productInfoImg} />
            <ProductReview
                reviews={productInfo?.reviews}
                reviewImg={productInfo?.reviewImages}
                reviewCount={productInfo?.reviewCount}
            />
            <ProductInquiry inquiries={productInfo?.inquiries} />
        </>
    );
};

export default ProductDetail;
