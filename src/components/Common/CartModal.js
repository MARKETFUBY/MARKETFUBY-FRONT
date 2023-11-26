// 장바구니 담기 클릭 시 나타날 모달
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import top from '../../assets/icon/cart_modal.png';

// 이름, 상품 이미지, 이미 장바구니에 있는 상품인지 props로 전달
const CartModal = ({ name, productImg, alreadyInCart }) => {
    const [display, setDisplay] = useState(true);

    // 5초 뒤에 사라지도록 설정
    useEffect(() => {
        const timer = setTimeout(() => setDisplay(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Wrapper display={display.toString()}>
            <div>
                <img src={top} />
                <Content>
                    <img className='preview' src={productImg} />
                    <div>
                        <Name>{name}</Name>
                        <Description>장바구니에 상품을 담았습니다.</Description>
                        {alreadyInCart && (
                            <Description>
                                이미 담은 상품의 수량을 추가했습니다.
                            </Description>
                        )}
                    </div>
                </Content>
            </div>
        </Wrapper>
    );
};

export default CartModal;

const Wrapper = styled.div`
    display: ${props => (props.display === 'true' ? 'block' : 'none')};
    z-index: 2000;
    position: absolute;
    max-width: 346px;
    top: 85px;
    right: 50%;
    transform: translateX(525px);

    & > div {
        position: relative;
        max-width: 346px;
        padding: 20px 20px 18px;
        margin: 16px -5px 0px 0px !important;
        background-color: #fff;
        border: solid 1px #ddd;
        //transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

        & > img {
            position: absolute;
            right: 13px;
            top: -14px;
            width: 20px;
            height: 14px;
        }
    }
`;

const Content = styled.div`
    max-width: 346px;
    display: flex;

    .preview {
        width: 46px;
        height: 60px;
        object-fit: cover;
    }

    div {
        display: flex;
        flex-direction: column;
        align-self: center;
        width: 260px;
        padding-left: 20px;

        span {
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
        }
    }
`;

const Name = styled.span`
    overflow: hidden;
    width: 95%;
    padding-bottom: 4px;
    color: #999;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const Description = styled.span`
    color: #333;
`;
