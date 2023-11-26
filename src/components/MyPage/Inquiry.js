import { React, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getMyInquiry } from '../../api/mypage';
import InquiryContent from './InquiryContent';

function Inquiry() {
    const [inquiryList, setInquiryList] = useState([]);

    useEffect(() => {
        getInquiry();
    }, []);

    const getInquiry = async () => {
        try {
            const getData = await getMyInquiry();
            setInquiryList(getData.inquiryList);
        } catch (err) {
            console.log(err);
        }
    };
    
    return (
        <div>
            <TopBox>
                <div className='title'>
                    <span>상품 문의</span>
                </div>
                <ul>
                    <li>
                        • 상품에 대한 문의를 남기는 공간입니다. 해당 게시판의
                        성격과 다른 글은 사전동의 없이 담당 게시판으로 이동될 수
                        있습니다.
                    </li>
                    <li>
                        • 배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은
                        마이컬리 내 1:1문의에 남겨주세요.
                    </li>
                </ul>
            </TopBox>
            <Content>
                <div className='li'>제목</div>
                <div className='li2'>작성일</div>
                <div className='li2'>답변 상태</div>
            </Content>
            {inquiryList && inquiryList.length > 0 ? (
                <InquiryList>
                    <li>
                        {inquiryList.map((data, key) => (
                            <InquiryContent data={data} key={key} />
                        ))}
                    </li>
                </InquiryList>
            ) : (
                <Main>
                    {inquiryList.length === 0 && (
                        <ul>
                            <div className='none'>
                                작성한 상품 문의가 없습니다.
                            </div>
                        </ul>
                    )}
                </Main>
            )}
        </div>
    );
}

export default Inquiry;

const TopBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 20px;
    justify-content: space-between;
    border-bottom: 2px solid rgb(51, 51, 51);

    .title {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        font-size: 14px;
        color: #333;
    }

    ul {
        margin-top: 20px;
        margin-bottom: 18px;
        font-size: 14px;
        line-height: 24px;
        font-weight: 400;
        color: rgb(153, 153, 153);
        list-style: none;
        padding: 0;
    }

    li {
        padding-left: 12px;
    }

    span {
        font-weight: 500;
        font-size: 24px;
        color: rgb(51, 51, 51);
        letter-spacing: -0.5px;
        line-height: 48px;
    }
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    padding: 20px 0px;
    border-bottom: 1px solid rgb(51, 51, 51);

    .li {
        text-align: center;
        line-height: 20px;
        font-weight: 500;
        color: rgb(51, 51, 51);
        flex: 1 1 0%;
    }

    .li2 {
        text-align: center;
        line-height: 20px;
        font-weight: 500;
        color: rgb(51, 51, 51);
        flex-basis: 100px;
    }
`;

const Main = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    color: rgb(51, 51, 51);
    padding: 117px 0px;
    cursor: default;
`;

const InquiryList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
`;
