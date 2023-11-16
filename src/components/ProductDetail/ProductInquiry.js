import styled from 'styled-components';
import { ReactComponent as LockIcon } from '../../assets/product/lock.svg';
import { ReactComponent as PageBtn } from '../../assets/product/page_btn.svg';
import { ReactComponent as DisabledPageBtn } from '../../assets/product/page_btn_disabled.svg';

const ProductInquiry = () => {
    const inquiryData = [
        {
            title: '배송',
            author: '임*주',
            date: '2023.11.04',
            hasReply: false,
            isSecret: false,
        },
        {
            title: '배송',
            author: '오*림',
            date: '2023.11.01',
            hasReply: true,
            isSecret: true,
        },
        {
            title: '배송',
            author: '임*주',
            date: '2023.10.27',
            hasReply: true,
            isSecret: true,
        },
    ];

    return (
        <Wrapper>
            <Header>
                <div>상품 문의</div>
                <ul>
                    <li>
                        상품에 대한 문의를 남기는 공간입니다. 해당 게시판의
                        성격과 다른 글은 사전동의 없이 담당 게시판으로 이동될 수
                        있습니다.
                    </li>
                    <li>
                        배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은
                        마이컬리 내 1:1 문의에 남겨주세요.
                    </li>
                </ul>
            </Header>
            <Body>
                <thead>
                    <tr>
                        <th className='title'>제목</th>
                        <th className='author'>작성자</th>
                        <th className='created-date'>작성일</th>
                        <th className='status'>답변상태</th>
                    </tr>
                </thead>
                <tbody>
                    {inquiryData.map((inquiry, idx) => {
                        return (
                            <tr>
                                {inquiry.isSecret ? (
                                    <td className='inquiry-title'>
                                        비밀글입니다.
                                        <LockIcon />
                                    </td>
                                ) : (
                                    <td className='inquiry-title'>
                                        {inquiry.title}
                                    </td>
                                )}
                                <td>{inquiry.author}</td>
                                <td>{inquiry.date}</td>
                                {inquiry.hasReply ? (
                                    <td className='has-reply'>답변완료</td>
                                ) : (
                                    <td>답변대기</td>
                                )}
                            </tr>
                        );
                    })}
                </tbody>
            </Body>
            <Footer>
                <DisabledPageBtn />
                <PageBtn className='active-btn' />
            </Footer>
        </Wrapper>
    );
};

export default ProductInquiry;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 1010px;
    margin: 0 auto;
    padding-bottom: 160px;
`;

const Header = styled.header`
    padding-bottom: 40px;

    div {
        margin-bottom: 16px;
        font-size: 24px;
        font-weight: 500;
        line-height: 21px;
        color: #333;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        line-height: 19px;
        font-weight: 400;
        color: #999;
    }

    li {
        font-size: 14px;
        padding-left: 10px;

        &::before {
            display: inline-block;
            width: 2px;
            height: 2px;
            margin: 11px 6px 0 -10px;
            background: #999;
            vertical-align: top;
            content: '';
        }
    }
`;

const Body = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;

    thead {
        height: 58px;
        border-top: 2px solid #333;
        border-bottom: 1px solid #333;

        th {
            font-size: 14px;
            font-weight: 500;
            letter-spacing: -0.5px;
            color: #333;
        }

        .title {
            width: 710px;
        }

        .author,
        .created-date,
        .status {
            width: 100px;
        }
    }

    tbody {
        tr {
            height: 64px;
            border-bottom: 1px solid rgb(244, 244, 244);
            line-height: 19px;
            letter-spacing: -0.5px;
        }

        td {
            text-align: center;
            color: rgb(153, 153, 153);
        }

        .inquiry-title {
            text-align: left;
            padding: 0px 20px;
            cursor: pointer;

            svg {
                margin-left: 6px;
            }
        }

        .has-reply {
            text-align: center;
            color: rgb(95, 0, 128);
        }
    }
`;

const Footer = styled.div`
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
