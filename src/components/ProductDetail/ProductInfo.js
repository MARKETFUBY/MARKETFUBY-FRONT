import styled from 'styled-components';

const ProductInfo = ({ productInfoImg }) => {
    return (
        <Wrapper id='product-info'>
            {productInfoImg?.map((image, idx) => (
                <img key={idx} src={image} />
            ))}
        </Wrapper>
    );
};

export default ProductInfo;

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
