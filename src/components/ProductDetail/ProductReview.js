import styled from 'styled-components';
import { ReactComponent as UpArrow } from '../../assets/product/arrow_up.svg';
import { ReactComponent as LikeIcon } from '../../assets/product/like.svg';
import { ReactComponent as PageBtn } from '../../assets/product/page_btn.svg';
import { ReactComponent as DisabledPageBtn } from '../../assets/product/page_btn_disabled.svg';

const ProductReview = ({
    reviews,
    reviewImg,
    reviewCount,
    handleHelpClick,
}) => {
    return (
        <Wrapper id='product-review'>
            <Title>상품 후기</Title>
            {reviewImg?.length > 0 && (
                <ImgWrapper>
                    {reviewImg?.map((image, idx) => {
                        return <ImgPreview src={image} key={idx} />;
                    })}
                    <a>
                        <span>+더보기</span>
                    </a>
                </ImgWrapper>
            )}
            {reviews?.length > 0 && (
                <SortBar>
                    <ReviewNum>{`총 ${reviewCount}개`}</ReviewNum>
                    <SortBtnWrapper>
                        <SortBtn>추천순</SortBtn>
                        <SortBtn>최근등록순</SortBtn>
                    </SortBtnWrapper>
                </SortBar>
            )}
            <MembershipBtn>
                회원 등급
                <UpArrow className='down-arrow' />
            </MembershipBtn>
            <NoticeWrapper>
                <Notice>
                    <span>공지</span>
                    <button>상품후기 적립금 정책 안내</button>
                </Notice>
                <Notice>
                    <span>공지</span>
                    <button>금주의 베스트 후기 안내</button>
                </Notice>
            </NoticeWrapper>
            <ReviewList>
                {reviews?.map(review => {
                    return (
                        <ReviewItem key={review.reviewId}>
                            <div className='reviewer-name'>{review.name}</div>
                            <div className='review-right-section'>
                                <div className='product-name'>
                                    {review.title}
                                </div>
                                <div className='content'>{review.content}</div>
                                {review.imageList?.length > 0 && (
                                    <ImgWrapper className='inside-review'>
                                        {review.imageList?.map((image, idx) => {
                                            return (
                                                <ImgPreview
                                                    className='inside-review'
                                                    src={image}
                                                    key={idx}
                                                />
                                            );
                                        })}
                                    </ImgWrapper>
                                )}
                                <div className='review-footer'>
                                    <span>{review.date}</span>
                                    <span
                                        className={
                                            review.isReviewHelp
                                                ? 'like-btn clicked-like'
                                                : 'like-btn'
                                        }
                                        onClick={() =>
                                            handleHelpClick(
                                                review.reviewId,
                                                review.isReviewHelp,
                                            )
                                        }
                                    >
                                        <LikeIcon />
                                        <span>도움돼요</span>
                                    </span>
                                </div>
                            </div>
                        </ReviewItem>
                    );
                })}
            </ReviewList>
            <PageBtnWrapper>
                <DisabledPageBtn />
                <PageBtn className='active-btn' />
            </PageBtnWrapper>
        </Wrapper>
    );
};

export default ProductReview;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 1010px;
    padding-bottom: 100px;
    padding: 72px 0;
    margin: 0 auto;
`;

const Title = styled.h2`
    font-size: 24px;
    font-weight: 500;
    line-height: 41px;
    letter-spacing: -0.5px;
    color: #333;
    margin: 0;
`;

const ImgWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 3px;
    width: 100%;
    padding: 20px 0 30px 0;
    overflow: hidden;

    &.inside-review {
        padding: 15px 0px 2px;
    }

    div {
        &:first-child {
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }

        &:last-child {
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
    }

    a {
        position: absolute;
        right: 0px;
        top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 124px;
        height: 124px;
        margin-bottom: 32px;
        border-radius: 0px 6px 6px 0px;
        background-color: rgba(0, 0, 0, 0.2);
        cursor: pointer;

        span {
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            color: #fff;
        }
    }
`;

const ImgPreview = styled.img`
    width: 124px;
    height: 124px;
    object-fit: cover;
    background-color: rgb(244, 244, 244);
    cursor: pointer;

    &.inside-review {
        width: 93px;
        height: 93px;
    }
`;

const SortBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0 16px 5px;
`;

const ReviewNum = styled.span`
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
`;

const SortBtnWrapper = styled.div`
    display: flex;
    gap: 17px;
    align-items: center;
`;

const SortBtn = styled.div`
    position: relative;
    font-weight: 500;
    font-size: 12px;
    color: rgb(51, 51, 51);
    cursor: pointer;

    &:first-child::after {
        content: '';
        position: absolute;
        top: 4px;
        height: 62.5%;
        border-left: 1px solid rgb(153, 153, 153);
        margin-left: 8px;
        margin-right: 8px;
    }
`;

const MembershipBtn = styled.button`
    display: flex;
    width: fit-content;
    align-items: center;
    padding: 9px 10px 9px 14px;
    margin-bottom: 20px;
    border: 1px solid rgb(238, 238, 238);
    background-color: rgb(255, 255, 255);
    border-radius: 18px;
    gap: 2px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: rgb(102, 102, 102);
    cursor: pointer;

    & .down-arrow {
        transform: rotate(180deg);
    }
`;

const NoticeWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgb(51, 51, 51);
`;

const Notice = styled.div`
    padding: 21px 20px 20px;
    border-bottom: 1px solid rgb(238, 238, 238);

    span {
        display: inline-block;
        width: 42px;
        height: 22px;
        border-radius: 4px;
        background-color: rgb(244, 244, 244);
        font-size: 12px;
        font-weight: 500;
        line-height: 22px;
        text-align: center;
        color: rgb(102, 102, 102);
    }

    button {
        margin-left: 9px;
        background-color: transparent;
        border: none;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        text-align: center;
        color: rgb(51, 51, 51);
        cursor: pointer;
    }
`;

const ReviewList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const ReviewItem = styled.div`
    width: 100%;
    display: flex;
    padding: 30px 0px 19px 20px;
    border-bottom: 1px solid rgb(244, 244, 244);

    box-sizing: border-box;
    margin: 0;

    div,
    span {
        font-size: 14px;
        font-weight: 400;
        line-height: 19px;
    }

    & > .reviewer-name {
        flex: 0 0 225px;
        font-weight: 500;
    }

    & > .review-right-section {
        width: 100%;
        overflow: hidden;
    }

    & .product-name {
        height: 19px;
        padding-right: 20px;
        color: rgb(153, 153, 153);
    }

    & .content {
        padding-top: 12px;
        padding-right: 20px;
        word-break: break-word;
        white-space: pre-wrap;
        color: rgb(51, 51, 51);
    }

    & .review-footer {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 19px;
        padding-right: 20px;

        span,
        button {
            color: rgb(153, 153, 153);
        }
    }

    & .like-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 32px;
        padding: 0px 11px 0px 11px;
        border: 1px solid rgb(226, 226, 226);
        border-radius: 20px;
        background-color: transparent;
        cursor: pointer;

        span {
            margin-left: 4px;
            font-size: 12px;
            line-height: 20px;
        }

        img {
            width: 15px;
            height: 15px;
            margin-right: 4px;
        }

        &:hover,
        &.clicked-like {
            span {
                color: #5f0080;
            }

            svg path {
                stroke: #5f0080;
            }
        }
    }
`;

const PageBtnWrapper = styled.div`
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    gap: 12px;

    & .active-btn {
        cursor: pointer;
    }

    & .active-btn:hover {
        rect {
            stroke: rgb(51, 51, 51);
        }
    }
`;
