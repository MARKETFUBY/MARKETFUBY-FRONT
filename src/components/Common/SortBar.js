import styled from 'styled-components';

const SortBar = ({ count }) => {
    return (
        <Wrapper>
            <Count>총 {count}건</Count>
            <SortList>
                <li>추천순</li>
                <li>신상품순</li>
                <li>판매량순</li>
                <li>혜택순</li>
                <li>낮은 가격순</li>
                <li>높은 가격순</li>
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
