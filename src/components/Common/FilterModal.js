import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as CloseBtn } from '../../assets/icon/close.svg';
import { ReactComponent as CheckIcon } from '../../assets/icon/check.svg';
import { ReactComponent as PurpleCheckIcon } from '../../assets/icon/check_purple.svg';
import { ReactComponent as InitializationIcon } from '../../assets/icon/initialization.svg';
import { click, initialize } from '../../store/filterSlice';

const FilterModal = ({ onClick, categories }) => {
    // 체크 버튼 클릭 시
    const dispatch = useDispatch();
    const filterList = useSelector(state => {
        return state.filter;
    });
    const selectedFilter = filterList.filter(item => item.clicked);

    const handleCheckClick = id => {
        dispatch(click(id));
    };

    // 카테고리에 해당하는 제품 수 반환해주는 함수
    const getCategoryNum = name => {
        const sameCategory = categories.filter(item => name === item.name);

        if (sameCategory.length > 0) {
            return sameCategory[0].count;
        } else {
            return 0;
        }
    };

    return (
        <Wrapper>
            <Background>
                <Window>
                    <CloseBtn className='close' onClick={onClick} />
                    <h3>카테고리</h3>
                    <ul>
                        {filterList.map(filter => (
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
                                <span className='count'>
                                    {getCategoryNum(filter.label)}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <Footer>
                        <Button
                            className={
                                selectedFilter.length <= 0 && 'disabled-btn'
                            }
                            onClick={() => dispatch(initialize())}
                        >
                            <InitializationIcon />
                            <span>초기화</span>
                        </Button>
                        <Button className='purple-btn' onClick={onClick}>
                            <span>확인</span>
                        </Button>
                    </Footer>
                </Window>
            </Background>
        </Wrapper>
    );
};

export default FilterModal;

const Wrapper = styled.div`
    z-index: 1300;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`;

const Background = styled.div`
    position: fixed;
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Window = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 780px;
    min-width: 780px;
    min-height: 540px;
    max-height: 540px;
    margin: 0px;
    padding: 0px 23.5px 24px 30px;
    border-radius: 12px;
    box-shadow: none;
    background-color: rgb(255, 255, 255);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    overflow: hidden;

    & .close {
        z-index: 1;
        position: absolute;
        top: 30px;
        right: 30px;
        cursor: pointer;
    }

    & h3 {
        position: relative;
        display: flex;
        align-items: center;
        margin: 0;
        padding-top: 30px;
        padding-bottom: 20px;
        font-weight: 500;
        font-size: 24px;
        line-height: 39px;
        letter-spacing: -0.05em;
    }

    & ul {
        display: flex;
        flex-wrap: wrap;
        overflow: auto;
        padding: 0;
        max-height: 380px;
        margin-bottom: 56px;
    }

    & li {
        box-sizing: border-box;
        list-style-type: none;
        display: flex;
        flex: 0 0 calc(33.3333%);
        height: 36px;
        align-items: center;
        padding-right: 22px;
        margin-bottom: 0px;
        cursor: pointer;
    }

    & .close {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    & span {
        margin-left: 8px;
        margin-right: 4px;
        font-weight: 400;
        line-height: 17px;
        color: #333;
        overflow: hidden;
        word-break: break-all;
        white-space: normal;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    & .count {
        margin: 0;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #cccccc;
    }
`;

const Footer = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    margin-bottom: 24px;
    background-color: #fff;
`;

const Button = styled.button`
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    width: 140px;
    height: 44px;
    border-radius: 3px;
    border: 1px solid #ddd;
    background-color: #fff;
    cursor: pointer;

    svg path {
        stroke: #666;
    }

    span {
        margin-left: 5px;
        font-weight: 500;
        color: rgb(102, 102, 102);
    }

    &.purple-btn {
        background-color: #5f0080;
        border: 0px none;

        span {
            margin: 0;
            color: #fff;
        }
    }

    &.disabled-btn {
        svg path {
            stroke: #ddd;
        }

        span {
            color: #ddd;
        }
    }
`;
