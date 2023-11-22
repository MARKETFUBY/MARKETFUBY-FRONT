import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as CartIcon } from '../../assets/icon/cart.svg';
import { ReactComponent as CommentIcon } from '../../assets/icon/comment.svg';

const Product = ({ product }) => {
    const nav = useNavigate();

    // 할인된 가격 계산
    const getDiscountPrice = (price, discount) => {
        return parseInt((1 - discount / 100) * price);
    };

    return (
        <Wrapper onClick={() => nav(`/goods/${product.productId}`)}>
            <img src={product.image} />
            <CartBtn>
                <CartIcon />
                담기
            </CartBtn>
            <TextWrapper>
                <DeliveryText>{product.delivery}</DeliveryText>
                <ProductName>{product.title}</ProductName>
                <ProductDescription>{product.subtitle}</ProductDescription>
                <PriceWrapper>
                    <Price className={product.discount > 0 && 'discounted'}>
                        {product.price}원
                    </Price>
                    {product.discount > 0 && (
                        <DiscountWrapper>
                            <Price className='discount-rate'>
                                {product.discount}%
                            </Price>
                            <Price>
                                {getDiscountPrice(
                                    product.price,
                                    product.discount,
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
