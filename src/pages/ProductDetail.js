import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Common/Header';
import ProductAtf from '../components/ProductDetail/ProductAtf';
import NavBar from '../components/ProductDetail/NavBar';
import ProductDescription from '../components/ProductDetail/ProductDescription';
import ProductReview from '../components/ProductDetail/ProductReview';
import ProductInquiry from '../components/ProductDetail/ProductInquiry';
import Loading from '../components/Common/Loading';
import { getProductDetail } from '../api/product';
import { postHelp, deleteHelp } from '../api/product';
import { postLike, deleteLike } from '../api/product';

const ProductDetail = () => {
    const [productInfo, setProductInfo] = useState();
    const productId = useParams().id;
    const memberId = localStorage.getItem('memberId');

    // 제품 상세 정보 받아오기
    const getInfo = async () => {
        try {
            const res = await getProductDetail(productId, memberId);
            setProductInfo(res);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getInfo();
    }, []);

    // 찜 관련
    // 찜하기 & 찜 취소하기
    const handleLike = async () => {
        try {
            if (!productInfo?.isLiked) {
                const res = await postLike(productId, memberId);
            } else {
                const res = await deleteLike(productId, memberId);
            }
            getInfo();
        } catch (err) {
            console.log(err);
        }
    };

    // 찜하기
    const handleHeartClick = () => {
        handleLike(memberId);
    };

    // 도움돼요 클릭 시
    const handleHelpClick = async (reviewId, isReviewHelp) => {
        try {
            if (!isReviewHelp) {
                const res = await postHelp(reviewId, memberId);
            } else {
                const res = await deleteHelp(reviewId, memberId);
            }
            getInfo();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <Header />
            {!productInfo ? (
                <Loading />
            ) : (
                <>
                    <ProductAtf
                        productInfo={productInfo}
                        handleHeartClick={handleHeartClick}
                    />
                    <NavBar reviewNum={productInfo?.reviewCount} />
                    <ProductDescription
                        productInfoImg={productInfo?.productInfoImg}
                    />
                    <ProductReview
                        reviews={productInfo?.reviews}
                        reviewImg={productInfo?.reviewImages}
                        reviewCount={productInfo?.reviewCount}
                        handleHelpClick={handleHelpClick}
                    />
                    <ProductInquiry inquiries={productInfo?.inquiries} />
                </>
            )}
        </>
    );
};

export default ProductDetail;
