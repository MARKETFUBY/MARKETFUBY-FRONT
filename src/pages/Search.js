import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/Common/Header';
import Filter from '../components/Common/Filter';
import SortBar from '../components/Common/SortBar';
import Product from '../components/Common/Product';
import FilterModal from '../components/Common/FilterModal';
import CartModal from '../components/Common/CartModal';
import { ReactComponent as NoResultIcon } from '../assets/icon/no_result.svg';

import { getSearchList } from '../api/search';

const Search = () => {
    const location = useLocation();
    const word = new URLSearchParams(location.search).get('sword');

    // 상품 조회
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

    const getProducts = async (sort, filters) => {
        try {
            const res = await getSearchList(word, sort, filters);
            setProducts(res.productList);
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
        <>
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
            {!!products ? (
                <>
                    <Title>
                        '<span>{word}</span>
                        '에 대한 검색결과
                    </Title>
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
                                    return (
                                        <Product
                                            key={idx}
                                            product={product}
                                            handleModalContent={
                                                handleModalContent
                                            }
                                        />
                                    );
                                })}
                            </ProductList>
                        </Result>
                    </Body>
                </>
            ) : (
                <NoResultWrapper>
                    <NoResultIcon />
                    <span>
                        검색된 상품이 없습니다.
                        <br />
                        다른 검색어를 입력해 주세요.
                    </span>
                </NoResultWrapper>
            )}
        </>
    );
};

export default Search;

const Body = styled.div`
    position: relative;
    display: flex;
    width: 1050px;
    margin: 50px auto 75px;
`;

const Title = styled.div`
    margin-top: 50px;
    text-align: center;
    font-size: 28px;
    line-height: 35px;
    letter-spacing: -0.5px;

    span {
        font-weight: 500;
        color: rgb(95, 0, 128);
    }
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

const NoResultWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 480px;
    justify-content: center;
    align-items: center;
    padding: 100px 0px;
    margin: 50px auto 75px;

    span {
        text-align: center;
        font-size: 16px;
        color: #b5b5b5;
        margin-top: 16px;
        line-height: normal;
    }
`;
