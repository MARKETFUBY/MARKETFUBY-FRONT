import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from '../../assets/icon/arrow.svg';

const Filter = () => {
    return (
        <Wrapper>
            <Header>필터</Header>
            <div>
                <MenuWrapper>
                    <MenuTitle>
                        <div>카테고리</div>
                        <ArrowIcon />
                    </MenuTitle>
                </MenuWrapper>
                <MenuWrapper>
                    <MenuTitle>
                        <div>브랜드</div>
                        <ArrowIcon />
                    </MenuTitle>
                </MenuWrapper>
                <MenuWrapper>
                    <MenuTitle>
                        <div>가격</div>
                        <ArrowIcon />
                    </MenuTitle>
                </MenuWrapper>
                <MenuWrapper>
                    <MenuTitle>
                        <div>혜택</div>
                        <ArrowIcon />
                    </MenuTitle>
                </MenuWrapper>
                <MenuWrapper>
                    <MenuTitle>
                        <div>유형</div>
                        <ArrowIcon />
                    </MenuTitle>
                </MenuWrapper>
                <MenuWrapper>
                    <MenuTitle>
                        <div>특정상품 제외</div>
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
`;

const MenuWrapper = styled.div`
    border-bottom: 1px solid rgb(238, 238, 238);
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

    div {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        font-weight: 500;
        font-size: 15px;
        line-height: 20px;
        color: rgb(51, 51, 51);
    }
`;
