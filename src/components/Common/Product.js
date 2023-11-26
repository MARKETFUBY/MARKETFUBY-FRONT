import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as CartIcon } from '../../assets/icon/cart.svg';
import { ReactComponent as CommentIcon } from '../../assets/icon/comment.svg';
import { getCartList, postCartItem, putCartList } from '../../api/cart';
import { getDiscountPrice } from '../../utils/getDiscountPrice';
import { getFormalizedNum } from '../../utils/getFormalizedNum';

const Product = ({ product, handleModalContent }) => {
    const nav = useNavigate();

    const CART_CATEGORY = ['roomTempList', 'refrigeList', 'frozenList'];
    const [cartList, setCartList] = useState();

    // 장바구니 목록 저장할 함수
    const getCartItems = async () => {
        try {
            const cartItems = await getCartList();
            setCartList(cartItems);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getCartItems();
    }, []);

    // 장바구니에 담기
    const putInCart = async () => {
        try {
            const res = postCartItem(product.productId, 1);
            handleModalContent(product.title, product.image, false);
            getCartItems();
        } catch (err) {
            console.log(err);
        }
    };

    // 장바구니에 수량 추가
    const addCartCnt = async (cartProductId, cnt) => {
        try {
            const res = putCartList(cartProductId, cnt);
            handleModalContent(product.title, product.image, true);
            getCartItems();
        } catch (err) {
            console.log(err);
        }
    };

    // 담기 버튼 클릭 시 실행할 함수
    const handleCartClick = () => {
        let sameProduct = [];
        for (let category of CART_CATEGORY) {
            sameProduct = cartList[category]?.filter(
                item => item.productName === product.title,
            );

            if (sameProduct?.length > 0) {
                break;
            }
        }

        // 장바구니에 없는 상품일 경우, 장바구니에 담기
        if (sameProduct.length === 0) {
            putInCart();
        }
        // 장바구니에 있는 제품일 경우, 상품 개수 1 증가
        else {
            addCartCnt(sameProduct[0].cartProductId, sameProduct[0].count + 1);
        }
    };

    return (
        <Wrapper>
            <img
                src={product.image}
                onClick={() => nav(`/goods/${product.productId}`)}
            />
            <CartBtn onClick={handleCartClick}>
                <CartIcon />
                담기
            </CartBtn>
            <TextWrapper onClick={() => nav(`/goods/${product.productId}`)}>
                <DeliveryText>{product.delivery}</DeliveryText>
                <ProductName>{product.title}</ProductName>
                <ProductDescription>{product.subtitle}</ProductDescription>
                <PriceWrapper>
                    <Price className={product.discount > 0 && 'discounted'}>
                        {getFormalizedNum(product.price)}원
                    </Price>
                    {product.discount > 0 && (
                        <DiscountWrapper>
                            <Price className='discount-rate'>
                                {product.discount}%
                            </Price>
                            <Price>
                                {getFormalizedNum(
                                    getDiscountPrice(
                                        product.price,
                                        product.discount,
                                    ),
                                )}
                                원
                            </Price>
                        </DiscountWrapper>
                    )}
                </PriceWrapper>
                {product.reviewNum > 0 && (
                    <Comment>
                        <CommentIcon />
                        <span>{product.reviewNum}</span>
                    </Comment>
                )}
                {/* {props.isKurlyOnly && <KurlyOnly>Kurly Only</KurlyOnly>} */}
            </TextWrapper>
        </Wrapper>
    );
};

export default Product;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 573px;
    color: rgb(51, 51, 51);
    cursor: pointer;

    img {
        width: 249px;
        height: 320px;
        border-radius: 4px;
    }
`;

const CartBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 36px;
    margin-top: 6px;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 4px;

    font-size: 16px;
    line-height: 19px;

    svg {
        margin-right: 4px;
        width: 22px;
        height: 22px;
    }
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px 10px 0px 0px;
`;

const DeliveryText = styled.span`
    font-size: 14px;
    color: rgb(153, 153, 153);
    line-height: 19px;
    letter-spacing: -0.5px;
`;

const ProductName = styled.span`
    font-size: 16px;
    line-height: 24px;
    letter-spacing: normal;

    display: -webkit-box;
    overflow: hidden;
    word-break: break-all;
    white-space: normal;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const ProductDescription = styled.p`
    padding-top: 4px;
    margin: 0;
    font-size: 12px;
    color: rgb(153, 153, 153);
    line-height: 18px;
    letter-spacing: normal;

    display: -webkit-box;
    overflow: hidden;
    word-break: break-all;
    white-space: normal;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const PriceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 8px;
`;

const DiscountWrapper = styled.div`
    display: flex;
    gap: 7px;
`;

const Price = styled.span`
    font-weight: 800;
    font-size: 16px;
    line-height: 24px;
    white-space: nowrap;
    letter-spacing: -0.5px;

    &.discounted {
        font-size: 14px;
        color: rgb(181, 181, 181);
        text-decoration: line-through;
    }

    &.discount-rate {
        color: rgb(250, 98, 47);
    }
`;

const Comment = styled.div`
    display: flex;
    align-items: center;
    padding-top: 8px;
    gap: 3px;

    svg {
        width: 15px;
        height: 15px;
    }

    span {
        font-weight: 400;
        font-size: 13px;
        color: rgb(153, 153, 153);
        line-height: 17px;
    }
`;

const KurlyOnly = styled.span`
    display: flex;
    width: fit-content;
    justify-content: center;
    align-items: center;
    margin: 12px 10px 0px 0px;
    padding: 2px 8px 4px;

    border-radius: 4px;
    background-color: rgb(244, 244, 244);
    font-weight: 500;
    font-size: 12px;
    color: rgb(95, 0, 128);
    line-height: 16px;
`;
