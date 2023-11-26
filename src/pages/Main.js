import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/Common/Header';
import styled from 'styled-components';
import Slide from '../components/Common/Slide';
import RecommendationSection from '../components/Main/RecommendationSection';
import CartModal from '../components/Common/CartModal';

function Main() {
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
        <Div>
            {cartModalOpen && (
                <CartModal
                    name={modalContent.name}
                    productImg={modalContent.productImg}
                    alreadyInCart={modalContent.alreadyInCart}
                />
            )}
            <Header />
            <Slide />
            <RecommendationSection handleModalContent={handleModalContent} />
        </Div>
    );
}

export default Main;

const Div = styled.div`
    margin: 0px auto;
    padding-bottom: 80px;
`;
