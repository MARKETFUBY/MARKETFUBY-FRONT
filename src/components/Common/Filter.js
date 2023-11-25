import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as InitializationIcon } from '../../assets/icon/initialization.svg';
import { ReactComponent as ArrowIcon } from '../../assets/icon/arrow.svg';
import { ReactComponent as CheckIcon } from '../../assets/icon/check.svg';
import { ReactComponent as PurpleCheckIcon } from '../../assets/icon/check_purple.svg';
import { click, initialize } from '../../store/filterSlice';

const Filter = ({ handleModalOpen }) => {
    const [isCategoryClicked, setIsCategoryClicked] = useState(false);

    // 카테고리 옆 화살표 버튼 클릭 시 실행할 함수
    const handleCategoryClick = () => {
        setIsCategoryClicked(!isCategoryClicked);
    };

    // 체크 버튼 클릭 시
    const dispatch = useDispatch();
    const filterList = useSelector(state => {
        return state.filter;
    });

    const handleCheckClick = id => {
        dispatch(click(id));
    };

    useEffect(() => {
        dispatch(initialize());
    }, []);

    return (
        <Wrapper>
            <Header
                className={
                    filterList.filter(item => item.clicked).length > 0 &&
                    'initialize-able'
                }
            >
                <span>필터</span>
                <button onClick={() => dispatch(initialize())}>
                    <InitializationIcon />
                    <span>초기화</span>
                </button>
            </Header>
            <div>
                <MenuWrapper>
                    <MenuTitle
                        className='category'
                        $clicked={isCategoryClicked}
                        onClick={handleCategoryClick}
                    >
                        <span>카테고리</span>
                        <ArrowIcon />
                    </MenuTitle>
                    {isCategoryClicked && (
                        <>
                            <ul>
                                {filterList.map(filter => {
                                    return (
                                        <li
                                            key={filter.id}
                                            onClick={() => {
                                                handleCheckClick(filter.id);
                                            }}
                                        >
                                            {filter.clicked ? (
                                                <PurpleCheckIcon />
                                            ) : (
                                                <CheckIcon />
                                            )}
                                            <span>{filter.label}</span>
                                            <span>22</span>
                                        </li>
                                    );
                                })}
                            </ul>
                            <button onClick={handleModalOpen}>
                                <span>카테고리 더보기</span>
                                <ArrowIcon />
                            </button>
                        </>
                    )}
                </MenuWrapper>
                <MenuWrapper>
                    <MenuTitle>
                        <span>브랜드</span>
                        <ArrowIcon />
                    </MenuTitle>
                </MenuWrapper>
                <MenuWrapper>
                    <MenuTitle>
                        <span>가격</span>
                        <ArrowIcon />
                    </MenuTitle>
                </MenuWrapper>
                <MenuWrapper>
                    <MenuTitle>
                        <span>혜택</span>
                        <ArrowIcon />
                    </MenuTitle>
                </MenuWrapper>
                <MenuWrapper>
                    <MenuTitle>
                        <span>유형</span>
                        <ArrowIcon />
                    </MenuTitle>
                </MenuWrapper>
                <MenuWrapper>
                    <MenuTitle>
                        <span>특정상품 제외</span>
                        <ArrowIcon />
                    </MenuTitle>
                </MenuWrapper>
            </div>
        </Wrapper>
    );
};

export default Filter;

const Wrapper = styled.div`
    position: sticky;
    width: 220px;
    flex-shrink: 0;
    height: 100%;
    max-height: calc(100vh - 120px);
    top: 80px;
    margin-right: 47px;
    overflow: hidden scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;

const Header = styled.div`
    position: sticky;
    top: 0px;
    display: flex;
    z-index: 20;
    background-color: rgb(255, 255, 255);
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid rgb(238, 238, 238);
    line-height: 20px;

    & button {
        display: inline-flex;
        align-items: center;
        background-color: transparent;
        border: none;
        cursor: pointer;

        span {
            margin-left: 5px;
            font-weight: 500;
            color: rgb(221, 221, 221);
        }
    }

    &.initialize-able {
        svg path {
            stroke: #666;
        }

        span:last-child {
            color: #666;
        }
    }
`;

const MenuWrapper = styled.div`
    border-bottom: 1px solid rgb(238, 238, 238);

    & ul {
        padding: 0;
        margin: 0;
    }

    & li {
        display: flex;
        align-items: center;
        list-style: none;
        margin: 9px 0 18px;
        padding: 0;
        cursor: pointer;

        svg {
            margin-right: 8px;
        }

        span {
            font-weight: 400;

            &:first-of-type {
                margin-right: 4px;
                font-size: 14px;
                line-height: 17px;
                color: #333;

                &:hover {
                    color: #8d4cc4;
                }
            }

            &:last-of-type {
                font-size: 12px;
                line-height: 16px;
                color: #ccc;
            }
        }
    }

    & button {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 11px;
        border: none;
        background-color: transparent;
        cursor: pointer;

        span {
            color: #999;
            font-weight: 500;
            font-size: 12px;
        }

        svg {
            transform: rotate(90deg);
        }
    }
`;

const MenuTitle = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    height: 52px;
    overflow: hidden;
    cursor: pointer;

    span {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        font-weight: 500;
        font-size: 15px;
        line-height: 20px;
        color: rgb(51, 51, 51);
    }

    svg {
        transform: rotate(180deg);
    }

    &.category {
        svg {
            transform: ${props =>
                props.$clicked ? 'rotate(0deg)' : 'rotate(180deg)'};
        }
    }
`;
