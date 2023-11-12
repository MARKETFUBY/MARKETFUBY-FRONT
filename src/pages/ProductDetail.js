import styled from 'styled-components';
import Header from '../components/Common/Header';
import ProductAtf from '../components/ProductDetail/ProductAtf';
import NavBar from '../components/ProductDetail/NavBar';
import ProductDescription from '../components/ProductDetail/ProductDescription';

const ProductDetail = () => {
    return (
        <>
            <Header />
            <ProductAtf />
            <NavBar />
            <ProductDescription />
        </>
    );
};

export default ProductDetail;
