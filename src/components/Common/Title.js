import styled from 'styled-components';

// 페이지 제목
const Title = ({ text }) => {
    return <Wrapper>{text}</Wrapper>;
};

export default Title;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

    font-weight: 500;
    font-size: 28px;
    color: rgb(51, 51, 51);
    line-height: 35px;
    letter-spacing: -1px;
    text-align: center;
`;
