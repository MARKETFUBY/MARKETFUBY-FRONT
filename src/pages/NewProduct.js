import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Common/Header';
import Title from '../components/Common/Title';
import banner from '../assets/banner/new_product_banner.png';
import Filter from '../components/Common/Filter';
import SortBar from '../components/Common/SortBar';
import Product from '../components/Common/Product';
import FilterModal from '../components/Common/FilterModal';
import CartModal from '../components/Common/CartModal';

import { getProductList } from '../api/product';

const NewProduct = () => {
    const [products, setProducts] = useState(); // 상품 목록
    const [categories, setCategories] = useState(); // 카테고리 목록
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [clickedSort, setClickedSort] = useState(0);

    const filterList = useSelector(state => {
        return state.filter;
    }).filter(item => item.clicked);
    const selectedFilter = filterList.length > 0 ? filterList[0].id : null;

    // 모달 열기 함수
    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    // 모달 닫기 버튼 클릭 시 실행할 함수
    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    // 상품 목록 받아오기
    const getProducts = async () => {
        try {
            const res = await getProductList(
                'market-newproduct',
                clickedSort,
                selectedFilter,
            );
            setProducts(res.productList);
            setCategories(res.categoryList);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getProducts(clickedSort, selectedFilter);
    }, [clickedSort, selectedFilter]);

    // 정렬된 상품 목록 받아오기
    const sortProducts = sort => {
        setClickedSort(sort);
    };

    // 장바구니 모달 관련
    const [cartModalOpen, setCartModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState();

    const handleModalContent = (name, productImg, alreadyInCart) => {
        setCartModalOpen(true);
        setModalContent({
            name: name,
            productImg: productImg,
            alreadyInCart: alreadyInCart,
        });
    };

    // 5초 뒤에 장바구니 모달 표시 여부 초기화
    useEffect(() => {
        if (cartModalOpen) {
            const timer = setTimeout(() => setCartModalOpen(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [cartModalOpen]);

    return (
        <Wrapper>
            {cartModalOpen && (
                <CartModal
                    name={modalContent.name}
                    productImg={modalContent.productImg}
                    alreadyInCart={modalContent.alreadyInCart}
                />
            )}
            {isModalOpen && (
                <FilterModal
                    onClick={handleModalClose}
                    categories={categories}
                ></FilterModal>
            )}
            <Header />
            <img src={banner} />
            <Title text='신상품' />
            <Body>
                <Filter
                    handleModalOpen={handleModalOpen}
                    categories={categories}
                />
                <Result>
                    <SortBar
                        count={products?.length}
                        sortProducts={sortProducts}
                    />
                    <ProductList>
                        {products?.map((product, idx) => {
                            return <Product key={idx} product={product} />;
                        })}
                    </ProductList>
                </Result>
            </Body>
        </Wrapper>
    );
};

export default NewProduct;

const Wrapper = styled.div`
    width: 1050px;
    margin: 0 auto;

    & img {
        cursor: pointer;
    }
`;

const Body = styled.div`
    display: flex;
    width: 1050px;
    margin: 50px auto 75px;
`;

const Result = styled.div`
    width: 100%;
`;

const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 249px);
    gap: 31px 18px;
    width: 100%;
`;
