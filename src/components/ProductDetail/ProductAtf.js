import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReactComponent as RightArrow } from '../../assets/product/arrow_right.svg';
import { ReactComponent as HeartIcon } from '../../assets/product/heart.svg';
import { ReactComponent as FilledHeartIcon } from '../../assets/product/heart_fill.svg';
import { ReactComponent as AlarmIcon } from '../../assets/product/alarm.svg';
import { ReactComponent as QuestionMarkIcon } from '../../assets/icon/question_mark.svg';
import { getFormalizedNum } from '../../utils/getFormalizedNum';
import { getDiscountPrice } from '../../utils/getDiscountPrice';

import { getCartList, postCartItem, putCartList } from '../../api/cart';
import CartModal from '../Common/CartModal';

const ProductAtf = ({ productInfo, handleHeartClick }) => {
    const [num, setNum] = useState(1); // 선택한 상품 개수
    const productId = useParams().id;

    useEffect(() => {
        getCartItems();
    }, []);

    // 장바구니 관련
    const CART_CATEGORY = ['roomTempList', 'refrigeList', 'frozenList'];
    const [cartList, setCartList] = useState();
    const [isAdded, setIsAdded] = useState([false, false]); // 장바구니에 담겼는지, 기존에 장바구니에 있었는지

    // 장바구니 목록 저장할 함수
    const getCartItems = async () => {
        try {
            const cartItems = await getCartList();
            setCartList(cartItems);
        } catch (err) {
            console.log(err);
        }
    };

    // 장바구니에 담기
    const putInCart = async () => {
        try {
            const res = postCartItem(productId, 1);
            setIsAdded([true, false]);
            getCartItems();
        } catch (err) {
            console.log(err);
        }
    };

    // 장바구니에 수량 추가
    const addCartCnt = async (cartProductId, cnt) => {
        try {
            const res = putCartList(cartProductId, cnt);
            setIsAdded([true, true]);
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
                item => item.productName === productInfo.title,
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

    // 5초 뒤에 해당 변수 초기화
    useEffect(() => {
        if (isAdded) {
            const timer = setTimeout(() => setIsAdded([false, false]), 5000);
            return () => clearTimeout(timer);
        }
    }, [isAdded]);

    // 포장타입 문자열 반환하는 함수
    const getPacking = packing => {
        switch (packing) {
            case 'COLD':
                return '냉장';
            case 'FREEZE':
                return '냉동';
            default:
                return '상온';
        }
    };

    return (
        <Wrapper id='product-atf'>
            {isAdded[0] && (
                <CartModal
                    name={productInfo?.title}
                    productImg={productInfo?.image}
                    alreadyInCart={isAdded[1]}
                />
            )}
            <img src={productInfo?.image} />
            <RightSection>
                <Deliver>{productInfo?.delivery}</Deliver>
                <ProductName>
                    <div>{productInfo?.title}</div>
                    <div className='share'></div>
                    <div>{productInfo?.subtitle}</div>
                </ProductName>
                <Price>
                    {productInfo?.discount > 0 && (
                        <span className='red'>{productInfo?.discount}%</span>
                    )}
                    <span>
                        {getFormalizedNum(
                            getDiscountPrice(
                                productInfo?.price,
                                productInfo?.discount,
                            ),
                        )}
                    </span>
                    <span className='small'>원</span>
                </Price>
                {productInfo?.discount > 0 && (
                    <OriginPrice>
                        {getFormalizedNum(productInfo?.price)}원
                        <QuestionMarkIcon />
                    </OriginPrice>
                )}
                {productInfo?.origin === null ? (
                    <Origin>원산지: 상품설명/상세정보 참조</Origin>
                ) : (
                    <Origin>{productInfo?.origin}</Origin>
                )}
                <SavePointWrapper>
                    <p>
                        매월
                        <strong>2,000원</strong>
                        {` 적립금 + `}
                        <strong>24,000원</strong>
                        {` 쿠폰 받기`}
                    </p>
                    <RightArrow className='right-arrow' />
                </SavePointWrapper>
                <InfoWrapper>
                    <Info>
                        <dt>배송</dt>
                        <dd>
                            <p>{productInfo?.delivery}</p>
                            <p className='additional'>
                                23시 전 주문 시 내일 아침 7시 전 도착
                                (대구·부산·울산 샛별배송 운영시간 별도 확인)
                            </p>
                        </dd>
                    </Info>
                    <Info>
                        <dt>판매자</dt>
                        <dd>
                            <p>{productInfo?.seller}</p>
                        </dd>
                    </Info>
                    <Info>
                        <dt>포장타입</dt>
                        <dd>
                            <p>{getPacking(productInfo?.packing)}</p>
                            <p className='additional'>
                                택배배송은 에코 포장이 스티로폼으로 대체됩니다.
                            </p>
                        </dd>
                    </Info>
                    <Info>
                        <dt>판매단위</dt>
                        <dd>
                            <p>{productInfo?.unit}</p>
                        </dd>
                    </Info>
                    <Info>
                        <dt>중량/용량</dt>
                        <dd>
                            <p>{productInfo?.weight}</p>
                        </dd>
                    </Info>
                    <Info>
                        <dt>유통기한(또는 소비기한) 정보</dt>
                        <dd>
                            <p>{productInfo?.expiration}</p>
                        </dd>
                    </Info>
                    <Info>
                        <dt>안내사항</dt>
                        <dd>
                            <p>{productInfo?.info}</p>
                        </dd>
                    </Info>
                    <Info>
                        <dt>상품선택</dt>
                        <dd className='product-select'>
                            <div className='cart-option-item'>
                                <span>{productInfo?.title}</span>
                                <OptionWrapper>
                                    <AddBtnWrapper>
                                        <button
                                            onClick={() => setNum(num - 1)}
                                            disabled={num <= 1 ? true : false}
                                        >
                                            <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yMCAxNHYySDEwdi0yeiIgZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJub256ZXJvIi8+Cjwvc3ZnPgo=' />
                                        </button>
                                        <div>{num}</div>
                                        <button onClick={() => setNum(num + 1)}>
                                            <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xNiAxMHY0aDR2MmgtNHY0aC0ydi00aC00di0yaDR2LTRoMnoiIGZpbGw9IiMzMzMiIGZpbGwtcnVsZT0ibm9uemVybyIvPgo8L3N2Zz4K' />
                                        </button>
                                    </AddBtnWrapper>
                                    <span>
                                        {getFormalizedNum(
                                            getDiscountPrice(
                                                productInfo?.price,
                                                productInfo?.discount,
                                            ),
                                        )}
                                        원
                                    </span>
                                </OptionWrapper>
                            </div>
                        </dd>
                    </Info>
                </InfoWrapper>
                <TotalPriceInfo>
                    <span className='total-price-text'>총 상품금액 :</span>
                    <span className='price-num'>
                        {getFormalizedNum(
                            getDiscountPrice(
                                productInfo?.price,
                                productInfo?.discount,
                            ) * num,
                        )}
                    </span>
                    <span className='price-unit'>원</span>
                </TotalPriceInfo>
                <BtnWrapper>
                    <SquareBtn onClick={handleHeartClick}>
                        {productInfo?.isLiked ? (
                            <FilledHeartIcon />
                        ) : (
                            <HeartIcon />
                        )}
                    </SquareBtn>
                    <SquareBtn>
                        <AlarmIcon />
                    </SquareBtn>
                    <CartBtn onClick={handleCartClick}>장바구니 담기</CartBtn>
                </BtnWrapper>
            </RightSection>
        </Wrapper>
    );
};

export default ProductAtf;

const Wrapper = styled.div`
    display: flex;
    width: 1050px;
    justify-content: space-between;
    margin: 0px auto;
    padding-top: 30px;

    img {
        width: 430px;
        height: 552px;
    }
`;

const RightSection = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 560px;
`;

const ProductName = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    overflow-wrap: break-word;

    .share {
        position: absolute;
        top: 0px;
        right: 0px;
        width: 40px;
        height: 40px;
        background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBzdHJva2U9IiNEREQiIGN4PSIyMCIgY3k9IjIwIiByPSIxOS41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuNSAxMSkiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxLjgiPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSIzIiBjeT0iOSIgcj0iMi4xIi8+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMTM3KSI+CiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSI4Ljg2MyIgY3k9IjMiIHI9IjIuMSIvPgogICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgZD0iTTAgOC4xMzYgNi4zNjMgNC41Ii8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgNS4xMzcgMTgpIj4KICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9IjguODYzIiBjeT0iMyIgcj0iMi4xIi8+CiAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBkPSJNMCA4LjEzNiA2LjM2MyA0LjUiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg==)
            50% 50% no-repeat;
        cursor: pointer;
    }

    div {
        &:first-child {
            width: 500px;
            font-weight: 500;
            font-size: 24px;
            color: rgb(51, 51, 51);
            margin-right: 20px;
        }

        &:nth-child(3) {
            width: 500px;
            padding-top: 5px;
            font-size: 14px;
            font-weight: 400;
            color: rgb(181, 181, 181);
        }
    }
`;

const Deliver = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: rgb(153, 153, 153);
    margin-bottom: 6px;
    width: 500px;
`;

const Price = styled.div`
    display: flex;
    align-items: flex-end;
    padding-top: 20px;
    font-weight: bold;
    line-height: 30px;
    letter-spacing: -0.5px;

    span {
        padding-right: 4px;
        font-size: 28px;
        color: rgb(51, 51, 51);

        &.small {
            display: inline-block;
            position: relative;
            top: 4px;
            font-size: 18px;
            vertical-align: bottom;
        }

        &.red {
            padding-right: 9px;
            color: #fa622f;
        }
    }
`;

const OriginPrice = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #b5b5b5;
    letter-spacing: -0.5px;
    text-decoration: line-through;
    margin-top: 8px;
    margin-right: 1px;

    svg {
        margin-top: 1px;
        margin-left: 1px;
    }
`;

const Origin = styled.p`
    color: #333;
    font-size: 24px;
    letter-spacing: -0.5px;
    margin: 8px 0 0;
`;

const SavePointWrapper = styled.div`
    margin-top: 2px;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;

    box-sizing: border-box;
    width: 350px;
    min-height: 38px;
    padding: 10px 14px 10px 16px;
    margin-top: 12px;

    background-color: rgba(189, 118, 255, 0.08);
    border-radius: 4px;

    p {
        font-weight: 400;
        line-height: 16px;
        color: rgb(51, 51, 51);
        letter-spacing: -0.5px;
        font-size: 13px;
        margin: 0;

        strong {
            font-weight: 500;
            color: rgb(95, 0, 128);
        }
    }

    .right-arrow {
        cursor: pointer;
    }
`;

const InfoWrapper = styled.ul`
    margin-top: 20px;
    padding: 0;
    border-bottom: 1px solid #f4f4f4;
`;

const Info = styled.li`
    display: flex;
    align-items: flex-start;
    overflow: hidden;
    width: 100%;
    padding: 17px 0 18px;
    border-top: 1px solid #f4f4f4;
    font-size: 14px;
    letter-spacing: -0.5px;

    dt {
        width: 128px;
        height: 100%;
        color: #666;
        font-weight: 400;
        line-height: 19px;
    }

    dd {
        display: flex;
        flex: 1;
        flex-direction: column;
        margin: 0;

        p {
            color: #333;
            font-weight: 400;
            line-height: 19px;
            white-space: pre-line;
            word-break: break-all;
            overflow: hidden;
            margin: 0;
        }

        .additional {
            display: block;
            font-size: 12px;
            color: #666;
            padding-top: 4px;
            line-height: 16px;
            white-space: pre-line;
        }

        &.product-select {
            &:last-of-type {
                border-bottom: 1px solid rgb(244, 244, 244);
            }
        }

        .cart-option-item {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 11px 10px 11px 15px;
            font-size: 12px;
            border-left: 1px solid rgb(244, 244, 244);
            border-top: 1px solid rgb(244, 244, 244);
            border-right: 1px solid rgb(244, 244, 244);

            > span {
                line-height: 16px;
                width: 320px;
                color: rgb(51, 51, 51);
                overflow-wrap: break-word;
            }
        }
    }
`;

const OptionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 12px;

    > span {
        font-weight: bold;
        font-size: 12px;
        color: rgb(51, 51, 51);
        padding-right: 5px;
    }
`;

const AddBtnWrapper = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid rgb(221, 223, 225);
    width: 88px;
    border-radius: 3px;
    box-sizing: border-box;
    margin: 0;

    button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 28px;
        height: 28px;
        border: none;
        background-color: transparent;
        cursor: pointer;

        img {
            width: 28px;
            height: 28px;
        }
    }

    div {
        display: inline-flex;
        width: 31px;
        height: 28px;
        overflow: hidden;
        white-space: nowrap;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-weight: 400;
        color: rgb(51, 51, 51);
    }
`;

const TotalPriceInfo = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding-top: 30px;

    span {
        &.total-price-text {
            padding-right: 12px;
            font-size: 13px;
            font-weight: 500;
            color: rgb(51, 51, 51);
            line-height: 20px;
        }

        &.price-num {
            font-weight: bold;
            font-size: 32px;
            color: rgb(51, 51, 51);
            line-height: 36px;
        }

        &.price-unit {
            padding-left: 5px;
            font-size: 20px;
            font-weight: 600;
            color: rgb(51, 51, 51);
            line-height: 30px;
        }

        &.save-icon-text {
            background-color: rgb(255, 191, 0);
            margin: 1px 6px 0px 0px;
            padding: 0px 7px;
            border-radius: 10px;
            font-size: 11px;
            font-weight: 500;
            color: rgb(255, 255, 255);
            line-height: 20px;
        }

        &.save-info-text {
            font-size: 14px;
            line-height: 1.45;
            color: rgb(102, 102, 102);
            padding-top: 10px;
        }
    }
`;

const BtnWrapper = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 20px;
`;

const SquareBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    width: 56px;
    height: 56px;
    border-radius: 3px;
    color: #333;
    background-color: #fff;
    border: 1px solid #ddd;
    cursor: pointer;
`;

const CartBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 56px;
    padding: 0 10px;
    overflow: hidden;
    font-size: 16px;
    font-weight: 500;
    border-radius: 3px;
    color: #fff;
    background-color: #5f0080;
    border: 0;
    cursor: pointer;
`;
