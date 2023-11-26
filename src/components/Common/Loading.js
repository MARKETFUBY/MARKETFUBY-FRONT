import styled from 'styled-components';
import spinner from '../../assets/icon/spinner.gif';

const Loading = () => {
    return (
        <Wrapper>
            <img src={spinner} />
        </Wrapper>
    );
};

export default Loading;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: calc(100vh - 155px);
    justify-content: center;
    align-items: center;

    img {
        width: 30px;
        height: 30px;
    }
`;
