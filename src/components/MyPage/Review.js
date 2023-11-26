import { React, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { getMyReview } from '../../api/mypage';
import ReviewBox from './ReviewBox';

function Review() {
    const [reviewList, setLivewList] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        getReview();
    }, []);

    const getReview = async () => {
        try {
            const getData = await getMyReview();
            setData(getData);
            setLivewList(getData.productList);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <TopBox>
                <div className='title'>
                    <span>상품 후기</span>
                </div>
                <div className='btn'>
                    <button className='primary-button'>작성 가능 후기</button>
                    <button className='secondary-button'>작성한 후기</button>
                </div>
            </TopBox>
            <Box>
                <article>
                    <ul>
                        <li>• 주간 베스트 후기로 선정 시 5,000원 추가 적립</li>
                        <li>
                            • 사진후기 100원, 글후기 50원 적립 (퍼플, 더퍼플은
                            2배 적립)
                        </li>
                        <li>
                            • 동일 상품의 후기는 월 1회만 적립금을 지급
                            해드립니다.
                        </li>
                        <li>
                            • 후기 작성 후 일주일 이내에 적립금이 지급됩니다.
                        </li>
                    </ul>
                    <button>자세히보기</button>
                </article>
            </Box>
            <Content>
                <span>총 {data.total}개</span>
                <button className='alarm'>작성시 유의사항</button>
                {reviewList.map((data, key) => (
                    <ReviewBox data={data} key={key} />
                ))}
            </Content>
        </div>
    );
}

export default Review;

const TopBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 20px;
    justify-content: space-between;
    /* border-bottom: 2px solid rgb(51, 51, 51); */

    span {
        font-weight: 500;
        font-size: 24px;
        color: rgb(51, 51, 51);
        letter-spacing: -0.5px;
        line-height: 48px;
    }

    .title {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        color: #333;
    }

    .btn {
        display: flex;
        flex-wrap: nowrap;
        width: 100%;
        height: 60px;
        background-color: rgb(250, 250, 250);
    }

    button {
        flex: 1 1 0%;
        border-width: 1px 1px 0px;
        border-style: solid;
        border-color: rgb(244, 244, 244);
        border-image: initial;
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        background-color: rgb(255, 255, 255);
        line-height: 21px;
    }

    .primary-button {
        color: rgb(95, 0, 128);
    }

    .secondary-button {
        border: 1px solid rgb(244, 244, 244);
        color: rgb(51, 51, 51);
    }
`;

const Box = styled.div`
    article {
        padding: 22px 0px 40px 3px;
    }

    ul {
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: rgb(102, 102, 102);
        padding: 0;
        list-style: none;
    }

    button {
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        text-decoration-line: underline;
        color: rgb(76, 76, 76);
        margin-top: 6px;
        background: none;
        border: none;
    }
`;

const Content = styled.div`
    position: relative;
    width: 100%;
    min-height: 600px;
    border-top: 1px solid rgb(51, 51, 51);
    margin-top: 30px;

    span {
        position: absolute;
        top: -38px;
        left: 0px;
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;
    }

    .alarm {
        position: absolute;
        top: -38px;
        right: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        font-size: 14px;
        line-height: 14px;
        color: rgb(153, 153, 153);
        background: none;
        border: none;
    }
`;
