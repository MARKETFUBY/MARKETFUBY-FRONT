import styled from 'styled-components';
import { useState } from 'react';

/*
 * props
 * 1. count : 상품 총 개수
 * 2. handleSortClick : 정렬 버튼 클릭 시 실행할 함수
 */
const SortBar = ({ count, sortProducts }) => {
    const [clickedSort, setClickedSort] = useState(1); // 클릭된 정렬 방법

    const handleSortClick = sort => {
        setClickedSort(sort + 1);
        sortProducts(sort);
    };

    return (
        <Wrapper>
            <Count>총 {count}건</Count>
            <SortList $clicked={clickedSort}>
                <li onClick={() => handleSortClick(0)}>추천순</li>
                <li onClick={() => handleSortClick(1)}>신상품순</li>
                <li onClick={() => handleSortClick(2)}>판매량순</li>
                <li onClick={() => handleSortClick(3)}>혜택순</li>
                <li onClick={() => handleSortClick(4)}>낮은 가격순</li>
                <li onClick={() => handleSortClick(5)}>높은 가격순</li>
            </SortList>
        </Wrapper>
    );
};

export default SortBar;

const Wrapper = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding-bottom: 20px;
    line-height: 20px;
`;

const Count = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: rgb(51, 51, 51);
`;

const SortList = styled.ul`
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    list-style-type: none;
    margin: 0;
    cursor: pointer;

    li:nth-child(${props => props.$clicked}) {
        color: rgb(51, 51, 51);
    }

    li {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: end;
        justify-content: flex-end;
        margin-left: 8px;
        font-size: 14px;
        color: rgb(153, 153, 153);

        &:not(:first-child) {
            &::before {
                content: '';
                display: flex;
                width: 1px;
                height: 10px;
                margin-right: 8px;
                background-color: rgb(226, 226, 226);
            }
        }
    }
`;
