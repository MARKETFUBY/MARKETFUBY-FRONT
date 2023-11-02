import styled from 'styled-components';
import Header from '../components/Common/Header';
import Title from '../components/Common/Title';
import Filter from '../components/Common/Filter';
import SortBar from '../components/Common/SortBar';
import Product from '../components/Common/Product';

import { PRODUCT_DATA } from './ProductData';

const NewProduct = () => {
    return (
        <>
            <Header />
            <Title text='신상품' />
            <Body>
                <Filter />
                <Result>
                    <SortBar count='6' />
                    <ProductList>
                        {PRODUCT_DATA.map(product => {
                            return <Product {...product} />;
                        })}
                    </ProductList>
                </Result>
            </Body>
        </>
    );
};

export default NewProduct;

const Body = styled.div`
    position: relative;
    display: flex;
    width: 1050px;
    margin: 50px auto 75px;
`;

const Result = styled.div`
    width: 100%;
`;

const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 249px);
    gap: 31px 18px;
    width: 100%;
`;
