import styled from 'styled-components';

const ProductDescription = ({ detailInfoImg }) => {
    return (
        <Wrapper id='product-description'>
            {detailInfoImg?.map((image, idx) => (
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
