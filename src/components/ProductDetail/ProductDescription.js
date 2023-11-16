import styled from 'styled-components';
import detail1 from '../../assets/product/detail1.png';
import detail2 from '../../assets/product/detail2.png';
import detail3 from '../../assets/product/detail3.png';

const ProductDescription = () => {
    return (
        <Wrapper>
            <img src={detail1} />
            <img src={detail2} />
            <img src={detail3} />
        </Wrapper>
    );
};

export default ProductDescription;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1010px;
    margin: 0 auto;
    padding-bottom: 100px;

    img {
        width: 1010px;
    }
`;
