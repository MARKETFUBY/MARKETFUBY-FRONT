import styled from 'styled-components';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import removeIcon from '../../assets/icon/close.svg';
import { click, initialize } from '../../store/filterSlice';

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

    // 필터링 관련
    const dispatch = useDispatch();
    const filterList = useSelector(state => {
        return state.filter;
    });
    const selectedFilter = filterList.filter(item => item.clicked);

    return (
        <Wrapper>
            <SortBarWrapper>
                <Count>총 {count}건</Count>
                <SortList $clicked={clickedSort}>
                    <li onClick={() => handleSortClick(0)}>추천순</li>
                    <li onClick={() => handleSortClick(1)}>신상품순</li>
                    <li onClick={() => handleSortClick(2)}>판매량순</li>
                    <li onClick={() => handleSortClick(3)}>혜택순</li>
                    <li onClick={() => handleSortClick(4)}>낮은 가격순</li>
                    <li onClick={() => handleSortClick(5)}>높은 가격순</li>
                </SortList>
            </SortBarWrapper>
            {selectedFilter.length > 0 && (
                <FilterBarWrapper>
                    <div>
                        <span>{selectedFilter[0].label}</span>
                        <img
                            src={removeIcon}
                            onClick={() => dispatch(initialize())}
                        />
                    </div>
                </FilterBarWrapper>
            )}
        </Wrapper>
    );
};

export default SortBar;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const SortBarWrapper = styled.div`
    display: flex;
    align-items: center;
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

const FilterBarWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    padding: 16px 20px 18px;
    border: 1px solid rgb(238, 238, 238);
    margin-bottom: 31px;

    div {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }

    span {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #8d4cc4;
        margin-right: 2px;
    }

    img {
        width: 15px;
        height: 15px;
        cursor: pointer;
    }
`;
