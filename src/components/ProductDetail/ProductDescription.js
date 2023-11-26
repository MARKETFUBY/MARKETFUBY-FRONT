import styled from 'styled-components';

const ProductDescription = ({ productInfoImg }) => {
    return (
        <Wrapper>
            {productInfoImg?.map((image, idx) => (
                <img key={idx} src={image} />
            ))}
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
