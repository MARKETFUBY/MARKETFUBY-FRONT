import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { getFormalizedNum } from '../../utils/getFormalizedNum';

const NavBar = ({ reviewNum }) => {
    const [position, setPosition] = useState([false, false, false, false]); // 현재 스크롤 위치

    // 현재 스크롤 위치 구하기
    const getCurrentPosition = () => {
        const scrollY = window.scrollY; // 스크롤 양
        // 각 컴포넌트의 절대적 위치 (뷰포트에서의 상대적 위치 + 스크롤 양)
        const productDescription = Math.floor(
            scrollY +
                document
                    .getElementById('product-description')
                    .getBoundingClientRect().top,
        );
        const productInfo = Math.floor(
            scrollY +
                document.getElementById('product-info').getBoundingClientRect()
                    .top,
        );
        const productReview = Math.floor(
            scrollY +
                document
                    .getElementById('product-review')
                    .getBoundingClientRect().top,
        );
        const productInquiry = Math.floor(
            scrollY +
                document
                    .getElementById('product-inquiry')
                    .getBoundingClientRect().top,
        );

        setPosition([
            scrollY >= productDescription && scrollY < productInfo,
            scrollY >= productInfo && scrollY < productReview,
            scrollY >= productReview && scrollY < productInquiry,
            scrollY >= productInquiry,
        ]);
    };

    useEffect(() => {
        window.addEventListener('scroll', getCurrentPosition);

        return () => window.removeEventListener('scroll', getCurrentPosition);
    }, [position]);

    return (
        <Wrapper>
            <BtnWrapper>
                <NavBtn className={position[0] && 'current'}>상품설명</NavBtn>
                <NavBtn className={position[1] && 'current'}>상세정보</NavBtn>
                <NavBtn className={position[2] && 'current'}>
                    <span>후기</span>
                    <span className='reveiw-cnt'>
                        {getFormalizedNum(reviewNum)}
                    </span>
                </NavBtn>
                <NavBtn className={position[3] && 'current'}>문의</NavBtn>
            </BtnWrapper>
        </Wrapper>
    );
};

export default NavBar;

const Wrapper = styled.nav`
    z-index: 20;
    position: sticky;
    top: 56px;
    width: 1010px;
    box-shadow: inset 0 -0.5px 0 0 #ddd;
    background-color: #fff;
    margin: 50px auto 0px;
`;

const BtnWrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    height: 60px;
    padding: 0;
    list-style-type: none;

    li {
        &:last-child {
            border-right-width: 1px;
        }
    }
`;

const NavBtn = styled.li`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    border-width: 1px 0 1px 1px;
    border-color: #eee;
    border-style: solid;
    background-color: #fafafa;
    font-size: 16px;
    font-weight: 500;
    color: #666;
    cursor: pointer;

    & .reveiw-cnt {
        margin-left: 4px;
        font-size: 14px;
        font-weight: 400;
        color: #999;
        line-height: 16px;
    }

    &.current {
        background-color: #fff;
        color: #5f0080;
    }
`;
