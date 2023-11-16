import styled from 'styled-components';

const NavBar = () => {
    return (
        <Wrapper>
            <BtnWrapper>
                <NavBtn>상품설명</NavBtn>
                <NavBtn>상세정보</NavBtn>
                <NavBtn>후기</NavBtn>
                <NavBtn>문의</NavBtn>
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
    cursor: pointer;
`;
